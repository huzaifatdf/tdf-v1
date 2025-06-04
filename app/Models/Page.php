<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Page extends Model
{
    /** @use HasFactory<\Database\Factories\PageFactory> */
    use HasFactory;
    use SoftDeletes;


    protected $fillable = [
        'image',
        'slug',
        'title',
        'description',
        'meta_title',
        'meta_description',
        'meta_keywords',
        'meta_schema',
        'canonical_url',
        'social_meta',
        'show_in_sitemap',
        'redirect_url',
        'customscript',
        'customstyle',
        'status',
        'priority'
    ];

    protected $casts = [
        'meta_schema' => 'array',
        'social_meta' => 'array'
    ];


}
