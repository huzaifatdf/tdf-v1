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
    ];

    protected $casts = [
        'require_captcha' => 'boolean',
        'store_submissions' => 'boolean',
    ];
    public function submissions()
    {
        return $this->hasMany(FormSubmission::class);
    }

// Add this relationship method
    public function fields()
    {
        return $this->hasMany(FormField::class);
    }

}
