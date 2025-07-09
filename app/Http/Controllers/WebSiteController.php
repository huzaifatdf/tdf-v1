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

    // Get ONLY the slug of previous casestudy
    $previousSlug = Caselist::where('priority', '<', $casestudy->priority)
        ->where('status', 'published')
        ->orderBy('priority', 'desc')
        ->value('slug');  // Retrieves only the slug value

    // Get ONLY the slug of next casestudy
    $nextSlug = Caselist::where('priority', '>', $casestudy->priority)
        ->where('status', 'published')
        ->orderBy('priority', 'asc')
        ->value('slug');  // Retrieves only the slug value



        return Inertia::render('Website/Casestudiesinner', [
            'previousSlug' => $previousSlug,
            'nextSlug' => $nextSlug,
            'casestudy' => $casestudy,
            'metaTitle' => $casestudy->title . ' | TDF Agency',
            'metaDescription' => $casestudy->description ?? 'Learn more about our case study at TDF Agency.',
        ]);
    }


     public function dynamicPage(Request $request, $slug) {

        $page = Page::where('slug', $slug)->with('publishedSections')->first();
        if (!$page) {
            abort(404);
        }
        if($page->status !== 'published') {
            abort(403, 'This page is not published.');
        }
        if($page->predefine_page) {
            // If the page has a predefined page, we can render it directly
            $component = 'Website/' . ucfirst($page->predefine_page);
            $path = resource_path("js/Pages/{$component}.jsx");

            if (!file_exists($path)) {
                abort(404);
            }

            return Inertia::render($component, [
                'page' => $page,
                'metaTitle' => $page->meta_title ?? $page->title,
                'metaDescription' => $page->meta_description ?? 'Learn more about our ' . $page->title . ' at TDF Agency.',
            ]);
        }

        if($page->redirect_url) {
            return redirect($page->redirect_url);
        }

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
