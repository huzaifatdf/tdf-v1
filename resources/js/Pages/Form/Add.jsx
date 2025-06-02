import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React, { useState } from "react";
import { Head, router, usePage } from "@inertiajs/react";
import { Plus, Trash2, GripVertical, Settings, Eye } from "lucide-react";

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
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ErrorMessage, Field, Form, Formik, FieldArray } from "formik";
import * as Yup from "yup";

const FIELD_TYPES = [
  { value: 'text', label: 'Text' },
  { value: 'email', label: 'Email' },
  { value: 'number', label: 'Number' },
  { value: 'tel', label: 'Telephone' },
  { value: 'url', label: 'URL' },
  { value: 'textarea', label: 'Textarea' },
  { value: 'select', label: 'Select Dropdown' },
  { value: 'radio', label: 'Radio Button' },
  { value: 'checkbox', label: 'Checkbox' },
  { value: 'date', label: 'Date' },
  { value: 'file', label: 'File Upload' },
  { value: 'hidden', label: 'Hidden Field' }
];

const WIDTH_OPTIONS = [
  { value: 'full', label: 'Full Width' },
  { value: 'half', label: 'Half Width' },
  { value: 'third', label: 'Third Width' }
];

export default function CreateForm() {
  const [activeTab, setActiveTab] = useState('form-settings');
  const [selectedField, setSelectedField] = useState(null);
  const [isFieldDialogOpen, setIsFieldDialogOpen] = useState(false);

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Form name is required")
      .min(2, "Name must be at least 2 characters"),
    slug: Yup.string()
      .required("Slug is required")
      .matches(/^[a-z0-9-]+$/, "Slug can only contain lowercase letters, numbers, and hyphens"),
    submit_button_text: Yup.string().required("Submit button text is required"),
    success_message: Yup.string().required("Success message is required"),
    fields: Yup.array().of(
      Yup.object({
        name: Yup.string().required("Field name is required"),
        label: Yup.string().required("Field label is required"),
        type: Yup.string().required("Field type is required"),
      })
    ).min(1, "At least one field is required"),
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    // Generate slug from name if not provided
    if (!values.slug && values.name) {
      values.slug = values.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    }

    router.post(route("form.store"), values, {
      onSuccess: () => {
        setSubmitting(false);
        resetForm();
      },
      onError: (errors) => {
        setSubmitting(false);
        console.error('Form submission errors:', errors);
      },
    });
  };

  const addField = (arrayHelpers, type = 'text') => {
    const newField = {
      name: `field_${Date.now()}`,
      label: 'New Field',
      type: type,
      placeholder: '',
      default_value: '',
      help_text: '',
      required: false,
      max_length: null,
      min_length: null,
      options: [],
      sort_order: arrayHelpers.form.values.fields.length,
      width: 'full'
    };
    arrayHelpers.push(newField);
    setSelectedField(arrayHelpers.form.values.fields.length);
    setIsFieldDialogOpen(true);
  };

  const removeField = (arrayHelpers, index) => {
    arrayHelpers.remove(index);
  };

  const FieldEditor = ({ field, index, setFieldValue }) => (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor={`fields.${index}.name`}>Field Name</Label>
          <Input
            id={`fields.${index}.name`}
            value={field.name}
            onChange={(e) => setFieldValue(`fields.${index}.name`, e.target.value)}
            placeholder="field_name"
          />
        </div>
        <div>
          <Label htmlFor={`fields.${index}.label`}>Field Label</Label>
          <Input
            id={`fields.${index}.label`}
            value={field.label}
            onChange={(e) => setFieldValue(`fields.${index}.label`, e.target.value)}
            placeholder="Field Label"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor={`fields.${index}.type`}>Field Type</Label>
          <Select
            value={field.type}
            onValueChange={(value) => setFieldValue(`fields.${index}.type`, value)}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {FIELD_TYPES.map((type) => (
                <SelectItem key={type.value} value={type.value}>
                  {type.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor={`fields.${index}.width`}>Width</Label>
          <Select
            value={field.width}
            onValueChange={(value) => setFieldValue(`fields.${index}.width`, value)}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {WIDTH_OPTIONS.map((width) => (
                <SelectItem key={width.value} value={width.value}>
                  {width.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <Label htmlFor={`fields.${index}.placeholder`}>Placeholder</Label>
        <Input
          id={`fields.${index}.placeholder`}
          value={field.placeholder || ''}
          onChange={(e) => setFieldValue(`fields.${index}.placeholder`, e.target.value)}
          placeholder="Enter placeholder text"
        />
      </div>

      <div>
        <Label htmlFor={`fields.${index}.help_text`}>Help Text</Label>
        <Input
          id={`fields.${index}.help_text`}
          value={field.help_text || ''}
          onChange={(e) => setFieldValue(`fields.${index}.help_text`, e.target.value)}
          placeholder="Optional help text"
        />
      </div>

      <div className="flex items-center space-x-2">
        <Switch
          id={`fields.${index}.required`}
          checked={field.required || false}
          onCheckedChange={(checked) => setFieldValue(`fields.${index}.required`, checked)}
        />
        <Label htmlFor={`fields.${index}.required`}>Required Field</Label>
      </div>

      {['select', 'radio', 'checkbox'].includes(field.type) && (
        <div>
          <Label>Options (one per line)</Label>
          <Textarea
            value={field.options ? field.options.join('\n') : ''}
            onChange={(e) => {
              const options = e.target.value.split('\n').filter(option => option.trim());
              setFieldValue(`fields.${index}.options`, options);
            }}
            placeholder="Option 1&#10;Option 2&#10;Option 3"
            rows={4}
          />
        </div>
      )}
    </div>
  );

  return (
    <AuthenticatedLayout>
      <Head title="Create Form" />

      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2 p-10">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold">Create New Form</h1>
            <Button
              variant="outline"
              onClick={() => router.get(route("form.index"))}
            >
              Back to Forms
            </Button>
          </div>

          <Formik
            initialValues={{
              name: "",
              description: "",
              slug: "",
              submit_button_text: "Submit",
              success_message: "Thank you for your submission!",
              redirect_url: "",
              notification_email: "",
              email_subject: "",
              status: "active",
              require_captcha: false,
              store_submissions: true,
              fields: []
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, setFieldValue, values }) => (
              <Form className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Left Panel - Form Builder */}
                  <div className="lg:col-span-2">
                    <Card>
                      <CardHeader>
                        <CardTitle>Form Builder</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Tabs value={activeTab} onValueChange={setActiveTab}>
                          <TabsList className="mb-4">
                            <TabsTrigger value="form-settings">Form Settings</TabsTrigger>
                            <TabsTrigger value="form-fields">Form Fields</TabsTrigger>
                          </TabsList>

                          <TabsContent value="form-settings" className="space-y-4">
                            <div className="grid gap-4">
                              <div>
                                <Label htmlFor="name">Form Name</Label>
                                <Field
                                  as={Input}
                                  id="name"
                                  name="name"
                                  placeholder="Contact Form"
                                  onChange={(e) => {
                                    setFieldValue('name', e.target.value);
                                    // Auto-generate slug
                                    const slug = e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
                                    setFieldValue('slug', slug);
                                  }}
                                />
                                <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
                              </div>

                              <div>
                                <Label htmlFor="slug">Form Slug</Label>
                                <Field
                                  as={Input}
                                  id="slug"
                                  name="slug"
                                  placeholder="contact-form"
                                />
                                <ErrorMessage name="slug" component="div" className="text-red-500 text-sm" />
                              </div>

                              <div>
                                <Label htmlFor="description">Description</Label>
                                <Field
                                  as={Textarea}
                                  id="description"
                                  name="description"
                                  placeholder="Optional form description"
                                />
                              </div>

                              <div>
                                <Label htmlFor="submit_button_text">Submit Button Text</Label>
                                <Field
                                  as={Input}
                                  id="submit_button_text"
                                  name="submit_button_text"
                                  placeholder="Submit"
                                />
                              </div>

                              <div>
                                <Label htmlFor="success_message">Success Message</Label>
                                <Field
                                  as={Textarea}
                                  id="success_message"
                                  name="success_message"
                                  placeholder="Thank you for your submission!"
                                />
                              </div>

                              <div>
                                <Label htmlFor="notification_email">Notification Email</Label>
                                <Field
                                  as={Input}
                                  id="notification_email"
                                  name="notification_email"
                                  type="email"
                                  placeholder="admin@example.com"
                                />
                              </div>
                            </div>
                          </TabsContent>

                          <TabsContent value="form-fields">
                            <FieldArray name="fields">
                              {(arrayHelpers) => (
                                <div className="space-y-4">
                                  <div className="flex justify-between items-center">
                                    <h3 className="text-lg font-medium">Form Fields</h3>
                                    <Button
                                      type="button"
                                      onClick={() => addField(arrayHelpers)}
                                      size="sm"
                                    >
                                      <Plus className="w-4 h-4 mr-2" />
                                      Add Field
                                    </Button>
                                  </div>

                                  {values.fields.length === 0 ? (
                                    <div className="text-center py-8 text-gray-500">
                                      <p>No fields added yet. Click "Add Field" to get started.</p>
                                    </div>
                                  ) : (
                                    <div className="space-y-2">
                                      {values.fields.map((field, index) => (
                                        <div
                                          key={index}
                                          className="flex items-center space-x-2 p-3 border rounded-lg bg-gray-50"
                                        >
                                          <GripVertical className="w-4 h-4 text-gray-400" />
                                          <div className="flex-1">
                                            <div className="font-medium">{field.label}</div>
                                            <div className="text-sm text-gray-500">
                                              {field.type} • {field.required ? 'Required' : 'Optional'}
                                            </div>
                                          </div>
                                          <Dialog
                                            open={isFieldDialogOpen && selectedField === index}
                                            onOpenChange={(open) => {
                                              setIsFieldDialogOpen(open);
                                              if (!open) setSelectedField(null);
                                            }}
                                          >
                                            <DialogTrigger asChild>
                                              <Button
                                                type="button"
                                                variant="outline"
                                                size="sm"
                                                onClick={() => {
                                                  setSelectedField(index);
                                                  setIsFieldDialogOpen(true);
                                                }}
                                              >
                                                <Settings className="w-4 h-4" />
                                              </Button>
                                            </DialogTrigger>
                                            <DialogContent className="max-w-2xl">
                                              <DialogHeader>
                                                <DialogTitle>Edit Field</DialogTitle>
                                              </DialogHeader>
                                              <FieldEditor
                                                field={field}
                                                index={index}
                                                setFieldValue={setFieldValue}
                                              />
                                            </DialogContent>
                                          </Dialog>
                                          <Button
                                            type="button"
                                            variant="outline"
                                            size="sm"
                                            onClick={() => removeField(arrayHelpers, index)}
                                          >
                                            <Trash2 className="w-4 h-4" />
                                          </Button>
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                  <ErrorMessage name="fields" component="div" className="text-red-500 text-sm" />
                                </div>
                              )}
                            </FieldArray>
                          </TabsContent>
                        </Tabs>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Right Panel - Form Preview */}
                  <div className="lg:col-span-1">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Eye className="w-4 h-4 mr-2" />
                          Preview
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4 p-4 border rounded-lg bg-gray-50">
                          <h3 className="font-medium">{values.name || 'Form Name'}</h3>
                          {values.description && (
                            <p className="text-sm text-gray-600">{values.description}</p>
                          )}

                          {values.fields.map((field, index) => (
                            <div key={index} className="space-y-1">
                              <Label className="text-sm">
                                {field.label}
                                {field.required && <span className="text-red-500 ml-1">*</span>}
                              </Label>
                              {field.type === 'textarea' ? (
                                <Textarea
                                  placeholder={field.placeholder}
                                  disabled
                                  className="bg-white"
                                />
                              ) : field.type === 'select' ? (
                                <Select disabled>
                                  <SelectTrigger className="bg-white">
                                    <SelectValue placeholder={field.placeholder || 'Select an option'} />
                                  </SelectTrigger>
                                </Select>
                              ) : (
                                <Input
                                  type={field.type}
                                  placeholder={field.placeholder}
                                  disabled
                                  className="bg-white"
                                />
                              )}
                              {field.help_text && (
                                <p className="text-xs text-gray-500">{field.help_text}</p>
                              )}
                            </div>
                          ))}

                          <Button disabled className="w-full">
                            {values.submit_button_text}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Form Actions */}
                <div className="flex justify-end gap-3 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => router.get(route("form.index"))}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Creating..." : "Create Form"}
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
