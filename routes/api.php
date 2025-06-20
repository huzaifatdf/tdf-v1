<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\SearchConsoleController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

// Route::prefix('search-console')->group(function () {
//     // Connection verification
//     Route::get('/verify-connection', [SearchConsoleController::class, 'verifyConnection']);

//     // Site management
//     Route::get('/sites', [SearchConsoleController::class, 'getSites']);
//     Route::post('/site-status', [SearchConsoleController::class, 'getSiteStatus']);
//     Route::post('/site-report', [SearchConsoleController::class, 'getSiteReport']);

//     // Analytics
//     Route::post('/analytics', [SearchConsoleController::class, 'getSearchAnalytics']);
//     Route::post('/inspect-url', [SearchConsoleController::class, 'inspectUrl']);

//     // Sitemap management
//     Route::post('/sitemaps', [SearchConsoleController::class, 'getSitemaps']);
//     Route::post('/submit-sitemap', [SearchConsoleController::class, 'submitSitemap']);
//     Route::delete('/delete-sitemap', [SearchConsoleController::class, 'deleteSitemap']);
// });


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// API version 1 routes
Route::prefix('v1')->group(function() {

    Route::get('/services', [App\Http\Controllers\Api\V1\ServiceController::class, 'index']);
    Route::get('/products', [App\Http\Controllers\Api\V1\ProductController::class, 'index']);
     Route::get('/case', [App\Http\Controllers\Api\V1\CaseController::class, 'index']);
    Route::get('/ourclient', [App\Http\Controllers\Api\V1\OurclientController::class, 'index']);
    Route::get('/industries', [App\Http\Controllers\Api\V1\IndustryController::class, 'index']);
    //form group
    Route::prefix('form')->group(function () {
        Route::get('/{slug}', [App\Http\Controllers\Api\V1\FormController::class, 'form']);
    });

});
