<?php

namespace App\Providers;

use App\Models\FormSubmission;
use App\Observers\FormSubmissionObserver;
use App\Services\GoogleSearchConsoleService;
use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->singleton(GoogleSearchConsoleService::class, function ($app) {
        return new GoogleSearchConsoleService();
    });
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Schema::defaultStringLength(191);
        Vite::prefetch(concurrency: 3);
        FormSubmission::observe(FormSubmissionObserver::class);
    }
}
