<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

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
