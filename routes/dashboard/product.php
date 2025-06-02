<?php

use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;

Route::resource('product', ProductController::class)
    ->only(['index', 'create', 'store', 'edit', 'update', 'destroy'])
    ->names('product');
