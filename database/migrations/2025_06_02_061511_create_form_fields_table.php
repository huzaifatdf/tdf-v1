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
        Schema::create('form_fields', function (Blueprint $table) {
            $table->id();
            $table->foreignId('form_id')->constrained('forms')->onDelete('cascade');

            $table->text('name'); // field name/key
            $table->text('label');
            $table->enum('type', [
                'text', 'email', 'number', 'tel', 'url',
                'textarea', 'select', 'radio', 'checkbox',
                'date', 'file', 'hidden'
            ])->default('text');

            $table->text('placeholder')->nullable();
            $table->text('default_value')->nullable();
            $table->text('help_text')->nullable();

            // Validation
            $table->boolean('required')->default(false);
            $table->integer('max_length')->nullable();
            $table->integer('min_length')->nullable();

            // Options for select/radio/checkbox (JSON format)
            $table->json('options')->nullable();

            // Layout
            $table->integer('sort_order')->default(0);
            $table->enum('width', ['full', 'half', 'third'])->default('full');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('form_fields');
    }
};
