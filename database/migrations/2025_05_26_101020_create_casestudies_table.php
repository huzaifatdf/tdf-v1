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
        Schema::create('casestudies', function (Blueprint $table) {
            $table->id();
            $table->string('title');
             $table->string('subtitle')->nullable();
            $table->string('slug')->unique();
            $table->text('description')->nullable();
            $table->string('website')->nullable();
            $table->json('services')->nullable();
            $table->enum('status', ['draft', 'published'])->default('draft');
            $table->integer('priority')->default(0);
            $table->string('post_image')->nullable();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('casestudies');
    }
};
