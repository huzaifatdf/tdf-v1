<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('seo_page_visitors', function (Blueprint $table) {
            $table->id();

            // Page information
            $table->string('page_url');
            $table->string('page_title')->nullable();
            $table->string('page_language')->nullable();

            // Visitor identification
            $table->string('ip')->nullable();
            $table->string('user_agent')->nullable();
            $table->string('session_id')->nullable();

            // Geographic information
            $table->string('country')->nullable();
            $table->string('country_code')->nullable();
            $table->string('region')->nullable();
            $table->string('region_name')->nullable();
            $table->string('city')->nullable();
            $table->string('zip')->nullable();
            $table->string('latitude')->nullable();
            $table->string('longitude')->nullable();
            $table->string('timezone')->nullable();

            // Device/Client information
            $table->string('os')->nullable();
            $table->string('os_version')->nullable();
            $table->string('browser')->nullable();
            $table->string('browser_version')->nullable();
            $table->string('device')->nullable();
            $table->string('device_type')->nullable(); // mobile, desktop, tablet, bot, etc.
            $table->boolean('is_mobile')->default(false);
            $table->boolean('is_tablet')->default(false);
            $table->boolean('is_desktop')->default(false);
            $table->boolean('is_bot')->default(false);

            // Referral information
            $table->string('referrer')->nullable();
            $table->string('referrer_domain')->nullable();
            $table->string('referrer_url')->nullable();

            // UTM parameters
            $table->string('utm_source')->nullable();
            $table->string('utm_medium')->nullable();
            $table->string('utm_campaign')->nullable();
            $table->string('utm_content')->nullable();
            $table->string('utm_term')->nullable();
            $table->string('utm_id')->nullable();

            // Additional marketing info
            $table->string('gclid')->nullable(); // Google Click ID
            $table->string('fbclid')->nullable(); // Facebook Click ID
            $table->string('msclkid')->nullable(); // Microsoft Click ID

            // Engagement metrics
            $table->integer('page_load_time')->nullable(); // in milliseconds
            $table->integer('scroll_depth')->nullable(); // percentage (0-100)
            $table->timestamp('time_on_page')->nullable();

            // Other useful fields
            $table->string('screen_resolution')->nullable();
            $table->string('connection_type')->nullable(); // 4g, wifi, etc.
            $table->boolean('is_new_visitor')->default(true);
            $table->boolean('is_returning_visitor')->default(false);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('seo_page_visitors');
    }
};
