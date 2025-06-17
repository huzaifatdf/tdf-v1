import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React, { useState, useCallback } from "react";
import { Head, router, usePage } from "@inertiajs/react";
import { X, ChevronDown, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import MediaLibraryModel from "../Media/Model";
import SummernoteInput from "@/Components/SummernoteInput";

export default function Edit() {
  const { caselist, additionalDataStructure, appUrl } = usePage().props;
  const [imagePreview, setImagePreview] = useState(appUrl + '/' + caselist.image || null);
  const [thumbnailPreview, setThumbnailPreview] = useState(appUrl + '/' + caselist.thumbnail || null);
  const [expandedSections, setExpandedSections] = useState({
    Detail: false,
    'Our Work': false,
    Problem: false,
    'problem Solutions': false,
    seo: false,
  });

  const validationSchema = Yup.object({
    title: Yup.string()
      .required("Title is required")
      .min(2, "Title must be at least 2 characters")
      .max(255, "Title must not exceed 255 characters"),
    slug: Yup.string()
      .required("Slug is required")
      .matches(/^[a-z0-9-]+$/, "Slug can only contain lowercase letters, numbers, and hyphens"),
    description: Yup.string()
      .required("Description is required")
      .min(10, "Description must be at least 10 characters"),
    status: Yup.string()
      .required("Status is required")
      .oneOf(["published", "draft"], "Invalid status"),
    priority: Yup.number()
      .required("Priority is required")
      .min(0, "Priority must be at least 0")
      .max(100, "Priority must not exceed 100"),
  });

  const handleSubmit = useCallback((values, { setSubmitting }) => {
    const formData = new FormData();

    // Append basic form fields
    const basicFields = ['title', 'slug', 'description', 'status', 'priority'];
    basicFields.forEach(key => {
      formData.append(key, values[key]);
    });

    // Handle file uploads
    formData.append('image', values.image);
    formData.append('thumbnail', values.thumbnail);

    // Handle additional data
    const additionalData = {};
    Object.keys(additionalDataStructure).forEach(section => {
      additionalData[section] = {};
      Object.keys(additionalDataStructure[section]).forEach(field => {
        const fieldName = `${section}_${field}`;
        if (values[fieldName] !== undefined && values[fieldName] !== '') {
          additionalData[section][field] = values[fieldName];
        }
      });
      if (Object.keys(additionalData[section]).length === 0) {
        delete additionalData[section];
      }
    });

    if (Object.keys(additionalData).length > 0) {
      formData.append('additional_data', JSON.stringify(additionalData));
    }

    formData.append('_method', 'PUT');

    router.post(route("case.update", caselist.id), formData, {
      forceFormData: true,
      onSuccess: () => setSubmitting(false),
      onError: () => setSubmitting(false),
    });
  }, [caselist.id, additionalDataStructure]);

  const removeImage = useCallback((setFieldValue, fieldName, setPreview) => {
    setFieldValue(fieldName, null);
    setPreview(null);
  }, []);

  const toggleSection = useCallback((section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  }, []);

  const renderAdditionalField = useCallback((section, fieldKey, fieldConfig, values, setFieldValue) => {
    const fieldName = `${section}_${fieldKey}`;
    const fieldValue = values[fieldName] || '';

    switch (fieldConfig.type) {
      case 'summernote':
        return (
          <SummernoteInput
            value={fieldValue}
            onChange={(content) => setFieldValue(fieldName, content)}
            placeholder={`Enter ${fieldConfig.label.toLowerCase()}`}
            height={200}
            showToggle={true}
            defaultMode="simple"
          />
        );
      case 'textarea':
        return (
          <Textarea
            id={fieldName}
            name={fieldName}
            value={fieldValue}
            onChange={(e) => setFieldValue(fieldName, e.target.value)}
            placeholder={`Enter ${fieldConfig.label.toLowerCase()}`}
            rows={3}
          />
        );
      case 'number':
        return (
          <Input
            id={fieldName}
            name={fieldName}
            type="number"
            value={fieldValue}
            onChange={(e) => setFieldValue(fieldName, e.target.value)}
            placeholder={`Enter ${fieldConfig.label.toLowerCase()}`}
            step="0.01"
          />
        );
      default:
        return (
          <Input
            id={fieldName}
            name={fieldName}
            type="text"
            value={fieldValue}
            onChange={(e) => setFieldValue(fieldName, e.target.value)}
            placeholder={`Enter ${fieldConfig.label.toLowerCase()}`}
          />
        );
    }
  }, []);

  // Create initial values populated with existing caselist data
  const createInitialValues = useCallback(() => {
    const initialValues = {
      title: caselist.title || "",
      slug: caselist.slug || "",
      description: caselist.description || "",
      image: caselist.image || null,
      thumbnail: caselist.thumbnail || null,
      status: caselist.status || "",
      priority: caselist.priority || 0,
    };

    const existingData = caselist.data ? JSON.parse(caselist.data) : {};

    Object.keys(additionalDataStructure).forEach(section => {
      Object.keys(additionalDataStructure[section]).forEach(field => {
        const fieldName = `${section}_${field}`;
        initialValues[fieldName] = existingData[section]?.[field] || '';
      });
    });

    return initialValues;
  }, [caselist, additionalDataStructure]);

  const [showImageMediaLibrary, setImageShowMediaLibrary] = useState(false);
  const [showThumbnailMediaLibrary, setThumbnailShowMediaLibrary] = useState(false);

  return (
    <AuthenticatedLayout>
      <Head title={`Edit caselist - ${caselist.title}`} />

      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2 p-10">
          <div className="w-full">
            <Formik
              initialValues={createInitialValues()}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, setFieldValue, values }) => (
                <Form className="space-y-6 bg-white p-6 rounded-lg shadow">
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">Edit caselist</h2>
                    <p className="text-gray-600">Update caselist information</p>
                  </div>

                  <div className="grid gap-2">
                    <label htmlFor="title" className="text-sm font-medium">
                      caselist Title *
                    </label>
                    <Field
                      as={Input}
                      id="title"
                      name="title"
                      placeholder="Enter caselist title"
                    />
                    <ErrorMessage
                      name="title"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>

                  <div className="grid gap-2">
                    <label htmlFor="slug" className="text-sm font-medium">
                      caselist Slug *
                    </label>
                    <Field
                      as={Input}
                      id="slug"
                      name="slug"
                      placeholder="Enter caselist slug"
                    />
                    <ErrorMessage
                      name="slug"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>

                  <div className="grid gap-2">
                    <label htmlFor="description" className="text-sm font-medium">
                      Description *
                    </label>
                    <Field
                      as={Textarea}
                      id="description"
                      name="description"
                      placeholder="Enter caselist description"
                      rows={4}
                    />
                    <ErrorMessage
                      name="description"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>

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
                        <SelectItem value="published">Published</SelectItem>
                        <SelectItem value="draft">Draft</SelectItem>
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
                      Priority (0-100) *
                    </label>
                    <Field
                      as={Input}
                      id="priority"
                      name="priority"
                      type="number"
                      min="0"
                      max="100"
                      placeholder="0"
                    />
                    <ErrorMessage
                      name="priority"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>

                  <div className="grid gap-2">
                    <label htmlFor="image" className="text-sm font-medium">
                      caselist Image
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setImageShowMediaLibrary(true)}
                        className="w-full"
                      >
                        {imagePreview ? 'Change Media' : 'Add Media'}
                      </Button>
                      <MediaLibraryModel
                        routename={route('case.edit', caselist.id)}
                        showModal={showImageMediaLibrary}
                        setShowModal={setImageShowMediaLibrary}
                        setFieldValue={setFieldValue}
                        fieldName="image"
                        setImagePreview={setImagePreview}
                      />

                      {imagePreview && (
                        <div className="relative mt-4 inline-block">
                          <img
                            src={typeof imagePreview === 'string' ? imagePreview : URL.createObjectURL(imagePreview)}
                            alt="caselist Preview"
                            className="w-24 h-24 object-cover rounded-lg"
                          />
                          <Button
                            type="button"
                            variant="destructive"
                            size="sm"
                            className="absolute -top-2 -right-2 h-6 w-6 p-0"
                            onClick={() => removeImage(setFieldValue, "image", setImagePreview)}
                          >
                            <X className="h-3 w-3" />
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <label htmlFor="thumbnail" className="text-sm font-medium">
                      Thumbnail Image
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setThumbnailShowMediaLibrary(true)}
                        className="w-full"
                      >
                        {thumbnailPreview ? 'Change Media' : 'Add Media'}
                      </Button>
                      <MediaLibraryModel
                        routename={route('case.edit', caselist.id)}
                        showModal={showThumbnailMediaLibrary}
                        setShowModal={setThumbnailShowMediaLibrary}
                        setFieldValue={setFieldValue}
                        fieldName="thumbnail"
                        setImagePreview={setThumbnailPreview}
                      />

                      {thumbnailPreview && (
                        <div className="relative mt-4 inline-block">
                          <img
                            src={typeof thumbnailPreview === 'string' ? thumbnailPreview : URL.createObjectURL(thumbnailPreview)}
                            alt="Thumbnail Preview"
                            className="w-24 h-24 object-cover rounded-lg"
                          />
                          <Button
                            type="button"
                            variant="destructive"
                            size="sm"
                            className="absolute -top-2 -right-2 h-6 w-6 p-0"
                            onClick={() => removeImage(setFieldValue, "thumbnail", setThumbnailPreview)}
                          >
                            <X className="h-3 w-3" />
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Additional Data Sections */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-gray-900 border-b pb-2">
                      Additional Information
                    </h3>

                    {Object.keys(additionalDataStructure).map(section => (
                      <div key={section} className="border rounded-lg overflow-hidden">
                        <button
                          type="button"
                          className="w-full px-4 py-3 text-left flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
                          onClick={() => toggleSection(section)}
                        >
                          <span className="font-medium capitalize">
                            {section.replace('_', ' ')}
                          </span>
                          {expandedSections[section] ? (
                            <ChevronDown className="h-4 w-4 transition-transform" />
                          ) : (
                            <ChevronRight className="h-4 w-4 transition-transform" />
                          )}
                        </button>

                        {expandedSections[section] && (
                          <div className="p-4 space-y-4 border-t bg-white">
                            {Object.keys(additionalDataStructure[section]).map(fieldKey => {
                              const fieldConfig = additionalDataStructure[section][fieldKey];
                              const fieldName = `${section}_${fieldKey}`;

                              return (
                                <div key={fieldKey} className="space-y-2">
                                  <label htmlFor={fieldName} className="text-sm font-medium text-gray-700">
                                    {fieldConfig.label}
                                    {fieldConfig.required && <span className="text-red-500 ml-1">*</span>}
                                  </label>
                                  {renderAdditionalField(section, fieldKey, fieldConfig, values, setFieldValue)}
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-end gap-3 pt-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => router.get(route("case.index"))}
                    >
                      Cancel
                    </Button>
                    <Button type="submit" disabled={isSubmitting}>
                      {isSubmitting ? "Updating..." : "Update caselist"}
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
