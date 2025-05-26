<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Casestudy extends Model
{
    /** @use HasFactory<\Database\Factories\CasestudyFactory> */
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'description',
        'website',
        'services',
        'status',
        'priority',
        'post_image',
        'techstack',
        'component',
        'experience',
        'goals',
        'other',
    ];
    protected $casts = [
        'services' => 'array',
        'status' => 'string',
        'priority' => 'integer',
        'post_image' => 'string',
        'techstack' => 'array',
        'component' => 'string',
        'experience' => 'array',
        'goals' => 'string',
        'other' => 'string',
    ];
    protected $table = 'casestudies';
}
