<?php
namespace App\Http\Middleware;

use Closure;
use App\Services\SeoVisitorService;

class TrackSeoVisits
{
    public function handle($request, Closure $next)
    {
        $response = $next($request);


        app(SeoVisitorService::class)->trackVisit();


        return $response;
    }
}
