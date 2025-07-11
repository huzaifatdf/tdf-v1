<?php

namespace App\Services;

use App\Models\SeoPageVisitor;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Jaybizzle\CrawlerDetect\CrawlerDetect;
use WhichBrowser\Parser as BrowserParser;


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
        if ($this->isBot()) {
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
            'screen_resolution' => $this->getScreenResolution(),
            'connection_type' => $this->getConnectionType(),
        ], $geoData, $browserData, $referrerData, $utmData);
    }

    /**
     * Get screen resolution from request or session
     */
    protected function getScreenResolution(): ?string
    {
        // First check if it's sent in the current request
        if ($resolution = $this->request->input('screen_resolution')) {
            // Store in session for future requests
            $this->request->session()->put('screen_resolution', $resolution);
            return $resolution;
        }

        // Check if we have it stored in session from previous requests
        if ($resolution = $this->request->session()->get('screen_resolution')) {
            return $resolution;
        }

        return null;
    }

    protected function getConnectionType(): ?string
    {
        // Check if connection type was passed from frontend
        if ($connection = $this->request->input('connection_type')) {
            return strtolower($connection);
        }

        // Try to detect from user agent or other headers
        $userAgent = $this->request->userAgent();

        if (strpos($userAgent, 'Mobile') !== false) {
            return 'cellular'; // Default for mobile devices
        }

        return 'wired'; // Default for desktop
    }

    /**
     * Get geographic data
     */
    protected function getGeoData(): array
    {
        $ip = $this->request->ip();
        // $ip = "124.29.249.221"; // Test IP if needed

        if (!$ip || $ip === '127.0.0.1') {
            return [];
        }

        try {
            $client = new Client();
            $response = $client->get('http://ip-api.com/json/' . $ip)->getBody()->getContents();
            $geoData = json_decode($response, true);

            // Check if the request was successful
            if ($geoData['status'] !== 'success') {
                throw new \Exception('IP lookup failed: ' . ($geoData['message'] ?? 'Unknown error'));
            }

            return [
                'country' => $geoData['country'] ?? null,
                'country_code' => $geoData['countryCode'] ?? null,
                'region' => $geoData['region'] ?? null,  // Note: ip-api.com uses 'region' for code
                'region_name' => $geoData['regionName'] ?? null,
                'city' => $geoData['city'] ?? null,
                'zip' => $geoData['zip'] ?? null,
                'latitude' => $geoData['lat'] ?? null,
                'longitude' => $geoData['lon'] ?? null,
                'timezone' => $geoData['timezone'] ?? null,
                'isp' => $geoData['isp'] ?? null,      // Additional fields available
                'org' => $geoData['org'] ?? null        // from ip-api.com
            ];
        } catch (\Exception $e) {
            \Log::error("IP lookup failed for IP {$ip}: " . $e->getMessage());
            return [];
        }
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
     * Get UTM parameters - Enhanced for Inertia
     */
    protected function getUtmData(): array
    {
        $utmData = [
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

        // Store UTM data in session if present (for attribution across pages)
        $sessionUtmData = [];
        foreach ($utmData as $key => $value) {
            if ($value) {
                $this->request->session()->put("utm_data.{$key}", $value);
                $sessionUtmData[$key] = $value;
            } else {
                // Use session data if not in current request
                $sessionUtmData[$key] = $this->request->session()->get("utm_data.{$key}");
            }
        }

        return $sessionUtmData;
    }

    /**
     * Check if visitor is a bot
     */
    protected function isBot(): bool
    {
        return $this->crawlerDetect->isCrawler($this->request->userAgent());
    }

    /**
     * Get page title from Inertia props or request
     */
    protected function getPageTitle(): ?string
    {
        // Method 1: Check if title is passed in request (from frontend)
        if ($title = $this->request->input('page_title')) {
            return $title;
        }

        // Method 2: Check if it's stored in session from Inertia
        if ($title = $this->request->session()->get('page_title')) {
            return $title;
        }

        // Method 3: Try to extract from route name or URL
        $routeName = $this->request->route() ? $this->request->route()->getName() : null;
        if ($routeName) {
            return $this->generateTitleFromRoute($routeName);
        }

        // Method 4: Generate from URL path
        $path = trim($this->request->getPathInfo(), '/');
        if (empty($path)) {
            return 'Home - TDF Agency';
        }

        return ucfirst(str_replace(['/', '-', '_'], [' - ', ' ', ' '], $path)) . ' - TDF Agency';
    }

    /**
     * Generate title from route name
     */
    protected function generateTitleFromRoute(string $routeName): string
    {
        $routeToTitle = [
            'home' => 'Home - TDF Agency',
            'about' => 'About Us - TDF Agency',
            'services' => 'Services - TDF Agency',
            'contact' => 'Contact - TDF Agency',
            'casestudiesmain' => 'Case Studies - TDF Agency',
            'servicesmain' => 'Services - TDF Agency',
            'productmain' => 'Products - TDF Agency',
            'industriesmain' => 'Industries - TDF Agency',
            'partners' => 'Partners - TDF Agency',
        ];

        return $routeToTitle[$routeName] ?? ucfirst(str_replace(['.', '-', '_'], [' - ', ' ', ' '], $routeName)) . ' - TDF Agency';
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
