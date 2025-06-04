import React, { useState } from 'react';
import {
  TrendingUp,
  TrendingDown,
  Search,
  Eye,
  Users,
  MousePointer,
  Globe,
  Share2,
  BarChart3,
  PieChart,
  Calendar,
  Filter
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";


export function SectionSeoScreen() {
  const [timeRange, setTimeRange] = useState("30d");

  // Main metrics cards data
  const mainMetrics = [
    {
      title: "SEO Clicks",
      value: "24,847",
      change: "+18.2%",
      trending: "up",
      icon: <MousePointer className="h-5 w-5" />,
      description: "Total organic clicks",
      period: "vs last month"
    },
    {
      title: "SEO Impressions",
      value: "487K",
      change: "+23.1%",
      trending: "up",
      icon: <Eye className="h-5 w-5" />,
      description: "Search impressions",
      period: "vs last month"
    },
    {
      title: "Direct Traffic",
      value: "12,394",
      change: "-5.2%",
      trending: "down",
      icon: <Globe className="h-5 w-5" />,
      description: "Direct visitors",
      period: "vs last month"
    },
    {
      title: "Social Traffic",
      value: "8,642",
      change: "+31.4%",
      trending: "up",
      icon: <Share2 className="h-5 w-5" />,
      description: "Social media referrals",
      period: "vs last month"
    }
  ];

  // Top landing pages data
  const topLandingPages = [
    { page: "/blog/seo-guide-2025", visits: 4247, ctr: 3.2, position: 2.1 },
    { page: "/services/digital-marketing", visits: 3891, ctr: 2.8, position: 3.4 },
    { page: "/products/analytics-tool", visits: 3654, ctr: 4.1, position: 1.8 },
    { page: "/about-us", visits: 2987, ctr: 2.1, position: 4.2 },
    { page: "/contact", visits: 2456, ctr: 1.9, position: 5.1 }
  ];

  // Search engines data
  const searchEngines = [
    { name: "Google", traffic: 18642, percentage: 78.2, color: "bg-blue-500" },
    { name: "Bing", traffic: 3247, percentage: 13.6, color: "bg-green-500" },
    { name: "Yahoo", traffic: 1456, percentage: 6.1, color: "bg-purple-500" },
    { name: "DuckDuckGo", traffic: 498, percentage: 2.1, color: "bg-orange-500" }
  ];

  // Demographics data
  const demographics = {
    ageGroups: [
      { range: "18-24", percentage: 22.5, users: 5643 },
      { range: "25-34", percentage: 34.2, users: 8567 },
      { range: "35-44", percentage: 28.1, users: 7032 },
      { range: "45-54", percentage: 11.8, users: 2953 },
      { range: "55+", percentage: 3.4, users: 851 }
    ],
    topCountries: [
      { country: "United States", users: 8942, percentage: 35.7 },
      { country: "United Kingdom", users: 4321, percentage: 17.2 },
      { country: "Canada", users: 3654, percentage: 14.6 },
      { country: "Australia", users: 2987, percentage: 11.9 },
      { country: "Germany", users: 2134, percentage: 8.5 }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-900 dark:to-slate-800">
      {/* Header */}
      <div className="border-b bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">SEO Analytics</h1>
              <p className="text-muted-foreground mt-1">Monitor your website's search performance and traffic insights</p>
            </div>
            <div className="flex items-center gap-3">
              <Select value={timeRange} onValueChange={setTimeRange}>
                <SelectTrigger className="w-40">
                  <Calendar className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7d">Last 7 days</SelectItem>
                  <SelectItem value="30d">Last 30 days</SelectItem>
                  <SelectItem value="90d">Last 90 days</SelectItem>
                  <SelectItem value="1y">Last year</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-8">
        {/* Main Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {mainMetrics.map((metric, i) => (
            <Card key={i} className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-0 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    {metric.icon}
                    <CardDescription className="font-medium">{metric.title}</CardDescription>
                  </div>
                  <Badge variant={metric.trending === "up" ? "default" : "destructive"} className="text-xs">
                    {metric.trending === "up" ? <TrendingUp className="h-3 w-3 mr-1" /> : <TrendingDown className="h-3 w-3 mr-1" />}
                    {metric.change}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="text-3xl font-bold tracking-tight">{metric.value}</div>
                <p className="text-sm text-muted-foreground mt-1">{metric.description}</p>
              </CardContent>
              <CardFooter className="text-xs text-muted-foreground">
                {metric.period}
              </CardFooter>
              <div className={`absolute bottom-0 left-0 h-1 w-full ${metric.trending === "up" ? "bg-green-500" : "bg-red-500"} opacity-60`} />
            </Card>
          ))}
        </div>

        {/* Top Landing Pages & Search Engines */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {/* Top Landing Pages */}
          <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Top Landing Pages
              </CardTitle>
              <CardDescription>Pages driving the most organic traffic</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {topLandingPages.map((page, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate text-sm">{page.page}</p>
                    <div className="flex items-center gap-4 mt-1">
                      <span className="text-xs text-muted-foreground">Visits: {page.visits.toLocaleString()}</span>
                      <span className="text-xs text-muted-foreground">CTR: {page.ctr}%</span>
                      <span className="text-xs text-muted-foreground">Avg Pos: {page.position}</span>
                    </div>
                  </div>
                  <Badge variant="outline" className="ml-2">#{i + 1}</Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Top Search Engines */}
          <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5" />
                Top Search Engines
              </CardTitle>
              <CardDescription>Traffic distribution by search engine</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {searchEngines.map((engine, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-sm">{engine.name}</span>
                    <div className="text-right">
                      <div className="font-semibold text-sm">{engine.traffic.toLocaleString()}</div>
                      <div className="text-xs text-muted-foreground">{engine.percentage}%</div>
                    </div>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-full ${engine.color} transition-all duration-500 ease-out`}
                      style={{ width: `${engine.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Demographics Section */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {/* Age Demographics */}
          <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Age Demographics
              </CardTitle>
              <CardDescription>User distribution by age group</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {demographics.ageGroups.map((group, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold text-sm">
                      {group.range.split('-')[0]}
                    </div>
                    <div>
                      <p className="font-medium">{group.range} years</p>
                      <p className="text-sm text-muted-foreground">{group.users.toLocaleString()} users</p>
                    </div>
                  </div>
                  <Badge variant="secondary">{group.percentage}%</Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Geographic Demographics */}
          <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                Top Countries
              </CardTitle>
              <CardDescription>Traffic by geographic location</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {demographics.topCountries.map((country, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">#{i + 1}</Badge>
                      <span className="font-medium text-sm">{country.country}</span>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-sm">{country.users.toLocaleString()}</div>
                      <div className="text-xs text-muted-foreground">{country.percentage}%</div>
                    </div>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-500 ease-out"
                      style={{ width: `${country.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Summary Stats */}
        <Card className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChart className="h-5 w-5" />
              Performance Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">3.2%</div>
                <div className="text-sm text-muted-foreground">Avg CTR</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">2.8</div>
                <div className="text-sm text-muted-foreground">Avg Position</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">1.2M</div>
                <div className="text-sm text-muted-foreground">Total Keywords</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">89.3%</div>
                <div className="text-sm text-muted-foreground">Organic Share</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
