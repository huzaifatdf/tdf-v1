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
  const [imagePreview, setImagePreview] = useState(null);

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(2, "Name must be at least 2 characters")
      .max(255, "Name must not exceed 255 characters"),
    description: Yup.string().notRequired().max(1000, "Description must not exceed 1000 characters"),
    status: Yup.string()
      .required("Status is required")
      .oneOf(["published", "draft"], "Invalid status"),
    priority: Yup.number()
      .required("Priority is required")
      .min(0, "Priority must be at least 0")
      .max(9999999, "Priority must not exceed 9999999"),
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    const formData = new FormData();

    // Append basic form fields
    const basicFields = ['name', 'description', 'status', 'priority'];
    basicFields.forEach(key => {
      formData.append(key, values[key]);
    });

    // Handle file uploads
    if (values.image) {
      formData.append('image', values.image);
    }



    router.post(route("ourclient.store"), formData, {
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


  const removeImage = (setFieldValue, fieldName, setPreview) => {
    setFieldValue(fieldName, null);
    setPreview(null);
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

    return initialValues;
  };

  const [showImageMediaLibrary, setImageShowMediaLibrary] = useState(false);


  return (
    <AuthenticatedLayout>
      <Head title="Add ourclient" />

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
                    <label htmlFor="name" className="text-sm font-medium">
                      Client name *
                    </label>
                    <Field
                      as={Input}
                      id="name"
                      name="name"
                      placeholder="Enter name"
                    />
                    <ErrorMessage
                      name="name"
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
                      placeholder="Enter ourclient description"
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
                      ourclient Image
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                      <button type="button" onClick={() => setImageShowMediaLibrary(true)}>Add Media</button>
                      <MediaLibraryModel routename={route('ourclient.create')} showModal={showImageMediaLibrary} setShowModal={setImageShowMediaLibrary} setFieldValue={setFieldValue}
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




                  <div className="flex justify-end gap-3 pt-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => router.get(route("ourclient.index"))}
                    >
                      Cancel
                    </Button>
                    <Button type="submit" disabled={isSubmitting}>
                      {isSubmitting ? "Creating..." : "Create client"}
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
