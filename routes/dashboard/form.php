<?php

use App\Http\Controllers\FormController;
use Illuminate\Support\Facades\Route;

Route::resource('form', FormController::class)
    ->only(['index', 'create', 'store', 'edit', 'update', 'destroy'])
    ->names('form');
