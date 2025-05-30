<?php

use App\Http\Controllers\MediaController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/media', [MediaController::class, 'index'])->name('media.index');
Route::post('/media/upload', [MediaController::class, 'store'])->name('media.upload');
Route::delete('/media/{media}', [MediaController::class, 'destroy'])->name('media.destroy');
Route::post('/media/bulk', [MediaController::class, 'bulkDestroy'])->name('media.bulkDestroy');
