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
        Schema::create('forms', function (Blueprint $table) {
          $table->id();
            $table->string('name');
            $table->text('description')->nullable();
            $table->string('slug')->unique();

            // Basic Settings
            $table->string('submit_button_text')->default('Submit');
            $table->text('success_message')->nullable();
            $table->string('redirect_url')->nullable();

            // Email Notifications
            $table->string('notification_email')->nullable();
            $table->string('email_subject')->nullable();

            // Status & Security
            $table->enum('status', ['active', 'inactive'])->default('active');
            $table->boolean('require_captcha')->default(false);
            $table->boolean('store_submissions')->default(true);

            $table->timestamps();
        });


    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('forms');
    }
};
