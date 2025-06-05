<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use App\HandlesMediaQueries;
use App\Models\Form;

class HandleInertiaRequests extends Middleware
{
    use HandlesMediaQueries;
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
            $dynamic_forms_list = Form::where('status', 'active')
            ->get(['id', 'name', 'slug', 'redirect_url'])
            ->toArray();




        $shared = [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
            ],
            'appUrl' => config('app.url'),
             'flash' => [
                'success' => $request->session()->get('success'),
                'error' => $request->session()->get('error'),
                'warning' => $request->session()->get('warning'),
                'info' => $request->session()->get('info'),
                'message' => $request->session()->get('message'),
            ],
            'dynamicFormsList' => $dynamic_forms_list,
        ];

        if ($request->routeIs('product.*') || $request->routeIs('service.*')) {
            $shared['media'] =  $this->getFilteredMedia($request);
            $shared['filters'] = $request->only(['search', 'perPage', 'mime_type', 'collection_name', 'sort', 'direction']);
            $shared['collections'] =  Media::pluck('collection_name')->unique()->values();
        }

        return $shared;
    }
}
