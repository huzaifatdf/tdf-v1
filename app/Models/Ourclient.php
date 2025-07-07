<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ourclient extends Model
{
    /** @use HasFactory<\Database\Factories\OurclientFactory> */
    use HasFactory;

    protected $table = 'ourclients';

    protected $guarded = [];

    //fillable
    protected $fillable = [
        'name',
        'image',
        'description',
        'status',
        'priority',
        'coloredimage'
    ];

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    public function scopePublished($query)
    {
        return $query->where('status', 'published');
    }

}
