<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class WebSiteController extends Controller
{
    
    public function showStaticPages($slug)
{
    $component = 'Website/' . ucfirst($slug);
    $path = resource_path("js/Pages/{$component}.jsx");

    if (!file_exists($path)) {
        abort(404);
    }

    return Inertia::render($component, [
        'metaTitle' => ucfirst($slug) . ' | TDF Agency',
        'metaDescription' => 'Learn more about our ' . ucfirst($slug) . ' at TDF Agency.',
    ]);
}

    
}
