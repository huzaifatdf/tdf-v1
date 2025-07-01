<?php

namespace App\Http\Controllers;

use App\Models\Caselist;
use App\Models\Casestudy;
use App\Models\Page;
use App\Models\Product;
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
        $casestudy = Caselist::where('slug', $slug)
            ->where('status', 'published')
            ->firstOrFail();

        return Inertia::render('Website/Casestudiesinner', [
            'casestudy' => $casestudy,
            'metaTitle' => $casestudy->title . ' | TDF Agency',
            'metaDescription' => $casestudy->description ?? 'Learn more about our case study at TDF Agency.',
        ]);
    }


     public function dynamicPage(Request $request, $slug) {
        $page = Page::where('slug', $slug)->where('status', 'published')->with('publishedSections')->first();
        return Inertia::render('Website/Dynamicpage', [
            'page' => $page
        ]);
    }

   public function showProduct(Request $request, $slug)
{
    $product = Product::where('slug', $slug)
        ->published()
        ->firstOrFail();  // Fail early if product not found

    // Get ONLY the slug of previous product
    $previousSlug = Product::where('priority', '<', $product->priority)
        ->published()
        ->orderBy('priority', 'desc')
        ->value('slug');  // Retrieves only the slug value

    // Get ONLY the slug of next product
    $nextSlug = Product::where('priority', '>', $product->priority)
        ->published()
        ->orderBy('priority', 'asc')
        ->value('slug');  // Retrieves only the slug value

    return Inertia::render('Website/Productinner', [
        'product' => $product,
        'previousSlug' => $previousSlug,
        'nextSlug' => $nextSlug,
    ]);
}
}
