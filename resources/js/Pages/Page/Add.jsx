import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React, { useState } from "react";
import { Head, router, usePage } from "@inertiajs/react";
import { ArrowUpDown, ChevronDown, MoreHorizontal, Plus } from "lucide-react";

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
    priority: Yup.number().min(0).max(10),
    show_in_sitemap: Yup.boolean(),
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
      <Head title="Pages" />

      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2 p-10">
          <div className="w-full">
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
                priority: 5,
                show_in_sitemap: true,
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, setFieldValue, values }) => (
                <Form className="space-y-6 bg-white p-6 rounded-lg shadow">
                  {/* Basic Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Basic Information</h3>

                    <div className="grid gap-2">
                      <label htmlFor="title" className="text-sm font-medium">
                        Title *
                      </label>
                      <Field
                        as={Input}
                        id="title"
                        name="title"
                        placeholder="Page Title"
                      />
                      <ErrorMessage
                        name="title"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>

                    <div className="grid gap-2">
                      <label htmlFor="slug" className="text-sm font-medium">
                        Slug *
                      </label>
                      <Field
                        as={Input}
                        id="slug"
                        name="slug"
                        placeholder="page-slug"
                      />
                      <ErrorMessage
                        name="slug"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>

                    <div className="grid gap-2">
                      <label htmlFor="description" className="text-sm font-medium">
                        Description
                      </label>
                      <Field
                        as={Textarea}
                        id="description"
                        name="description"
                        placeholder="Page description..."
                        rows={4}
                      />
                      <ErrorMessage
                        name="description"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>

                    <div className="grid gap-2">
                      <label htmlFor="image" className="text-sm font-medium">
                        Featured Image URL
                      </label>
                      <Field
                        as={Input}
                        id="image"
                        name="image"
                        placeholder="https://example.com/image.jpg"
                      />
                      <ErrorMessage
                        name="image"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>
                  </div>

                  {/* SEO Settings */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">SEO Settings</h3>

                    <div className="grid gap-2">
                      <label htmlFor="meta_title" className="text-sm font-medium">
                        Meta Title
                      </label>
                      <Field
                        as={Input}
                        id="meta_title"
                        name="meta_title"
                        placeholder="SEO Title"
                      />
                      <ErrorMessage
                        name="meta_title"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>

                    <div className="grid gap-2">
                      <label htmlFor="meta_description" className="text-sm font-medium">
                        Meta Description
                      </label>
                      <Field
                        as={Textarea}
                        id="meta_description"
                        name="meta_description"
                        placeholder="SEO Description"
                        rows={3}
                      />
                      <ErrorMessage
                        name="meta_description"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>

                    <div className="grid gap-2">
                      <label htmlFor="meta_keywords" className="text-sm font-medium">
                        Meta Keywords
                      </label>
                      <Field
                        as={Input}
                        id="meta_keywords"
                        name="meta_keywords"
                        placeholder="keyword1, keyword2, keyword3"
                      />
                      <ErrorMessage
                        name="meta_keywords"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>

                    <div className="grid gap-2">
                      <label htmlFor="canonical_url" className="text-sm font-medium">
                        Canonical URL
                      </label>
                      <Field
                        as={Input}
                        id="canonical_url"
                        name="canonical_url"
                        placeholder="https://example.com/canonical-url"
                      />
                      <ErrorMessage
                        name="canonical_url"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>
                  </div>

                  {/* Advanced Settings */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Advanced Settings</h3>

                    <div className="grid gap-2">
                      <label htmlFor="redirect_url" className="text-sm font-medium">
                        Redirect URL
                      </label>
                      <Field
                        as={Input}
                        id="redirect_url"
                        name="redirect_url"
                        placeholder="https://example.com/redirect-to"
                      />
                      <ErrorMessage
                        name="redirect_url"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>

                    <div className="grid gap-2">
                      <label htmlFor="customscript" className="text-sm font-medium">
                        Custom Scripts
                      </label>
                      <Field
                        as={Textarea}
                        id="customscript"
                        name="customscript"
                        placeholder="<script>...</script>"
                        rows={4}
                      />
                      <ErrorMessage
                        name="customscript"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>

                    <div className="grid gap-2">
                      <label htmlFor="customstyle" className="text-sm font-medium">
                        Custom Styles
                      </label>
                      <Field
                        as={Textarea}
                        id="customstyle"
                        name="customstyle"
                        placeholder="<style>...</style>"
                        rows={4}
                      />
                      <ErrorMessage
                        name="customstyle"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>
                  </div>

                  {/* Page Settings */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Page Settings</h3>

                    <div className="grid gap-2">
                      <label htmlFor="status" className="text-sm font-medium">
                        Status *
                      </label>
                      <Select
                        name="status"
                        value={values.status}
                        onValueChange={(value) => setFieldValue("status", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="draft">Draft</SelectItem>
                          <SelectItem value="published">Published</SelectItem>
                        </SelectContent>
                      </Select>
                      <ErrorMessage
                        name="status"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>

                    <div className="grid gap-2">
                      <label htmlFor="priority" className="text-sm font-medium">
                        Priority (0-10)
                      </label>
                      <Field
                        as={Input}
                        id="priority"
                        name="priority"
                        type="number"
                        min="0"
                        max="10"
                        placeholder="5"
                      />
                      <ErrorMessage
                        name="priority"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <Field name="show_in_sitemap">
                        {({ field }) => (
                          <Checkbox
                            id="show_in_sitemap"
                            checked={values.show_in_sitemap}
                            onCheckedChange={(checked) =>
                              setFieldValue("show_in_sitemap", checked)
                            }
                          />
                        )}
                      </Field>
                      <label htmlFor="show_in_sitemap" className="text-sm font-medium">
                        Show in Sitemap
                      </label>
                    </div>
                  </div>

                  <div className="flex justify-end gap-3 pt-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => router.get(route("page.index"))}
                    >
                      Cancel
                    </Button>
                    <Button type="submit" disabled={isSubmitting}>
                      {isSubmitting ? "Creating..." : "Create Page"}
                    </Button>
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
