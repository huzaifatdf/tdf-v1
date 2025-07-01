<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;
use Illuminate\Support\Facades\Http;

class ReCaptcha implements Rule
{
    public function passes($attribute, $value)
    {
        if (empty($value)) {
            return false;
        }

        $response = Http::asForm()->post('https://www.google.com/recaptcha/api/siteverify', [
            'secret' => config('services.recaptcha.secret_key'),
            'response' => $value,
            'remoteip' => request()->ip()
        ]);

        $result = $response->json();

        return $result['success'] ?? false;
    }

    public function message()
    {
        return 'reCAPTCHA verification failed. Please try again.';
    }
}
