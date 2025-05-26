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
        Schema::table('casestudies', function (Blueprint $table) {
            $table->json('techstack')->nullable()->after('services');
            $table->text('component')->nullable()->after('techstack');
            $table->json('experience')->nullable()->after('component');
            $table->text('goals')->nullable()->after('experience');
            $table->longText('other')->nullable()->after('goals');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('casestudies', function (Blueprint $table) {
            //
        });
    }
};
