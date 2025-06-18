<?php

use App\Http\Controllers\NotificationController;
use Illuminate\Support\Facades\Route;

Route::resource('notification', NotificationController::class)
    ->only(['index'])
    ->names('notification');
