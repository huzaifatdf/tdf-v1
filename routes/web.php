<?php

use App\Http\Controllers\FormController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\WebSiteController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Facades\Artisan;
use App\Http\Controllers\SitemapController;

Route::get('/run-optimize-clear', function () {
    Artisan::call('optimize:clear');
    return 'Optimized and cleared!';
})->name('run-optimize-clear');

Route::get('/sitemap.xml', [SitemapController::class, 'index'])->name('sitemap.index');


Route::get('/', function () {
    return Inertia::render('Website/Homev2');
});

Route::get('/dashboard', function () {
    $ahrefs = new \App\Services\AhrefsService();
    $rating = $ahrefs->getDomainRating("thedesignsfirm.com");
    return Inertia::render('Dashboard', [
        'rating' => $rating
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

Route::get('/{slug}', [WebSiteController::class, 'showStaticPages']);
Route::get('/case-studies/{slug}', [WebSiteController::class, 'showCaseStudy'])
    ->name('casestudy.show');


Route::get('/product/{slug}', [WebSiteController::class, 'showProduct'])
    ->name('web.product.show');


