<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Industry extends Model
{
    /** @use HasFactory<\Database\Factories\IndustryFactory> */
    use HasFactory;

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


    //apend
    protected $appends = ['short_description','section_no'];

    public function scopePublished($query)
    {
        return $query->where('status', 'published');
    }


    //short_description
    public function getShortDescriptionAttribute()
    {
        return substr($this->description, 0, 150) . '...';
    }

    //section_no 01,02,03 ... all items according to priority start with 01

    public function getSectionNoAttribute()
    {
        return str_pad($this->priority, 2, '0', STR_PAD_LEFT);
    }


}
