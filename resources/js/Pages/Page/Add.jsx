import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React, { useState } from "react";
import { Head, router, usePage } from "@inertiajs/react";
import { ArrowUpDown, ChevronDown, MoreHorizontal, Plus, FileText, Search, Globe, Settings, Save, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

export default function List() {
  const validationSchema = Yup.object({
    title: Yup.string()
      .required("Title is required")
      .min(2, "Title must be at least 2 characters"),
    slug: Yup.string()
      .required("Slug is required")
      .matches(/^[a-z0-9-]+$/, "Slug can only contain lowercase letters, numbers, and hyphens"),
    description: Yup.string(),
    meta_title: Yup.string(),
    meta_description: Yup.string(),
    meta_keywords: Yup.string(),
    canonical_url: Yup.string().url("Must be a valid URL"),
    redirect_url: Yup.string().url("Must be a valid URL"),
    status: Yup.string().required("Status is required"),
    priority: Yup.number().min(0),
    show_in_sitemap: Yup.boolean(),
    predefine_page: Yup.string().nullable(),
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    // Convert form values to match backend expectations
    const formData = {
      ...values,
      show_in_sitemap: values.show_in_sitemap ? 1 : 0,
    };

    router.post(route("page.store"), formData, {
      onSuccess: () => {
        setSubmitting(false);
        resetForm();
      },
      onError: (errors) => {
        setSubmitting(false);
      },
    });
  };

  return (
    <AuthenticatedLayout>
      <Head title="Create New Page" />

      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2 p-10">
          <div className="w-full">

            {/* Page Header */}
            <div className="mb-8">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 flex items-center">
                    <FileText className="mr-3 h-8 w-8 text-blue-600" />
                    Create New Page
                  </h1>
                  <p className="text-gray-600 mt-2">Add a new page to your website with custom content and SEO settings.</p>
                </div>
                <div className="flex space-x-3">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => router.get(route("page.index"))}
                        >
                          <X className="h-4 w-4 mr-2" />
                          Cancel
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Cancel and return to pages list</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
            </div>

            <Formik
              initialValues={{
                image: "",
                slug: "",
                title: "",
                description: "",
                meta_title: "",
                meta_description: "",
                meta_keywords: "",
                canonical_url: "",
                redirect_url: "",
                customscript: "",
                customstyle: "",
                status: "draft",
                priority: 0,
                show_in_sitemap: true,
                predefine_page: "",
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, setFieldValue, values }) => (
                <Form className="space-y-6">
                  {/* Two Column Layout */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Left Column - Main Content */}
                    <div className="lg:col-span-2 space-y-8">

                      {/* Basic Information */}
                      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                        <div className="border-b border-gray-200 pb-4 mb-6">
                          <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mr-3"></div>
                            Basic Information
                          </h3>
                          <p className="text-sm text-gray-500 mt-2">Enter the main page details and content</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="grid gap-3">
                            <label htmlFor="title" className="text-sm font-semibold text-gray-700 flex items-center">
                              <FileText className="h-4 w-4 mr-2 text-blue-500" />
                              Title *
                            </label>
                            <Field
                              as={Input}
                              id="title"
                              name="title"
                              placeholder="Enter page title..."
                              className="focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                            />
                            <ErrorMessage
                              name="title"
                              component="div"
                              className="text-red-500 text-sm flex items-center"
                            />
                          </div>

                          <div className="grid gap-3">
                            <label htmlFor="slug" className="text-sm font-semibold text-gray-700 flex items-center">
                              <Globe className="h-4 w-4 mr-2 text-blue-500" />
                              URL Slug *
                            </label>
                            <Field
                              as={Input}
                              id="slug"
                              name="slug"
                              placeholder="page-url-slug"
                              className="focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all font-mono text-sm"
                            />
                            <ErrorMessage
                              name="slug"
                              component="div"
                              className="text-red-500 text-sm"
                            />
                          </div>
                        </div>

                        <div className="grid gap-3 mt-6">
                          <label htmlFor="description" className="text-sm font-semibold text-gray-700">
                            Page Description
                          </label>
                          <Field
                            as={Textarea}
                            id="description"
                            name="description"
                            placeholder="Write a compelling description of your page content..."
                            rows={5}
                            className="focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none"
                          />
                          <ErrorMessage
                            name="description"
                            component="div"
                            className="text-red-500 text-sm"
                          />
                        </div>

                         <div className="grid gap-3 mt-6">
                          <label htmlFor="predefine_page" className="text-sm font-semibold text-gray-700">
                            Predefine Page
                            {/* make button to predefine page null */}
                            <Button
                              type="button"
                              variant="link"
                                className="ml-2 text-red-500 hover:text-red-700"
                              size="sm"
                              onClick={() => setFieldValue("predefine_page", "")}
                            >
                              Clear
                            </Button>


                          </label>
                          <Select
                            name="predefine_page"
                            value={values.predefine_page}
                            onValueChange={(value) => setFieldValue("predefine_page", value)}
                            >
                            <SelectTrigger className="focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
                                <SelectValue placeholder="Select a predefine page" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Servicesmain">
                                <div className="flex items-center">
                                    <div>
                                    <div className="font-medium">Service</div>
                                    </div>
                                </div>
                                </SelectItem>
                                <SelectItem value="Productmain">
                                <div className="flex items-center">
                                    <div>
                                    <div className="font-medium">Product</div>
                                    </div>
                                </div>
                                </SelectItem>
                                <SelectItem value="About">
                                  <div className="flex items-center">
                                    <div>
                                      <div className="font-medium">About</div>
                                    </div>
                                  </div>
                                </SelectItem>
                                <SelectItem value="Contact">
                                  <div className="flex items-center">
                                    <div>
                                      <div className="font-medium">Contact</div>
                                    </div>
                                  </div>
                                </SelectItem>
                                <SelectItem value="Industriesmain">
                                  <div className="flex items-center">
                                    <div>
                                      <div className="font-medium">Industries</div>
                                    </div>
                                  </div>
                                </SelectItem>
                                <SelectItem value="Casestudiesmain">
                                  <div className="flex items-center">
                                    <div>
                                      <div className="font-medium">Case Studies</div>
                                    </div>
                                  </div>
                                </SelectItem>
                                <SelectItem value="partners">
                                  <div className="flex items-center">
                                    <div>
                                      <div className="font-medium">Partners</div>
                                    </div>
                                  </div>
                                </SelectItem>

                              </SelectContent>
                            </Select>
                          <ErrorMessage
                            name="predefine_page"
                            component="div"
                            className="text-red-500 text-sm"
                          />
                        </div>

                        <div className="grid gap-3 mt-6">
                          <label htmlFor="image" className="text-sm font-semibold text-gray-700">
                            Featured Image URL
                          </label>
                          <Field
                            as={Input}
                            id="image"
                            name="image"
                            placeholder="https://example.com/featured-image.jpg"
                            className="focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                          />
                          <ErrorMessage
                            name="image"
                            component="div"
                            className="text-red-500 text-sm"
                          />
                          <p className="text-xs text-gray-500">Recommended size: 1200x630px for social media sharing</p>
                        </div>
                      </div>

                      {/* SEO Settings */}
                      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                        <div className="border-b border-gray-200 pb-4 mb-6">
                          <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                            <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-green-600 rounded-full mr-3"></div>
                            SEO Optimization
                          </h3>
                          <p className="text-sm text-gray-500 mt-2">Optimize your page for search engines and social media</p>
                        </div>

                        <div className="space-y-6">
                          <div className="grid gap-3">
                            <label htmlFor="meta_title" className="text-sm font-semibold text-gray-700 flex items-center">
                              <Search className="h-4 w-4 mr-2 text-green-500" />
                              Meta Title
                            </label>
                            <Field
                              as={Input}
                              id="meta_title"
                              name="meta_title"
                              placeholder="SEO optimized title (50-60 characters)"
                              className="focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                            />
                            <ErrorMessage
                              name="meta_title"
                              component="div"
                              className="text-red-500 text-sm"
                            />
                          </div>

                          <div className="grid gap-3">
                            <label htmlFor="meta_description" className="text-sm font-semibold text-gray-700">
                              Meta Description
                            </label>
                            <Field
                              as={Textarea}
                              id="meta_description"
                              name="meta_description"
                              placeholder="Write a compelling meta description (150-160 characters)"
                              rows={3}
                              className="focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all resize-none"
                            />
                            <ErrorMessage
                              name="meta_description"
                              component="div"
                              className="text-red-500 text-sm"
                            />
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="grid gap-3">
                              <label htmlFor="meta_keywords" className="text-sm font-semibold text-gray-700">
                                Meta Keywords
                              </label>
                              <Field
                                as={Input}
                                id="meta_keywords"
                                name="meta_keywords"
                                placeholder="keyword1, keyword2, keyword3"
                                className="focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                              />
                              <ErrorMessage
                                name="meta_keywords"
                                component="div"
                                className="text-red-500 text-sm"
                              />
                            </div>

                            <div className="grid gap-3">
                              <label htmlFor="canonical_url" className="text-sm font-semibold text-gray-700">
                                Canonical URL
                              </label>
                              <Field
                                as={Input}
                                id="canonical_url"
                                name="canonical_url"
                                placeholder="https://example.com/canonical-url"
                                className="focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                              />
                              <ErrorMessage
                                name="canonical_url"
                                component="div"
                                className="text-red-500 text-sm"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Advanced Settings */}
                      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                        <div className="border-b border-gray-200 pb-4 mb-6">
                          <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                            <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full mr-3"></div>
                            Advanced Configuration
                          </h3>
                          <p className="text-sm text-gray-500 mt-2">Custom scripts, styles and advanced page settings</p>
                        </div>

                        <div className="space-y-6">
                          <div className="grid gap-3">
                            <label htmlFor="redirect_url" className="text-sm font-semibold text-gray-700">
                              Redirect URL
                              <span className="text-xs text-gray-500 ml-2">(Optional - redirects visitors to another page)</span>
                            </label>
                            <Field
                              as={Input}
                              id="redirect_url"
                              name="redirect_url"
                              placeholder="https://example.com/redirect-destination"
                              className="focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                            />
                            <ErrorMessage
                              name="redirect_url"
                              component="div"
                              className="text-red-500 text-sm"
                            />
                          </div>

                          <div className="grid gap-3">
                            <label htmlFor="customscript" className="text-sm font-semibold text-gray-700">
                              Custom JavaScript
                            </label>
                            <Field
                              as={Textarea}
                              id="customscript"
                              name="customscript"
                              placeholder="<script>
// Add your custom JavaScript here
console.log('Page loaded');
</script>"
                              rows={6}
                              className="focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all font-mono text-sm resize-none"
                            />
                            <ErrorMessage
                              name="customscript"
                              component="div"
                              className="text-red-500 text-sm"
                            />
                          </div>

                          <div className="grid gap-3">
                            <label htmlFor="customstyle" className="text-sm font-semibold text-gray-700">
                              Custom CSS
                            </label>
                            <Field
                              as={Textarea}
                              id="customstyle"
                              name="customstyle"
                              placeholder="<style>
/* Add your custom CSS here */
.custom-class {
  color: #333;
}
</style>"
                              rows={6}
                              className="focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all font-mono text-sm resize-none"
                            />
                            <ErrorMessage
                              name="customstyle"
                              component="div"
                              className="text-red-500 text-sm"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Settings Sidebar */}
                    <div className="space-y-6">

                      {/* Page Settings */}
                      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                        <div className="border-b border-gray-200 pb-4 mb-6">
                          <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                            <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mr-3"></div>
                            Page Settings
                          </h3>
                          <p className="text-sm text-gray-500 mt-1">Configure visibility and publishing options</p>
                        </div>

                        <div className="space-y-6">
                          <div className="grid gap-3">
                            <label htmlFor="status" className="text-sm font-semibold text-gray-700 flex items-center">
                              <Settings className="h-4 w-4 mr-2 text-orange-500" />
                              Publication Status *
                            </label>
                            <Select
                              name="status"
                              value={values.status}
                              onValueChange={(value) => setFieldValue("status", value)}
                            >
                              <SelectTrigger className="focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
                                <SelectValue placeholder="Select publication status" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="draft">
                                  <div className="flex items-center">
                                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                                    <div>
                                      <div className="font-medium">Draft</div>
                                      <div className="text-xs text-gray-500">Not visible to public</div>
                                    </div>
                                  </div>
                                </SelectItem>
                                <SelectItem value="published">
                                  <div className="flex items-center">
                                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                                    <div>
                                      <div className="font-medium">Published</div>
                                      <div className="text-xs text-gray-500">Live and visible</div>
                                    </div>
                                  </div>
                                </SelectItem>
                              </SelectContent>
                            </Select>
                            <ErrorMessage
                              name="status"
                              component="div"
                              className="text-red-500 text-sm"
                            />
                          </div>

                          <div className="grid gap-3">
                            <label htmlFor="priority" className="text-sm font-semibold text-gray-700">
                              Page Priority
                            </label>
                            <Field
                              as={Input}
                              id="priority"
                              name="priority"
                              type="number"
                              min="0"
                              max="10"
                              placeholder="5"
                              className="focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                            />
                            <ErrorMessage
                              name="priority"
                              component="div"
                              className="text-red-500 text-sm"
                            />
                            <div className="bg-orange-50 p-3 rounded-lg">
                              <p className="text-xs text-orange-700">
                                <strong>Priority Scale:</strong> 0 (lowest) to 10 (highest).
                                Higher priority pages appear first in navigation and searches.
                              </p>
                            </div>
                          </div>

                          <div className="bg-gray-50 p-4 rounded-lg border-2 border-dashed border-gray-200">
                            <div className="flex items-start space-x-3">
                              <Field name="show_in_sitemap">
                                {({ field }) => (
                                  <Checkbox
                                    id="show_in_sitemap"
                                    checked={values.show_in_sitemap}
                                    onCheckedChange={(checked) =>
                                      setFieldValue("show_in_sitemap", checked)
                                    }
                                    className="focus:ring-2 focus:ring-orange-500 mt-1"
                                  />
                                )}
                              </Field>
                              <div className="flex-1">
                                <label htmlFor="show_in_sitemap" className="text-sm font-medium text-gray-700 cursor-pointer block">
                                  Include in XML Sitemap
                                </label>
                                <p className="text-xs text-gray-500 mt-1">
                                  Enable this to help search engines discover and index this page.
                                  Recommended for most pages.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Quick Actions */}
                      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
                        <div className="space-y-4">
                          <h4 className="font-semibold text-gray-900 flex items-center">
                            <Save className="h-5 w-5 mr-2 text-blue-600" />
                            Ready to Publish?
                          </h4>
                          <p className="text-sm text-gray-600">
                            Review your page content and settings, then create your new page.
                          </p>
                          <div className="space-y-3 pt-2">
                            <Button
                              type="submit"
                              disabled={isSubmitting}
                              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg"
                              size="lg"
                            >
                              {isSubmitting ? (
                                <div className="flex items-center">
                                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                                  Creating Page...
                                </div>
                              ) : (
                                <div className="flex items-center">
                                  <Plus className="h-5 w-5 mr-2" />
                                  Create New Page
                                </div>
                              )}
                            </Button>
                            <Button
                              type="button"
                              variant="outline"
                              onClick={() => router.get(route("page.index"))}
                              className="w-full border-gray-300 hover:bg-gray-50"
                              size="lg"
                            >
                              <X className="h-4 w-4 mr-2" />
                              Cancel & Return
                            </Button>
                          </div>
                        </div>
                      </div>

                      {/* Help Section */}
                      <div className="bg-amber-50 p-6 rounded-xl border border-amber-200">
                        <h4 className="font-semibold text-amber-900 mb-3">💡 Quick Tips</h4>
                        <ul className="text-sm text-amber-800 space-y-2">
                          <li>• Use descriptive titles for better SEO</li>
                          <li>• Keep URLs short and readable</li>
                          <li>• Write unique meta descriptions</li>
                          <li>• Save as draft to preview first</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
