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
        Schema::create('pages', function (Blueprint $table) {
            $table->id();
            $table->string('image')->nullable();
            $table->string('slug')->unique();
            $table->text('title');
            $table->text('description')->nullable();

            $table->text('meta_title')->nullable();
            $table->text('meta_description')->nullable();
            $table->string('meta_keywords')->nullable();
            $table->json('meta_schema')->nullable(); // Structured data
            $table->string('canonical_url')->nullable();
            $table->json('social_meta')->nullable();
            $table->boolean('show_in_sitemap')->default(true);

            $table->string('redirect_url')->nullable();

            $table->text('customscript')->nullable();
            $table->text('customstyle')->nullable();

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
        Schema::dropIfExists('pages');
    }
};
