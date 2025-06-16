<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Service extends Model
{
    /** @use HasFactory<\Database\Factories\ServiceFactory> */
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

    //apend
    protected $appends = ['short_description','short_title','section_no'];

    public function scopePublished($query)
    {
        return $query->where('status', 'published');
    }


    //short_description
    public function getShortDescriptionAttribute()
    {
        return substr($this->description, 0, 80) . '...';
    }

       public function getShortTitleAttribute()
    {
        return substr($this->title, 0, 18) . '...';
    }

    //section_no 01,02,03 ... all items according to priority start with 01

    public function getSectionNoAttribute()
    {
        return str_pad($this->priority, 2, '0', STR_PAD_LEFT);
    }



}
