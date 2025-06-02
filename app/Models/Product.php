<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model
{
    /** @use HasFactory<\Database\Factories\ProductFactory> */
    use HasFactory;
    use SoftDeletes; // Use SoftDeletes trait for soft deleting

    protected $fillable = [
        'title',
        'slug',
        'description',
        'data',
        'image',
        'thumbnail',
        'status',
        'priority',
    ];
    protected $casts = [
        'data' => 'array', // Cast JSON data to array
        'status' => 'string', // Ensure status is treated as a string
        'priority' => 'integer', // Ensure priority is an integer
    ];
}
