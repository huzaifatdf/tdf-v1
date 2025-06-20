import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const GoogleSearchConsoleTable = ({ data }) => {
  const [queryFilter, setQueryFilter] = useState('');
  const [pageFilter, setPageFilter] = useState('');
  const [dateFilter, setDateFilter] = useState('');

  // Filter functions
  const filteredQueries = data.performance.top_queries.filter(query =>
    query.keys[0].toLowerCase().includes(queryFilter.toLowerCase())
  );

  const filteredPages = data.performance.top_pages.filter(page =>
    page.keys[0].toLowerCase().includes(pageFilter.toLowerCase())
  );

  const filteredDates = data.performance.daily_performance.filter(day =>
    day.keys[0].toLowerCase().includes(dateFilter.toLowerCase())
  );

  // Format numbers
  const formatNumber = num => new Intl.NumberFormat().format(num);
  const formatPercent = num => `${(num * 100).toFixed(2)}%`;

  return (
    <div className="space-y-6">
      {/* Site Info Card */}
      <Card>
        <CardHeader>
          <CardTitle>Site Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Site URL</p>
              <p className="font-medium">{data.site_info.site_url}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Status</p>
              <Badge variant={data.site_info.status === 'active' ? 'default' : 'destructive'}>
                {data.site_info.status}
              </Badge>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Last Updated</p>
              <p className="font-medium">
                {new Date(data.site_info.last_updated).toLocaleString()}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Sitemap Card */}
      <Card>
        <CardHeader>
          <CardTitle>Sitemaps</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Path</TableHead>
                <TableHead>Last Submitted</TableHead>
                <TableHead>Last Downloaded</TableHead>
                <TableHead>Warnings</TableHead>
                <TableHead>Errors</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.sitemaps.list.map((sitemap, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{sitemap.path}</TableCell>
                  <TableCell>
                    {new Date(sitemap.last_submitted).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    {new Date(sitemap.last_downloaded).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <Badge variant={sitemap.warnings > 0 ? 'destructive' : 'default'}>
                      {sitemap.warnings}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={sitemap.errors > 0 ? 'destructive' : 'default'}>
                      {sitemap.errors}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Performance Summary Card */}
      <Card>
        <CardHeader>
          <CardTitle>Performance Summary ({data.performance.period_days} days)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="border rounded-lg p-4">
              <p className="text-sm text-muted-foreground">Clicks</p>
              <p className="text-2xl font-bold">{formatNumber(data.performance.totals.clicks)}</p>
            </div>
            <div className="border rounded-lg p-4">
              <p className="text-sm text-muted-foreground">Impressions</p>
              <p className="text-2xl font-bold">{formatNumber(data.performance.totals.impressions)}</p>
            </div>
            <div className="border rounded-lg p-4">
              <p className="text-sm text-muted-foreground">Average CTR</p>
              <p className="text-2xl font-bold">{formatPercent(data.performance.totals.average_ctr)}</p>
            </div>
            <div className="border rounded-lg p-4">
              <p className="text-sm text-muted-foreground">Average Position</p>
              <p className="text-2xl font-bold">{data.performance.totals.average_position.toFixed(2)}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Performance Details Tabs */}
      <Tabs defaultValue="queries" className="w-full">
        <TabsList className="grid grid-cols-3 w-full">
          <TabsTrigger value="queries">Top Queries</TabsTrigger>
          <TabsTrigger value="pages">Top Pages</TabsTrigger>
          <TabsTrigger value="daily">Daily Performance</TabsTrigger>
        </TabsList>

        <TabsContent value="queries">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Top Queries</CardTitle>
                <Input
                  placeholder="Filter queries..."
                  value={queryFilter}
                  onChange={(e) => setQueryFilter(e.target.value)}
                  className="max-w-sm"
                />
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Query</TableHead>
                    <TableHead className="text-right">Clicks</TableHead>
                    <TableHead className="text-right">Impressions</TableHead>
                    <TableHead className="text-right">CTR</TableHead>
                    <TableHead className="text-right">Position</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredQueries.map((query, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{query.keys[0]}</TableCell>
                      <TableCell className="text-right">{formatNumber(query.clicks)}</TableCell>
                      <TableCell className="text-right">{formatNumber(query.impressions)}</TableCell>
                      <TableCell className="text-right">{formatPercent(query.ctr)}</TableCell>
                      <TableCell className="text-right">{query.position.toFixed(2)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pages">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Top Pages</CardTitle>
                <Input
                  placeholder="Filter pages..."
                  value={pageFilter}
                  onChange={(e) => setPageFilter(e.target.value)}
                  className="max-w-sm"
                />
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Page</TableHead>
                    <TableHead className="text-right">Clicks</TableHead>
                    <TableHead className="text-right">Impressions</TableHead>
                    <TableHead className="text-right">CTR</TableHead>
                    <TableHead className="text-right">Position</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredPages.map((page, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">
                        <a href={page.keys[0]} target="_blank" rel="noopener noreferrer" className="hover:underline">
                          {page.keys[0].replace('https://thedesignsfirm.com', '') || '/'}
                        </a>
                      </TableCell>
                      <TableCell className="text-right">{formatNumber(page.clicks)}</TableCell>
                      <TableCell className="text-right">{formatNumber(page.impressions)}</TableCell>
                      <TableCell className="text-right">{formatPercent(page.ctr)}</TableCell>
                      <TableCell className="text-right">{page.position.toFixed(2)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="daily">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Daily Performance</CardTitle>
                <Input
                  placeholder="Filter by date..."
                  value={dateFilter}
                  onChange={(e) => setDateFilter(e.target.value)}
                  className="max-w-sm"
                />
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Clicks</TableHead>
                    <TableHead className="text-right">Impressions</TableHead>
                    <TableHead className="text-right">CTR</TableHead>
                    <TableHead className="text-right">Position</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredDates.map((day, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">
                        {new Date(day.keys[0]).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                          weekday: 'short'
                        })}
                      </TableCell>
                      <TableCell className="text-right">{formatNumber(day.clicks)}</TableCell>
                      <TableCell className="text-right">{formatNumber(day.impressions)}</TableCell>
                      <TableCell className="text-right">{formatPercent(day.ctr)}</TableCell>
                      <TableCell className="text-right">{day.position.toFixed(2)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default GoogleSearchConsoleTable;
