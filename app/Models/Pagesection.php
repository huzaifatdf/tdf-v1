<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Pagesection extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'page_id',
        'type',
        'lang',
        'content',
        'status',
        'priority',
        'properties',
        
    ];



    public function page()
    {
        return $this->belongsTo(Page::class);
    }
}
