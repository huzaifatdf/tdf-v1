<?php

use App\Http\Controllers\FormController;
use App\Http\Controllers\FormSubmissionController;
use Illuminate\Support\Facades\Route;

Route::resource('form', FormController::class)
    ->only(['index', 'create', 'store', 'edit', 'update', 'destroy'])
    ->names('form');

Route::get('submission/{slug}', [FormSubmissionController::class, 'index'])
    ->name('form.submission.index');

Route::get('submission/{slug}/create', [FormSubmissionController::class, 'create'])
    ->name('form.submission.create');

//submit
Route::post('submission/{slug}/submit', [FormSubmissionController::class, 'store'])
    ->name('form.submission.store');



    //dynamicform.submission.show
Route::get('submission/{slug}/show/{id}', [FormSubmissionController::class, 'show']) ->name('form.submission.show');


    // dynamicform.submission.export
Route::post('submission/{slug}/export', [FormSubmissionController::class, 'export'])
    ->name('form.submission.export');

    // Archive Submission
Route::post('submission/{slug}/{id}/archive', [FormSubmissionController::class, 'archive'])
    ->name('form.submission.archive');

Route::get('form/{slug}/duplicate', [FormSubmissionController::class, 'duplicate']) ->name('form.duplicate');



Route::post('submission/client/{slug}/submit', [FormController::class, 'submit'])->name('client.submit.form');
