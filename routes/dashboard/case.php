<?php

use App\Http\Controllers\CaselistController;
use Illuminate\Support\Facades\Route;

Route::resource('case', CaselistController::class)
    ->only(['index', 'create', 'store', 'edit', 'update', 'destroy'])
    ->names('case');
