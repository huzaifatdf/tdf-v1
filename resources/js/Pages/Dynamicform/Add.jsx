import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React, { useState } from "react";
import { Head, router, useForm, usePage } from "@inertiajs/react";
import { ArrowLeft, Upload, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function DynamicFormAdd() {
    const { form, fields, slug, errors: serverErrors } = usePage().props;
    const [files, setFiles] = useState({});

    // Initialize form data
    const initialData = {};
    fields.forEach(field => {
        if (field.type === 'checkbox' && field.options) {
            initialData[field.name] = [];
        } else if (field.default_value) {
            initialData[field.name] = field.default_value;
        } else {
            initialData[field.name] = '';
        }
    });

    const { data, setData, post, processing, errors, reset } = useForm(initialData);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create FormData for file uploads
        const formData = new FormData();

        // Add all form fields to FormData
        Object.keys(data).forEach(key => {
            if (Array.isArray(data[key])) {
                // Handle checkbox arrays
                data[key].forEach(value => {
                    formData.append(`${key}[]`, value);
                });
            } else {
                formData.append(key, data[key] || '');
            }
        });

        // Add files
        Object.keys(files).forEach(key => {
            if (files[key]) {
                formData.append(key, files[key]);
            }
        });

        post(route('form.submission.store', slug), {
            data: formData,
            forceFormData: true,
            onSuccess: () => {
                reset();
                setFiles({});
            },
        });
    };

    const renderField = (field) => {
        const fieldId = `field-${field.name}`;
        const hasError = errors[field.name] || serverErrors?.[field.name];
        const errorMessage = errors[field.name] || serverErrors?.[field.name];

        const fieldWrapper = (children) => (
            <div className={`space-y-2 ${field.width === 'half' ? 'md:col-span-1' : field.width === 'third' ? 'md:col-span-1' : 'md:col-span-2'}`}>
                <Label htmlFor={fieldId} className="text-sm font-medium">
                    {field.label}
                    {field.required && <span className="text-red-500 ml-1">*</span>}
                </Label>
                {children}
                {field.help_text && (
                    <p className="text-xs text-gray-600">{field.help_text}</p>
                )}
                {hasError && (
                    <p className="text-xs text-red-600">{errorMessage}</p>
                )}
            </div>
        );

        switch (field.type) {
            case 'text':
            case 'email':
            case 'url':
            case 'tel':
                return fieldWrapper(
                    <Input
                        id={fieldId}
                        type={field.type}
                        value={data[field.name] || ''}
                        onChange={(e) => setData(field.name, e.target.value)}
                        placeholder={field.placeholder}
                        maxLength={field.max_length}
                        minLength={field.min_length}
                        required={field.required}
                        className={hasError ? 'border-red-500' : ''}
                    />
                );

            case 'number':
                return fieldWrapper(
                    <Input
                        id={fieldId}
                        type="number"
                        value={data[field.name] || ''}
                        onChange={(e) => setData(field.name, e.target.value)}
                        placeholder={field.placeholder}
                        required={field.required}
                        className={hasError ? 'border-red-500' : ''}
                    />
                );

            case 'date':
                return fieldWrapper(
                    <Input
                        id={fieldId}
                        type="date"
                        value={data[field.name] || ''}
                        onChange={(e) => setData(field.name, e.target.value)}
                        required={field.required}
                        className={hasError ? 'border-red-500' : ''}
                    />
                );

            case 'textarea':
                return fieldWrapper(
                    <Textarea
                        id={fieldId}
                        value={data[field.name] || ''}
                        onChange={(e) => setData(field.name, e.target.value)}
                        placeholder={field.placeholder}
                        maxLength={field.max_length}
                        minLength={field.min_length}
                        required={field.required}
                        rows={4}
                        className={hasError ? 'border-red-500' : ''}
                    />
                );

            case 'select':
                return fieldWrapper(
                    <Select
                        value={data[field.name] || ''}
                        onValueChange={(value) => setData(field.name, value)}
                        required={field.required}
                    >
                        <SelectTrigger className={hasError ? 'border-red-500' : ''}>
                            <SelectValue placeholder={field.placeholder || "Select an option"} />
                        </SelectTrigger>
                        <SelectContent>
                            {field.options && Object.entries(field.options).map(([value, label]) => (
                                <SelectItem key={value} value={value}>
                                    {label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                );

            case 'radio':
                return fieldWrapper(
                    <RadioGroup
                        value={data[field.name] || ''}
                        onValueChange={(value) => setData(field.name, value)}
                        className="flex flex-col space-y-2"
                    >
                        {field.options && Object.entries(field.options).map(([value, label]) => (
                            <div key={value} className="flex items-center space-x-2">
                                <RadioGroupItem value={value} id={`${fieldId}-${value}`} />
                                <Label htmlFor={`${fieldId}-${value}`} className="text-sm font-normal">
                                    {label}
                                </Label>
                            </div>
                        ))}
                    </RadioGroup>
                );

            case 'checkbox':
                if (field.options && Object.keys(field.options).length > 1) {
                    // Multiple checkbox options
                    return fieldWrapper(
                        <div className="space-y-2">
                            {Object.entries(field.options).map(([value, label]) => (
                                <div key={value} className="flex items-center space-x-2">
                                    <Checkbox
                                        id={`${fieldId}-${value}`}
                                        checked={(data[field.name] || []).includes(value)}
                                        onCheckedChange={(checked) => {
                                            const currentValues = data[field.name] || [];
                                            if (checked) {
                                                setData(field.name, [...currentValues, value]);
                                            } else {
                                                setData(field.name, currentValues.filter(v => v !== value));
                                            }
                                        }}
                                    />
                                    <Label htmlFor={`${fieldId}-${value}`} className="text-sm font-normal">
                                        {label}
                                    </Label>
                                </div>
                            ))}
                        </div>
                    );
                } else {
                    // Single checkbox
                    return fieldWrapper(
                        <div className="flex items-center space-x-2">
                            <Checkbox
                                id={fieldId}
                                checked={!!data[field.name]}
                                onCheckedChange={(checked) => setData(field.name, checked)}
                            />
                            <Label htmlFor={fieldId} className="text-sm font-normal">
                                {field.placeholder || 'Check this box'}
                            </Label>
                        </div>
                    );
                }

            case 'file':
                return fieldWrapper(
                    <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                            <Input
                                id={fieldId}
                                type="file"
                                onChange={(e) => {
                                    const file = e.target.files[0];
                                    if (file) {
                                        setFiles(prev => ({ ...prev, [field.name]: file }));
                                        setData(field.name, file.name);
                                    }
                                }}
                                required={field.required}
                                className={hasError ? 'border-red-500' : ''}
                                accept={field.options?.accept || '*'}
                            />
                            <Upload className="h-4 w-4 text-gray-400" />
                        </div>
                        {files[field.name] && (
                            <div className="flex items-center justify-between p-2 bg-gray-50 rounded text-sm">
                                <span>{files[field.name].name}</span>
                                <Button
                                    type="button"
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => {
                                        setFiles(prev => {
                                            const newFiles = { ...prev };
                                            delete newFiles[field.name];
                                            return newFiles;
                                        });
                                        setData(field.name, '');
                                        document.getElementById(fieldId).value = '';
                                    }}
                                >
                                    <X className="h-3 w-3" />
                                </Button>
                            </div>
                        )}
                    </div>
                );

            case 'hidden':
                return (
                    <input
                        type="hidden"
                        name={field.name}
                        value={data[field.name] || field.default_value || ''}
                    />
                );

            default:
                return fieldWrapper(
                    <Input
                        id={fieldId}
                        type="text"
                        value={data[field.name] || ''}
                        onChange={(e) => setData(field.name, e.target.value)}
                        placeholder={field.placeholder}
                        required={field.required}
                        className={hasError ? 'border-red-500' : ''}
                    />
                );
        }
    };

    return (
        <AuthenticatedLayout>
            <Head title={`Add Submission - ${form.name}`} />

            <div className="max-w-4xl mx-auto p-6">
                <div className="mb-6">
                    <div className="flex items-center space-x-4 mb-4">
                        <Button
                            variant="outline"
                            onClick={() => router.get(route('dynamicform.submissions.index', slug))}
                        >
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Back to Submissions
                        </Button>
                    </div>

                    <Card>
                        <CardHeader>
                            <CardTitle>{form.name}</CardTitle>
                            {form.description && (
                                <CardDescription>{form.description}</CardDescription>
                            )}
                        </CardHeader>
                        <CardContent>
                            {Object.keys(errors).length > 0 && (
                                <Alert className="mb-6 border-red-200 bg-red-50">
                                    <AlertDescription className="text-red-800">
                                        Please correct the errors below and try again.
                                    </AlertDescription>
                                </Alert>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {fields.map((field) => (
                                        <React.Fragment key={field.id}>
                                            {renderField(field)}
                                        </React.Fragment>
                                    ))}
                                </div>

                                <div className="flex justify-end space-x-4 pt-6 border-t">
                                    <Button
                                        type="button"
                                        variant="outline"
                                        onClick={() => router.get(route('form.submissions.index', slug))}
                                    >
                                        Cancel
                                    </Button>
                                    <Button type="submit" disabled={processing}>
                                        {processing ? 'Submitting...' : (form.submit_button_text || 'Submit Form')}
                                    </Button>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
