<?php
namespace App\Http\Middleware;

use Closure;
use App\Services\SeoVisitorService;

class TrackSeoVisits
{
    public function handle($request, Closure $next)
    {
        $response = $next($request);

        // Skip tracking for non-GET requests
        if ($request->method() !== 'GET') {
            return $response;
        }

        app(SeoVisitorService::class)->trackVisit();


        return $response;
    }
}
