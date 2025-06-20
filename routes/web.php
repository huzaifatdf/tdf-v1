<?php

use App\Http\Controllers\FormController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SeoTrackingController;
use App\Http\Controllers\WebSiteController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Facades\Artisan;
use App\Http\Controllers\SitemapController;
use App\Http\Middleware\TrackSeoVisits;

Route::get('/run-optimize-clear', function () {
    Artisan::call('optimize:clear');
    return 'Optimized and cleared!';
})->name('run-optimize-clear');

Route::get('/sitemap.xml', [SitemapController::class, 'index'])->name('sitemap.index');






Route::get('/dashboard', function () {

// $visitorService = app(\App\Services\SeoVisitorService::class);
// $stats = $visitorService->getStatistics([
//     'date_from' => '2023-01-01',
//     'date_to' => '2025-12-31'
// ]);
// dd($stats);
   if (request()->secure()) {
          $searchConsoleService = app(\App\Services\GoogleSearchConsoleService::class);
         $report = $searchConsoleService->getSiteReport("https://thedesignsfirm.com",30);
    }
    else {
        $report = [];
    }
    return Inertia::render('Dashboard',[
        'report' => $report
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


Route::post('submission/client/{slug}/submit', [FormController::class, 'submit'])->name('client.submit.form');


require __DIR__.'/auth.php';

Route::prefix('dashboard')->middleware(['auth', 'verified'])->group(function () {
    require __DIR__.'/dashboard/user.php';
    require __DIR__.'/dashboard/media.php';
    require __DIR__.'/dashboard/form.php';
    require __DIR__.'/dashboard/product.php';
    require __DIR__.'/dashboard/service.php';
    require __DIR__.'/dashboard/page.php';
    require __DIR__.'/dashboard/ourclient.php';
    require __DIR__.'/dashboard/case.php';
    require __DIR__.'/dashboard/industry.php';
    require __DIR__.'/dashboard/notification.php';
});

Route::middleware(TrackSeoVisits::class)->group(function () {
Route::get('/', function () {
    return Inertia::render('Website/Homev2');
});
Route::get('/{slug}', [WebSiteController::class, 'showStaticPages']);
Route::get('/case-studies/{slug}', [WebSiteController::class, 'showCaseStudy'])
    ->name('casestudy.show');


Route::get('/product/{slug}', [WebSiteController::class, 'showProduct'])
    ->name('web.product.show');
});



