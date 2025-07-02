<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Page extends Model
{
    /** @use HasFactory<\Database\Factories\PageFactory> */
    use HasFactory;
    use SoftDeletes;


    protected $fillable = [
        'image',
        'slug',
        'title',
        'description',
        'meta_title',
        'meta_description',
        'meta_keywords',
        'meta_schema',
        'canonical_url',
        'social_meta',
        'show_in_sitemap',
        'redirect_url',
        'customscript',
        'customstyle',
        'status',
        'priority',
        'predefine_page',
    ];

    protected $casts = [
        'meta_schema' => 'array',
        'social_meta' => 'array',
        'show_in_sitemap' => 'boolean',
        'priority' => 'integer'
    ];

    protected $dates = [
        'created_at',
        'updated_at',
        'deleted_at'
    ];


      public function sections(): HasMany
    {
        return $this->hasMany(Pagesection::class)->orderBy('priority', 'asc');
    }

    /**
     * Get only published sections for this page
     */
    public function publishedSections(): HasMany
    {
        return $this->hasMany(Pagesection::class)
                    ->where('status', 'published')
                    ->orderBy('priority', 'asc');
    }

    /**
     * Get sections by type
     */
    public function sectionsByType(string $type): HasMany
    {
        return $this->hasMany(Pagesection::class)
                    ->where('type', $type)
                    ->orderBy('priority', 'asc');
    }

    /**
     * Get sections by language
     */
    public function sectionsByLang(string $lang): HasMany
    {
        return $this->hasMany(Pagesection::class)
                    ->where('lang', $lang)
                    ->orderBy('priority', 'asc');
    }

    /**
     * Scope for published pages
     */
    public function scopePublished($query)
    {
        return $query->where('status', 'published');
    }

    /**
     * Scope for draft pages
     */
    public function scopeDraft($query)
    {
        return $query->where('status', 'draft');
    }

    /**
     * Scope for pages that should be included in sitemap
     */
    public function scopeInSitemap($query)
    {
        return $query->where('show_in_sitemap', true);
    }

    /**
     * Get the route key for the model
     */
    public function getRouteKeyName()
    {
        return 'slug';
    }

    /**
     * Get the URL for this page
     */
    public function getUrlAttribute()
    {
        return url('/' . $this->slug);
    }

    /**
     * Get the SEO title (meta_title or title)
     */
    public function getSeoTitleAttribute()
    {
        return $this->meta_title ?: $this->title;
    }

    /**
     * Get the SEO description (meta_description or description)
     */
    public function getSeoDescriptionAttribute()
    {
        return $this->meta_description ?: $this->description;
    }

    /**
     * Check if page has redirect
     */
    public function hasRedirect()
    {
        return !empty($this->redirect_url);
    }

    /**
     * Get sections count by status
     */
    public function getSectionCountByStatus()
    {
        return $this->sections()
                    ->selectRaw('status, COUNT(*) as count')
                    ->groupBy('status')
                    ->pluck('count', 'status')
                    ->toArray();
    }

    /**
     * Get sections count by type
     */
    public function getSectionCountByType()
    {
        return $this->sections()
                    ->selectRaw('type, COUNT(*) as count')
                    ->groupBy('type')
                    ->pluck('count', 'type')
                    ->toArray();
    }

    /**
     * Check if page is published
     */
    public function isPublished()
    {
        return $this->status === 'published';
    }

    /**
     * Check if page is draft
     */
    public function isDraft()
    {
        return $this->status === 'draft';
    }

    /**
     * Get formatted created date
     */
    public function getFormattedCreatedAtAttribute()
    {
        return $this->created_at->format('M d, Y');
    }

    /**
     * Get formatted updated date
     */
    public function getFormattedUpdatedAtAttribute()
    {
        return $this->updated_at->format('M d, Y');
    }

    public function generateStructuredData()
    {
        $structuredData = [
            '@context' => 'https://schema.org',
            '@type' => 'WebPage',
            'name' => $this->seo_title,
            'description' => $this->seo_description,
            'url' => $this->url,
        ];

        return json_encode($structuredData);
    }

}
