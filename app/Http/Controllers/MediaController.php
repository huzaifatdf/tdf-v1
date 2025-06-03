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
        $validator = ValidatorFacade::make($request->all(), ([
            'files.*' => 'required|file|max:10240', // 10MB max
            'collection' => 'nullable|string',
        ]));

         if ($validator->fails()) {
            $errors = $validator->errors()->all();
            $errorMessage = "Validation Errors:\n";

            foreach ($errors as $index => $error) {
                $errorMessage .= ($index + 1) . ". " . $error . "\n";
            }
            session()->flash('error', $errorMessage);
            return back();
        }

        $uploadedMedia = [];

        foreach ($request->file('files') as $file) {
            $mediaItem = MediaItem::create();
            $media = $mediaItem->addMedia($file)
                ->toMediaCollection($request->collection ?? 'default');

            $uploadedMedia[] = $this->formatMediaItem($media);
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
