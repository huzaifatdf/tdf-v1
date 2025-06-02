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
        Schema::create('services', function (Blueprint $table) {
            $table->id();
            $table->text('title');
            $table->string('slug')->unique();
            $table->text('description')->nullable();

            $table->longText('data')->nullable(); // JSON data for product details
            $table->string('image')->nullable(); // Main product image
            $table->string('thumbnail')->nullable(); // Thumbnail image
            $table->enum('status', ['draft', 'published'])->default('draft');
            $table->integer('priority')->default(0);
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('services');
    }
};
