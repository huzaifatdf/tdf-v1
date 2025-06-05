<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\View;
use App\Models\Page;

class SitemapController extends Controller
{
    public function index()
    {
         $pages = Page::where('status', 'published')
            ->orderBy('updated_at', 'desc')
            ->get();
        $contents = View::make('sitemap')
            ->with('pages', $pages);
        $response = Response::make($contents, 200);
        $response->header('Content-Type', 'text/xml');

        return $response;
    }
}
