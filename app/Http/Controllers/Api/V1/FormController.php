<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Api\BaseController;
use App\Models\Form;
use App\Models\FormSubmission;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class FormController extends BaseController
{
  public function form(Request $request, $slug)
    {
        $form = Form::where('slug', $slug)->with(['fields' => function($query) {
            $query->orderBy('sort_order');
        }])->first();

        if (!$form) {
            return ['error' => 'Form not found',];
        }

        // Check if form is active
        if ($form->status !== 'active') {
            return ['error' => 'This form is not currently accepting submissions',];
        }

        return [
            'form' => $form,
            'fields' => $form->fields,
            'slug' => $slug,
        ];
    }

}
