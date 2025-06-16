<?php

namespace App;

use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Illuminate\Http\Request;

trait HandlesMediaQueries
{
     protected function getFilteredMedia(Request $request)
    {
        $query = Media::query()->orderBy('created_at', 'desc');

        // Filters
        if ($request->mime_type) {
            $query->where('mime_type', $request->mime_type);
        }

        if ($request->collection_name) {
            $query->where('collection_name', $request->collection_name);
        }

        // Search
        if ($request->search) {
            $query->where(function($q) use ($request) {
                $q->where('name', 'like', "%{$request->search}%")
                  ->orWhere('file_name', 'like', "%{$request->search}%");
            });
        }

        // Sorting
        if ($request->sort) {
            $query->orderBy($request->sort, $request->direction ?? 'asc');
        }

        return $query->paginate($request->perPage ?? 24)->withQueryString();
    }
}
