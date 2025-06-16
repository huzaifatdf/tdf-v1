<?php

use App\Http\Controllers\Api\V1\CaseController;
use App\Http\Controllers\CaselistController;
use Illuminate\Support\Facades\Route;

Route::resource('case', CaselistController::class)
    ->only(['index', 'create', 'store', 'edit', 'update', 'destroy'])
    ->names('case');
Route::get('case/{case}/duplicate', [CaselistController::class, 'duplicate'])
    ->name('case.duplicate');
