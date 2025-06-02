<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FormNotificationLog extends Model
{
     

    protected $fillable = [
        'form_id',
        'submission_id',
        'to_email',
        'subject',
        'status',
        'error_message',
    ];
    protected $casts = [
        'status' => 'string',
        'error_message' => 'string',
    ];
    public function form()
    {
        return $this->belongsTo(Form::class);
    }
    public function submission()
    {
        return $this->belongsTo(FormSubmission::class);
    }
    public function getStatusLabelAttribute()
    {
        return $this->status === 'sent' ? 'Sent' : 'Failed';
    }
    public function getErrorMessageAttribute($value)
    {
        return $value ?: 'No error message provided';
    }
}
