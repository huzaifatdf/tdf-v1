<?php

namespace App\Services;

use App\Models\SeoPageVisitor;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Jaybizzle\CrawlerDetect\CrawlerDetect;
use WhichBrowser\Parser as BrowserParser;
use Torann\GeoIP\Facades\GeoIP;

class SeoVisitorService
{
    protected $request;
    protected $crawlerDetect;
    protected $browserParser;

    public function __construct(Request $request)
    {
        $this->request = $request;
        $this->crawlerDetect = new CrawlerDetect();
        $this->browserParser = new BrowserParser($request->userAgent());
    }

    /**
     * Track a new page visit
     */
    public function trackVisit()
    {
        // Skip tracking for bots if configured
        if (config('seo.tracking.skip_bots') && $this->isBot()) {
            return null;
        }

        $data = $this->collectVisitorData();

        return SeoPageVisitor::create($data);
    }

    /**
     * Collect all visitor data
     */
    protected function collectVisitorData(): array
    {
        $geoData = $this->getGeoData();
        $browserData = $this->getBrowserData();
        $referrerData = $this->getReferrerData();
        $utmData = $this->getUtmData();

        return array_merge([
            'page_url' => $this->request->fullUrl(),
            'page_title' => $this->getPageTitle(),
            'page_language' => $this->request->getPreferredLanguage(),

            'ip' => $this->request->ip(),
            'user_agent' => $this->request->userAgent(),
            'session_id' => $this->request->session()->getId(),

            'is_bot' => $this->isBot(),
            'screen_resolution' => $this->request->input('screen_resolution'),
            'connection_type' => $this->request->input('connection_type'),
        ], $geoData, $browserData, $referrerData, $utmData);
    }

    /**
     * Get geographic data
     */
    protected function getGeoData(): array
    {
        $ip = $this->request->ip();

        if (config('seo.tracking.geoip_enabled') && $ip && $ip !== '127.0.0.1') {
            $geoData = GeoIP::getLocation($ip);

            return [
                'country' => $geoData->country,
                'country_code' => $geoData->iso_code,
                'region' => $geoData->state,
                'region_name' => $geoData->state_name,
                'city' => $geoData->city,
                'zip' => $geoData->postal_code,
                'latitude' => $geoData->lat,
                'longitude' => $geoData->lon,
                'timezone' => $geoData->timezone,
            ];
        }

        return [];
    }

    /**
     * Get browser/device data
     */
protected function getBrowserData(): array
{
    $deviceType = 'desktop'; // default
    $isMobile = false;
    $isTablet = false;

    if ($this->browserParser->isMobile()) {
        $deviceType = 'mobile';
        $isMobile = true;
    } elseif ($this->browserParser->isType('tablet')) {
        $deviceType = 'tablet';
        $isTablet = true;
    }

    return [
        'os' => $this->browserParser->os->getName() ?? null,
        'os_version' => $this->browserParser->os->getVersion() ?? null,
        'browser' => $this->browserParser->browser->getName() ?? null,
        'browser_version' => $this->browserParser->browser->getVersion() ?? null,
        'device' => $this->browserParser->device->getModel() ?? null,
        'device_type' => $deviceType,
        'is_mobile' => $isMobile,
        'is_tablet' => $isTablet,
        'is_desktop' => (!$isMobile && !$isTablet),
    ];
}

    /**
     * Get referrer data
     */
    protected function getReferrerData(): array
    {
        $referrer = $this->request->headers->get('referer');

        if (!$referrer) {
            return [];
        }

        $referrerParts = parse_url($referrer);

        return [
            'referrer' => $referrer,
            'referrer_domain' => $referrerParts['host'] ?? null,
            'referrer_url' => $referrerParts['path'] ?? null,
        ];
    }

    /**
     * Get UTM parameters
     */
    protected function getUtmData(): array
    {
        return [
            'utm_source' => $this->request->input('utm_source'),
            'utm_medium' => $this->request->input('utm_medium'),
            'utm_campaign' => $this->request->input('utm_campaign'),
            'utm_content' => $this->request->input('utm_content'),
            'utm_term' => $this->request->input('utm_term'),
            'utm_id' => $this->request->input('utm_id'),
            'gclid' => $this->request->input('gclid'),
            'fbclid' => $this->request->input('fbclid'),
            'msclkid' => $this->request->input('msclkid'),
        ];
    }

    /**
     * Get device type
     */


    /**
     * Check if visitor is a bot
     */
    protected function isBot(): bool
    {
        return $this->crawlerDetect->isCrawler($this->request->userAgent());
    }

    /**
     * Get page title (to be implemented by the application)
     */
    protected function getPageTitle(): ?string
    {
        // This should be implemented based on how your application stores page titles
        // For example, you might get it from the request or a service
        return null;
    }

    /**
     * Get visitor statistics
     */
    public function getStatistics(array $filters = []): array
    {
        $query = SeoPageVisitor::query();

        // Apply filters
        if (!empty($filters['date_from'])) {
            $query->where('created_at', '>=', $filters['date_from']);
        }

        if (!empty($filters['date_to'])) {
            $query->where('created_at', '<=', $filters['date_to']);
        }

        if (!empty($filters['page_url'])) {
            $query->where('page_url', 'like', '%' . $filters['page_url'] . '%');
        }

        // Get basic statistics
        $totalVisits = $query->count();
        $uniqueVisitors = $query->distinct('ip')->count('ip');
        $bounceRate = $this->calculateBounceRate($query);

        // Get top pages
        $topPages = SeoPageVisitor::selectRaw('page_url, count(*) as visits')
            ->groupBy('page_url')
            ->orderByDesc('visits')
            ->limit(10)
            ->get();

        // Get traffic sources
        $trafficSources = SeoPageVisitor::selectRaw('
                CASE
                    WHEN referrer_domain IS NULL THEN "Direct"
                    WHEN referrer_domain LIKE "%google%" THEN "Google"
                    WHEN referrer_domain LIKE "%facebook%" THEN "Facebook"
                    ELSE referrer_domain
                END as source,
                count(*) as visits
            ')
            ->groupBy('source')
            ->orderByDesc('visits')
            ->get();

        return [
            'total_visits' => $totalVisits,
            'unique_visitors' => $uniqueVisitors,
            'bounce_rate' => $bounceRate,
            'top_pages' => $topPages,
            'traffic_sources' => $trafficSources,
            'device_distribution' => $this->getDeviceDistribution($query),
            'country_distribution' => $this->getCountryDistribution($query),
        ];
    }

    /**
     * Calculate bounce rate
     */
    protected function calculateBounceRate($query): float
    {
        $singlePageVisits = (clone $query)
            ->select('ip')
            ->groupBy('ip')
            ->havingRaw('COUNT(*) = 1')
            ->get()
            ->count();

        $totalVisits = $query->count();

        return $totalVisits > 0 ? ($singlePageVisits / $totalVisits) * 100 : 0;
    }

    /**
     * Get device distribution
     */
    protected function getDeviceDistribution($query): array
    {
        return (clone $query)
            ->selectRaw('device_type, count(*) as count')
            ->groupBy('device_type')
            ->pluck('count', 'device_type')
            ->toArray();
    }

    /**
     * Get country distribution
     */
    protected function getCountryDistribution($query): array
    {
        return (clone $query)
            ->selectRaw('country, count(*) as count')
            ->whereNotNull('country')
            ->groupBy('country')
            ->orderByDesc('count')
            ->limit(10)
            ->pluck('count', 'country')
            ->toArray();
    }
}
