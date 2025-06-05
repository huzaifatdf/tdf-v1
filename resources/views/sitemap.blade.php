<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">


    <!-- Top Menus -->
    @foreach ($pages as $page)
        <url>
            <loc>
                {{ $page->redirect_url != null  ?  $page->redirect_url : url($page->slug) }}
            </loc>
            <changefreq>weekly</changefreq>
            <priority>0.6</priority>
        </url>
    @endforeach




</urlset>
