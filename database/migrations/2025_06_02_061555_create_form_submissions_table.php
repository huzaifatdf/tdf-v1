<?php

use App\Models\User;
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
        Schema::create('form_submissions', function (Blueprint $table) {
           $table->id();
            $table->foreignId('form_id')->constrained('forms')->onDelete('cascade');

            // Submission Data
            $table->json('data'); // All form field responses

            // Tracking Info
            $table->string('ip_address')->nullable();
            $table->string('user_agent')->nullable();

            $table->foreignIdFor(User::class)->nullable();

            // Status
            $table->enum('status', ['new', 'read', 'archived'])->default('new');
            $table->text('notes')->nullable();

            $table->timestamps();
            $table->softDeletes();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('form_submissions');
    }
};
