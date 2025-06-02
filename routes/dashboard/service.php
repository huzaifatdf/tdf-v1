<?php

use App\Http\Controllers\ServiceController;
use Illuminate\Support\Facades\Route;

Route::resource('service', ServiceController::class)
    ->only(['index', 'create', 'store', 'edit', 'update', 'destroy'])
    ->names('service');
