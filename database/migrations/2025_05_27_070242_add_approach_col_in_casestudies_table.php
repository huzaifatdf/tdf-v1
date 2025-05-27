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
            $table->text('approach')->nullable()->after('goals');
            $table->text('approach_lower_text')->nullable()->after('approach');
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
