<?php

use App\Http\Controllers\OurclientController;
use Illuminate\Support\Facades\Route;

Route::resource('ourclient', OurclientController::class)
    ->only(['index', 'create', 'store', 'edit', 'update', 'destroy'])
    ->names('ourclient');
