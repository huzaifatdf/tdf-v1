<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Form extends Model
{
    /** @use HasFactory<\Database\Factories\FormFactory> */
    use HasFactory;


    protected $fillable = [
        'name',
        'description',
        'slug',
        'submit_button_text',
        'success_message',
        'redirect_url',
        'notification_email',
        'email_subject',
        'status',
        'require_captcha',
        'store_submissions',
        'created_by',
    ];

    protected $casts = [
        'require_captcha' => 'boolean',
        'store_submissions' => 'boolean',
        'created_by' => 'integer',
    ];
    public function submissions()
    {
        return $this->hasMany(FormSubmission::class);
    }
    public function createdBy()
    {
        return $this->belongsTo(User::class, 'created_by');
    }
// Add this relationship method
    public function fields()
    {
        return $this->hasMany(FormField::class);
    }

}
