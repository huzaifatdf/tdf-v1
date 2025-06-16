<?php

use App\Http\Controllers\IndustryController;
use Illuminate\Support\Facades\Route;

Route::resource('industry', IndustryController::class)
    ->only(['index', 'create', 'store', 'edit', 'update', 'destroy'])
    ->names('industry');
