<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;


class FormField extends Model
{

    protected $fillable = [
        'form_id',
        'name',
        'label',
        'type',
        'placeholder',
        'default_value',
        'help_text',
        'required',
        'max_length',
        'min_length',
        'options',
        'sort_order',
        'width'
    ];
    protected $casts = [
        'options' => 'array',
        'required' => 'boolean',
        'max_length' => 'integer',
        'min_length' => 'integer',
        'sort_order' => 'integer',
    ];
    public function form()
    {
        return $this->belongsTo(Form::class);
    }
    public function getTypeLabelAttribute()
    {
        $labels = [
            'text' => 'Text',
            'email' => 'Email',
            'number' => 'Number',
            'tel' => 'Telephone',
            'url' => 'URL',
            'textarea' => 'Textarea',
            'select' => 'Select',
            'radio' => 'Radio Button',
            'checkbox' => 'Checkbox',
            'date' => 'Date',
            'file' => 'File Upload',
            'hidden' => 'Hidden Field'
        ];

        return $labels[$this->type] ?? ucfirst($this->type);
    }
    public function getWidthClassAttribute()
    {
        $widthClasses = [
            'full' => 'w-full',
            'half' => 'w-1/2',
            'third' => 'w-1/3'
        ];

        return $widthClasses[$this->width] ?? 'w-full';
    }

}
