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
    Route::get('/ourclient', [App\Http\Controllers\Api\V1\OurclientController::class, 'index']);

});
