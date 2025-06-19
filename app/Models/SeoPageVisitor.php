<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
class SeoPageVisitor extends Model
{
    use HasFactory;

    protected $table = 'seo_page_visitors';

    protected $fillable = [
        'page_url',
        'page_title',
        'page_language',
        'ip',
        'user_agent',
        'session_id',
        'country',
        'country_code',
        'region',
        'region_name',
        'city',
        'zip',
        'latitude',
        'longitude',
        'timezone',
        'os',
        'os_version',
        'browser',
        'browser_version',
        'device',
        'device_type',
        'is_mobile',
        'is_tablet',
        'is_desktop',
        'is_bot',
        'referrer',
        'referrer_domain',
        'referrer_url',
        'utm_source',
        'utm_medium',
        'utm_campaign',
        'utm_content',
        'utm_term',
        'utm_id',
        'gclid',
        'fbclid',
        'msclkid',
        'page_load_time',
        'scroll_depth',
        'time_on_page',
        'screen_resolution',
        'connection_type',
        'is_new_visitor',
        'is_returning_visitor',
    ];
}
