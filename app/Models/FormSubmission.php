<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class FormSubmission extends Model
{
    /** @use HasFactory<\Database\Factories\FormSubmissionFactory> */
    use HasFactory;
    use SoftDeletes;

    protected $table = 'form_submissions';

    protected $fillable = [
        'form_id',
        'data',
        'ip_address',
        'user_agent',
        'user_id',
        'status',
        'notes',
    ];
    protected $casts = [
        'data' => 'array',
        'ip_address' => 'string',
        'user_agent' => 'string',
        'user_id' => 'integer',
        'status' => 'string',
        'notes' => 'string',
    ];
    public function form()
    {
        return $this->belongsTo(Form::class);
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function getStatusLabelAttribute()
    {
        return match ($this->status) {
            'new' => 'New',
            'read' => 'Read',
            'archived' => 'Archived',
            default => 'Unknown',
        };
    }
    public function getDataAttribute($value)
    {
        return json_decode($value, true);
    }
    public function setDataAttribute($value)
    {
        $this->attributes['data'] = json_encode($value);
    }
}
