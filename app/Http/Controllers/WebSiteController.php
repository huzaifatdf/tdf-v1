<?php

namespace App\Http\Controllers;

use App\Models\Casestudy;
use App\Models\Page;
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

        $casestaties = Casestudy::where('status', 'published')
            ->orderBy('priority', 'desc')
            ->get();

        return Inertia::render($component, [
            'casestudies' => $casestaties,
            'metaTitle' => ucfirst($slug) . ' | TDF Agency',
            'metaDescription' => 'Learn more about our ' . ucfirst($slug) . ' at TDF Agency.',
        ]);
    }
    //showCaseStudy
    public function showCaseStudy($slug)
    {
        $casestudy = Casestudy::where('slug', $slug)
            ->where('status', 'published')
            ->firstOrFail();

        return Inertia::render('Website/Casestudiesinner', [
            'casestudy' => $casestudy,
            'metaTitle' => $casestudy->title . ' | TDF Agency',
            'metaDescription' => $casestudy->description ?? 'Learn more about our case study at TDF Agency.',
        ]);
    }


     public function dynamicPage(Request $request, $slug) {
        $page = Page::where('slug', $slug)->with('publishedSections')->first();
        return Inertia::render('Website/Dynamicpage', [
            'page' => $page
        ]);
    }
}
