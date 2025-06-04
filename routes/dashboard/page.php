<?php

use App\Http\Controllers\PageController;
use Illuminate\Support\Facades\Route;

Route::resource('page', PageController::class)
    ->only(['index', 'create', 'store', 'edit', 'update', 'destroy'])
    ->names('page');
