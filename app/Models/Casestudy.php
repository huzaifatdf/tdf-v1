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
        'approach',
        'approach_lower_text',
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
        'approach' => 'string',
        'approach_lower_text' => 'string',
    ];
    protected $table = 'casestudies';
}
