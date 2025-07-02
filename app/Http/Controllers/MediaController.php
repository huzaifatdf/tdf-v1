<?php

namespace App\Http\Controllers;

use App\Models\MediaItem;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

use Illuminate\Support\Facades\Validator as ValidatorFacade;
use App\HandlesMediaQueries;

class MediaController extends Controller
{
    use HandlesMediaQueries;

     public function index(Request $request)
    {

        return Inertia::render('Media/Index', [
            'media' =>  $this->getFilteredMedia($request),
            'filters' => $request->only(['search', 'perPage', 'mime_type', 'collection_name', 'sort', 'direction']),
            'collections' => Media::pluck('collection_name')->unique()->values(),
        ]);
    }

public function store(Request $request)
{
    // Increase PHP limits just for this request
    ini_set('memory_limit', '256M');
    set_time_limit(300); // 5 minutes
    $validator = ValidatorFacade::make($request->all(), [
        'files.*' => 'required|file|max:10000', // 100MB max
        'collection' => 'nullable|string',
    ]);

    if ($validator->fails()) {
        // ... your existing error handling
    }

    $uploadedMedia = [];

    foreach ($request->file('files') as $file) {
        try {
            if ($file && $file->isValid()) {
                $mediaItem = MediaItem::create();

                $media = $mediaItem
                    ->addMedia($file)
                    ->toMediaCollection($request->collection ?: 'default');

                $uploadedMedia[] = $this->formatMediaItem($media);
            }
        } catch (\Exception $e) {
            // Log the error and continue with next file
            \Log::error('Media upload failed: '.$e->getMessage());
            continue;
        }
    }

    session()->flash('success', 'Media items have been uploaded successfully.');
    return back();
}

    public function destroy(Media $media)
    {
        $media->delete();
        session()->flash('success', 'Media item has been deleted successfully.');

        return back();
    }

    public function bulkDestroy(Request $request)
    {
          $request->validate([
        'data.ids' => 'required|array',
        'data.ids.*' => 'exists:media,id',
    ]);


        $mediaIds = $request->input('data.ids');
        Media::whereIn('id', $mediaIds)->delete();
        session()->flash('success', 'Selected media items have been deleted successfully.');
        return back();
    }

    private function formatMediaItem(Media $media): array
    {
        return [
            'id' => $media->id,
            'name' => $media->name,
            'file_name' => $media->file_name,
            'mime_type' => $media->mime_type,
            'size' => $media->size,
            'url' => $media->getUrl(),
            'created_at' => $media->created_at->toISOString(),
            'collection_name' => $media->collection_name,
            'conversions' => [
                'thumb' => $media->hasGeneratedConversion('thumb') ? $media->getUrl('thumb') : null,
                'medium' => $media->hasGeneratedConversion('medium') ? $media->getUrl('medium') : null,
            ],
        ];
    }
}
