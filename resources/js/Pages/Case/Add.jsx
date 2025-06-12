import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React, { useState } from "react";
import { Head, router, usePage } from "@inertiajs/react";
import { Upload, X, ChevronDown, ChevronRight } from "lucide-react";

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

export default function Add() {
  const { additionalDataStructure } = usePage().props;
  const [imagePreview, setImagePreview] = useState(null);
  const [thumbnailPreview, setThumbnailPreview] = useState(null);
  const [expandedSections, setExpandedSections] = useState({
    specifications: true,
    pricing: true,
    inventory: false,
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

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    const formData = new FormData();

    // Append basic form fields
    const basicFields = ['title', 'slug', 'description', 'status', 'priority'];
    basicFields.forEach(key => {
      formData.append(key, values[key]);
    });

    // Handle file uploads
    if (values.image) {
      formData.append('image', values.image);
    }
    if (values.thumbnail) {
      formData.append('thumbnail', values.thumbnail);
    }

    // Handle additional data - structure it properly
    const additionalData = {};
    Object.keys(additionalDataStructure).forEach(section => {
      additionalData[section] = {};
      Object.keys(additionalDataStructure[section]).forEach(field => {
        const fieldName = `${section}_${field}`;
        if (values[fieldName] !== undefined && values[fieldName] !== '') {
          additionalData[section][field] = values[fieldName];
        }
      });
      // Remove empty sections
      if (Object.keys(additionalData[section]).length === 0) {
        delete additionalData[section];
      }
    });

    if (Object.keys(additionalData).length > 0) {
      formData.append('additional_data', JSON.stringify(additionalData));
    }

    router.post(route("product.store"), formData, {
      forceFormData: true,
      onSuccess: () => {
        setSubmitting(false);
        resetForm();
        setImagePreview(null);
        setThumbnailPreview(null);
      },
      onError: (errors) => {
        setSubmitting(false);
      },
    });
  };

  const handleImageChange = (event, setFieldValue, fieldName, setPreview) => {
    const file = event.target.files[0];
    if (file) {
      setFieldValue(fieldName, file);
      const reader = new FileReader();
      reader.onload = (e) => setPreview(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const removeImage = (setFieldValue, fieldName, setPreview) => {
    setFieldValue(fieldName, null);
    setPreview(null);
  };

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const renderAdditionalField = (section, fieldKey, fieldConfig, values, setFieldValue) => {
    const fieldName = `${section}_${fieldKey}`;
    const fieldValue = values[fieldName] || '';

    switch (fieldConfig.type) {
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
  };

  // Create initial values for additional data fields
  const createInitialValues = () => {
    const initialValues = {
      title: "",
      description: "",
      image: null,
      thumbnail: null,
      status: "",
      priority: 0,
    };

    // Add initial values for additional data fields
    Object.keys(additionalDataStructure).forEach(section => {
      Object.keys(additionalDataStructure[section]).forEach(field => {
        const fieldName = `${section}_${field}`;
        initialValues[fieldName] = '';
      });
    });

    return initialValues;
  };

  const [showImageMediaLibrary, setImageShowMediaLibrary] = useState(false);
    const [showThumbnailMediaLibrary, setThumbnailShowMediaLibrary] = useState(false);

  return (
    <AuthenticatedLayout>
      <Head title="Add Product" />

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
                  <div className="grid gap-2">
                    <label htmlFor="title" className="text-sm font-medium">
                      Product Title *
                    </label>
                    <Field
                      as={Input}
                      id="title"
                      name="title"
                      placeholder="Enter product title"
                    />
                    <ErrorMessage
                      name="title"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="slug" className="text-sm font-medium">
                      Product Slug *
                    </label>
                    <Field
                      as={Input}
                      id="slug"
                      name="slug"
                      placeholder="Enter product slug"
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
                      placeholder="Enter product description"
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
                      Product Image
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                      <button type="button" onClick={() => setImageShowMediaLibrary(true)}>Add Media</button>
                      <MediaLibraryModel routename={route('product.create')} showModal={showImageMediaLibrary} setShowModal={setImageShowMediaLibrary} setFieldValue={setFieldValue}
                      fieldName="image"
                      setImagePreview={setImagePreview}
                      />

                       {imagePreview && (
                        <div className="relative">
                          <img
                            src={imagePreview}
                            alt="Thumbnail Preview"
                            className="w-24 h-24 object-cover rounded-lg mx-auto"
                          />
                          <Button
                            type="button"
                            variant="destructive"
                            size="sm"
                            className="absolute -top-2 -right-2"
                            onClick={() => removeImage(setFieldValue, "image", setImagePreview)}
                          >
                            <X className="h-4 w-4" />
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
                        <button type="button" onClick={() => setThumbnailShowMediaLibrary(true)}>Add Media</button>
                      <MediaLibraryModel routename={route('product.create')} showModal={showThumbnailMediaLibrary} setShowModal={setThumbnailShowMediaLibrary} setFieldValue={setFieldValue}
                        fieldName="thumbnail"
                      setImagePreview={setThumbnailPreview}
                      />

                       {thumbnailPreview && (
                        <div className="relative">
                          <img
                            src={thumbnailPreview}
                            alt="Thumbnail Preview"
                            className="w-24 h-24 object-cover rounded-lg mx-auto"
                          />
                          <Button
                            type="button"
                            variant="destructive"
                            size="sm"
                            className="absolute -top-2 -right-2"
                            onClick={() => removeImage(setFieldValue, "thumbnail", setThumbnailPreview)}
                          >
                            <X className="h-4 w-4" />
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
                      <div key={section} className="border rounded-lg">
                        <button
                          type="button"
                          className="w-full px-4 py-3 text-left flex items-center justify-between bg-gray-50 hover:bg-gray-100 rounded-t-lg"
                          onClick={() => toggleSection(section)}
                        >
                          <span className="font-medium capitalize">
                            {section.replace('_', ' ')}
                          </span>
                          {expandedSections[section] ? (
                            <ChevronDown className="h-4 w-4" />
                          ) : (
                            <ChevronRight className="h-4 w-4" />
                          )}
                        </button>

                        {expandedSections[section] && (
                          <div className="p-4 space-y-4 border-t">
                            {Object.keys(additionalDataStructure[section]).map(fieldKey => {
                              const fieldConfig = additionalDataStructure[section][fieldKey];
                              const fieldName = `${section}_${fieldKey}`;

                              return (
                                <div key={fieldKey} className="grid gap-2">
                                  <label htmlFor={fieldName} className="text-sm font-medium">
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
                      onClick={() => router.get(route("product.index"))}
                    >
                      Cancel
                    </Button>
                    <Button type="submit" disabled={isSubmitting}>
                      {isSubmitting ? "Creating..." : "Create Product"}
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
