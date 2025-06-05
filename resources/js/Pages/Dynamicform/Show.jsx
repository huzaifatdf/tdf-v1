import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React, { useState } from "react";
import { Head, router, usePage } from "@inertiajs/react";
import { ArrowLeft, Download, Archive, FileText, User, Calendar, Globe, Monitor, Eye, RotateCcw } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function DynamicFormShow() {
    const { submission, form, formFields, slug } = usePage().props;
    const [isExporting, setIsExporting] = useState(false);
    const [exportFormat, setExportFormat] = useState('csv');

    const handleArchive = () => {
        router.post(route('form.submission.archive', [slug, submission.id]), {}, {
            onSuccess: () => {
                // Page will refresh with updated data
            }
        });
    };

    const handleExport = () => {
        setIsExporting(true);

        const form = document.createElement('form');
        form.method = 'POST';
        form.action = route('form.submission.export', slug);

        // Add CSRF token
        const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
        const csrfInput = document.createElement('input');
        csrfInput.type = 'hidden';
        csrfInput.name = '_token';
        csrfInput.value = csrfToken;
        form.appendChild(csrfInput);

        // Add submission ID
        const submissionIdInput = document.createElement('input');
        submissionIdInput.type = 'hidden';
        submissionIdInput.name = 'submission_id';
        submissionIdInput.value = submission.id;
        form.appendChild(submissionIdInput);

        // Add format
        const formatInput = document.createElement('input');
        formatInput.type = 'hidden';
        formatInput.name = 'format';
        formatInput.value = exportFormat;
        form.appendChild(formatInput);

        document.body.appendChild(form);
        form.submit();
        document.body.removeChild(form);

        setTimeout(() => setIsExporting(false), 2000);
    };

    const renderFieldValue = (field, value) => {
        if (!value && value !== 0 && field.type !== 'checkbox') {
            return <span className="text-gray-400 italic">No data</span>;
        }

        switch (field.type) {
            case 'file':
                if (typeof value === 'object' && value.original_name) {
                    return (
                        <div className="flex items-center space-x-2">
                            <FileText className="h-4 w-4 text-gray-500" />
                            <span>{value.original_name}</span>
                            <Badge variant="outline" className="text-xs">
                                {(value.size / 1024).toFixed(1)} KB
                            </Badge>
                            {value.path && (
                                <Button
                                    variant="link"
                                    size="sm"
                                    onClick={() => window.open(`/storage/${value.path}`, '_blank')}
                                    className="p-0 h-auto"
                                >
                                    <Eye className="h-3 w-3 mr-1" />
                                    View
                                </Button>
                            )}
                        </div>
                    );
                }
                return <span className="text-gray-400 italic">No file uploaded</span>;

            case 'checkbox':
                if (Array.isArray(value) && value.length > 0) {
                    return (
                        <div className="flex flex-wrap gap-1">
                            {value.map((item, index) => (
                                <Badge key={index} variant="secondary" className="text-xs">
                                    {field.options?.[item] || item}
                                </Badge>
                            ))}
                        </div>
                    );
                } else if (value === true || value === '1' || value === 1) {
                    return <Badge variant="secondary">Yes</Badge>;
                } else {
                    return <Badge variant="outline">No</Badge>;
                }

            case 'select':
            case 'radio':
                return field.options?.[value] || value;

            case 'textarea':
                return (
                    <div className="whitespace-pre-wrap bg-gray-50 p-3 rounded-md border">
                        {value}
                    </div>
                );

            case 'email':
                return (
                    <a
                        href={`mailto:${value}`}
                        className="text-blue-600 hover:underline"
                    >
                        {value}
                    </a>
                );

            case 'url':
                return (
                    <a
                        href={value}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                    >
                        {value}
                    </a>
                );

            case 'date':
                return new Date(value).toLocaleDateString();

            default:
                return value;
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'new':
                return 'bg-blue-100 text-blue-800';
            case 'read':
                return 'bg-green-100 text-green-800';
            case 'archived':
                return 'bg-gray-100 text-gray-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <AuthenticatedLayout>
            <Head title={`Submission #${submission.id} - ${form.name}`} />

            <div className="max-w-6xl mx-auto p-6">
                {/* Header */}
                <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                            <Button
                                variant="outline"
                                onClick={() => router.get(route('form.submission.index', slug))}
                            >
                                <ArrowLeft className="h-4 w-4 mr-2" />
                                Back to Submissions
                            </Button>
                            <div>
                                <h1 className="text-2xl font-bold">
                                    Submission #{submission.id}
                                </h1>
                                <p className="text-gray-600">{form.name}</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-2">
                            <Badge className={getStatusColor(submission.status)}>
                                {submission.status?.charAt(0)?.toUpperCase() + submission.status?.slice(1)}
                            </Badge>

                            {/* Export Dialog */}
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button variant="outline">
                                        <Download className="h-4 w-4 mr-2" />
                                        Export
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px]">
                                    <DialogHeader>
                                        <DialogTitle>Export Submission</DialogTitle>
                                        <DialogDescription>
                                            Choose the format for exporting this submission.
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className="space-y-4 py-4">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Format</label>
                                            <Select value={exportFormat} onValueChange={setExportFormat}>
                                                <SelectTrigger>
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="csv">CSV</SelectItem>
                                                    <SelectItem value="json">JSON</SelectItem>
                                                    <SelectItem value="excel">Excel</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                    <DialogFooter>
                                        <Button onClick={handleExport} disabled={isExporting}>
                                            {isExporting ? 'Exporting...' : 'Export'}
                                        </Button>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>

                            {/* Archive Dialog */}
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button
                                        variant={submission.status === 'archived' ? 'default' : 'destructive'}
                                    >
                                        {submission.status === 'archived' ? (
                                            <>
                                                <RotateCcw className="h-4 w-4 mr-2" />
                                                Restore
                                            </>
                                        ) : (
                                            <>
                                                <Archive className="h-4 w-4 mr-2" />
                                                Archive
                                            </>
                                        )}
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px]">
                                    <DialogHeader>
                                        <DialogTitle>
                                            {submission.status === 'archived' ? 'Restore' : 'Archive'} Submission
                                        </DialogTitle>
                                        <DialogDescription>
                                            {submission.status === 'archived'
                                                ? 'Are you sure you want to restore this submission?'
                                                : 'Are you sure you want to archive this submission? This action can be undone later.'
                                            }
                                        </DialogDescription>
                                    </DialogHeader>
                                    <DialogFooter>
                                        <Button
                                            variant={submission.status === 'archived' ? 'default' : 'destructive'}
                                            onClick={handleArchive}
                                        >
                                            {submission.status === 'archived' ? 'Confirm Restore' : 'Confirm Archive'}
                                        </Button>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Submission Data</CardTitle>
                                <CardDescription>
                                    Form responses and uploaded files
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {formFields.map((field) => (
                                    <div key={field.id} className="border-b pb-4 last:border-b-0">
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            <div className="md:col-span-1">
                                                <label className="text-sm font-medium text-gray-700">
                                                    {field.label}
                                                    {field.required && (
                                                        <span className="text-red-500 ml-1">*</span>
                                                    )}
                                                </label>
                                                <p className="text-xs text-gray-500 mt-1">
                                                    {field.type} field
                                                </p>
                                            </div>
                                            <div className="md:col-span-2">
                                                <div className="text-sm">
                                                    {renderFieldValue(field, submission.data?.[field.name])}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                {formFields.length === 0 && (
                                    <Alert>
                                        <AlertDescription>
                                            No form fields configured for this form.
                                        </AlertDescription>
                                    </Alert>
                                )}
                            </CardContent>
                        </Card>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Metadata Card */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-base">Submission Details</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4 text-sm">
                                <div className="flex items-center space-x-2">
                                    <Calendar className="h-4 w-4 text-gray-500" />
                                    <div>
                                        <p className="font-medium">Submitted</p>
                                        <p className="text-gray-600">
                                            {new Date(submission.created_at).toLocaleString()}
                                        </p>
                                    </div>
                                </div>

                                <Separator />

                                {submission.user && (
                                    <>
                                        <div className="flex items-center space-x-2">
                                            <User className="h-4 w-4 text-gray-500" />
                                            <div>
                                                <p className="font-medium">Submitted by</p>
                                                <p className="text-gray-600">
                                                    {submission.user.name}
                                                </p>
                                                <p className="text-gray-500 text-xs">
                                                    {submission.user.email}
                                                </p>
                                            </div>
                                        </div>
                                        <Separator />
                                    </>
                                )}

                                <div className="flex items-center space-x-2">
                                    <Globe className="h-4 w-4 text-gray-500" />
                                    <div>
                                        <p className="font-medium">IP Address</p>
                                        <p className="text-gray-600 font-mono text-xs">
                                            {submission.ip_address || 'Unknown'}
                                        </p>
                                    </div>
                                </div>

                                {submission.user_agent && (
                                    <>
                                        <Separator />
                                        <div className="flex items-start space-x-2">
                                            <Monitor className="h-4 w-4 text-gray-500 mt-0.5" />
                                            <div className="flex-1">
                                                <p className="font-medium">User Agent</p>
                                                <p className="text-gray-600 text-xs break-all">
                                                    {submission.user_agent}
                                                </p>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </CardContent>
                        </Card>

                        {/* Form Info Card */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-base">Form Information</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2 text-sm">
                                <div>
                                    <p className="font-medium">{form.name}</p>
                                    {form.description && (
                                        <p className="text-gray-600 text-xs mt-1">
                                            {form.description}
                                        </p>
                                    )}
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-500">Form ID:</span>
                                    <span className="font-mono text-xs">{form.id}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-500">Slug:</span>
                                    <span className="font-mono text-xs">{form.slug}</span>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
