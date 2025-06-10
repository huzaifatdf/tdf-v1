import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React, { useState } from "react";
import { Head, router, usePage } from "@inertiajs/react";
import {
  ArrowUpDown,
  ChevronDown,
  MoreHorizontal,
  Plus,
  Trash2,
  GripVertical,
  Type,
  Image,
  Video,
  Code,
  FileText,
  Table,
  Component,
  ChevronRight,
  ChevronUp,
  Eye,
  EyeOff,
  X
} from "lucide-react";

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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import MediaLibraryModel from "../Media/Model";

// Section type configurations
const SECTION_TYPES = {
  text: {
    icon: Type,
    label: 'Text',
    color: 'bg-blue-500',
    description: 'Rich text content'
  },
  image: {
    icon: Image,
    label: 'Image',
    color: 'bg-green-500',
    description: 'Image with caption'
  },
  video: {
    icon: Video,
    label: 'Video',
    color: 'bg-red-500',
    description: 'Video embed'
  },
  html: {
    icon: Code,
    label: 'HTML',
    color: 'bg-purple-500',
    description: 'Custom HTML code'
  },
  form: {
    icon: FileText,
    label: 'Form',
    color: 'bg-orange-500',
    description: 'Contact or custom form'
  },
  table: {
    icon: Table,
    label: 'Table',
    color: 'bg-cyan-500',
    description: 'Data table'
  },
  component: {
    icon: Component,
    label: 'Component',
    color: 'bg-pink-500',
    description: 'Reusable component'
  },
  accordion: {
    icon: ChevronRight,
    label: 'Accordion',
    color: 'bg-indigo-500',
    description: 'Collapsible content'
  }
};

// Section Editor Component
const SectionEditor = ({ section, onUpdate, onDelete, onMove }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(section.status === 'published');

  const sectionType = SECTION_TYPES[section.type];
  const IconComponent = sectionType.icon;

  const handleContentChange = (content) => {
    onUpdate(section.id, { ...section, content });
  };

  // Fixed property parsing and handling
  const getSectionProperties = () => {
    if (!section.properties) return {};

    if (typeof section.properties === 'string') {
      try {
        return JSON.parse(section.properties);
      } catch (e) {
        console.error('Error parsing section properties:', e);
        return {};
      }
    }

    return section.properties || {};
  };

  const handlePropertyChange = (property, value) => {
    const currentProperties = getSectionProperties();
    const updatedProperties = {
      ...currentProperties,
      [property]: value
    };

    const updatedSection = {
      ...section,
      properties: updatedProperties // Keep as object, not stringified
    };

    onUpdate(section.id, updatedSection);
  };

  const handleStatusToggle = () => {
    const newStatus = isVisible ? 'draft' : 'published';
    setIsVisible(!isVisible);
    onUpdate(section.id, { ...section, status: newStatus });
  };

  const { forms, appUrl, components } = usePage().props;

  const [showImageMediaLibrary, setImageShowMediaLibrary] = useState(false);
  const [imagePreview, setImagePreview] = useState(
    section.type === 'image' && section.content ? `${appUrl}/${section.content}` : null
  );

  const setFieldValue = (field, value) => {
    if (field === 'image') {
      handleContentChange(value);
      if (value) {
        setImagePreview(`${appUrl}/${value}`);
      } else {
        setImagePreview(null);
      }
    }
  };

  const removeImage = () => {
    setFieldValue('image', null);
  };

  const renderContentEditor = () => {
    const properties = getSectionProperties();

    switch (section.type) {
      case 'text':
        return (
          <Textarea
            value={section.content || ''}
            onChange={(e) => handleContentChange(e.target.value)}
            placeholder="Enter your text content..."
            rows={6}
            className="font-mono text-sm"
          />
        );

      case 'image':
        return (
          <div className="space-y-3">
            <button
              type="button"
              onClick={() => setImageShowMediaLibrary(true)}
              className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
            >
              {imagePreview ? 'Change Media' : 'Add Media'}
            </button>

            <MediaLibraryModel
              routename={route('page.edit', section.id)}
              showModal={showImageMediaLibrary}
              setShowModal={setImageShowMediaLibrary}
              setFieldValue={setFieldValue}
              fieldName="image"
              setImagePreview={setImagePreview}
            />

            {imagePreview && (
              <div className="relative mt-4 w-fit mx-auto">
                <img
                  src={imagePreview}
                  alt="Image Preview"
                  className="w-24 h-24 object-cover rounded-lg border"
                  onError={(e) => (e.currentTarget.style.display = 'none')}
                />
                <Button
                  type="button"
                  variant="destructive"
                  size="sm"
                  className="absolute -top-2 -right-2"
                  onClick={removeImage}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            )}

            {/* Fixed Properties: height, width, and alt */}
            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">Height (px)</label>
                <Input
                  type="number"
                  name="height"
                  value={properties.height || ''}
                  onChange={(e) => handlePropertyChange('height', e.target.value)}
                  placeholder="Height in pixels"
                  min="1"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">Width (px)</label>
                <Input
                  type="number"
                  name="width"
                  value={properties.width || ''}
                  onChange={(e) => handlePropertyChange('width', e.target.value)}
                  placeholder="Width in pixels"
                  min="1"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">Alt Text</label>
                <Input
                  type="text"
                  name="alt"
                  value={properties.alt || ''}
                  onChange={(e) => handlePropertyChange('alt', e.target.value)}
                  placeholder="Alternative text for accessibility"
                />
              </div>
            </div>
          </div>
        );

      case 'video':
        return (
          <div className="space-y-3">
            <Input
              value={section.content || ''}
              onChange={(e) => handleContentChange(e.target.value)}
              placeholder="https://youtube.com/watch?v=... or embed code"
            />

            {/* Video Properties */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">Width (px)</label>
                <Input
                  type="number"
                  value={properties.width || ''}
                  onChange={(e) => handlePropertyChange('width', e.target.value)}
                  placeholder="560"
                  min="1"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">Height (px)</label>
                <Input
                  type="number"
                  value={properties.height || ''}
                  onChange={(e) => handlePropertyChange('height', e.target.value)}
                  placeholder="315"
                  min="1"
                />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                checked={properties.autoplay || false}
                onCheckedChange={(checked) => handlePropertyChange('autoplay', checked)}
              />
              <label className="text-sm text-gray-700">Autoplay</label>
            </div>
          </div>
        );

      case 'html':
        return (
          <div className="space-y-3">
            <Textarea
              value={section.content || ''}
              onChange={(e) => handleContentChange(e.target.value)}
              placeholder={`Enter your ${section.type} code...`}
              rows={8}
              className="font-mono text-sm"
            />

            {/* HTML Properties */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">CSS Classes</label>
              <Input
                value={properties.cssClass || ''}
                onChange={(e) => handlePropertyChange('cssClass', e.target.value)}
                placeholder="custom-class another-class"
              />
            </div>
          </div>
        );

      case 'form':
        return (
          <div className="space-y-3">
            <Select
              name="form"
              value={section.content?.toString() || ''}
              onValueChange={(value) => handleContentChange(value)}
            >
              <SelectTrigger className="focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
                <SelectValue placeholder="Select a form" />
              </SelectTrigger>
              <SelectContent>
                {forms.map((form) => (
                  <SelectItem value={form.id.toString()} key={form.id}>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                      <div className="font-medium">{form.name}</div>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Form Properties */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">Form Title</label>
              <Input
                value={properties.title || ''}
                onChange={(e) => handlePropertyChange('title', e.target.value)}
                placeholder="Contact Form"
              />
            </div>
          </div>
        );

      case 'component':
        return (
          <div className="space-y-3">
            <Select
              name="component"
              value={section.content?.toString() || ''}
              onValueChange={(value) => handleContentChange(value)}
            >
              <SelectTrigger className="focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
                <SelectValue placeholder="Select a component" />
              </SelectTrigger>
              <SelectContent>
                {components.map((component, index) => (
                  <SelectItem value={component} key={index}>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                      <div className="font-medium">{component}</div>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Component Properties */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">Component Props (JSON)</label>
              <Textarea
                value={properties.props ? JSON.stringify(properties.props, null, 2) : '{}'}
                onChange={(e) => {
                  try {
                    const props = JSON.parse(e.target.value);
                    handlePropertyChange('props', props);
                  } catch (err) {
                    // Handle invalid JSON gracefully
                  }
                }}
                placeholder='{"prop1": "value1", "prop2": "value2"}'
                rows={4}
                className="font-mono text-sm"
              />
            </div>
          </div>
        );

      case 'table':
        return (
          <div className="space-y-3">
            <Textarea
              value={section.content || ''}
              onChange={(e) => handleContentChange(e.target.value)}
              placeholder="Enter table HTML or JSON data..."
              rows={6}
              className="font-mono text-sm"
            />

            {/* Table Properties */}
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center space-x-2">
                <Checkbox
                  checked={properties.striped || false}
                  onCheckedChange={(checked) => handlePropertyChange('striped', checked)}
                />
                <label className="text-sm text-gray-700">Striped Rows</label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  checked={properties.bordered || false}
                  onCheckedChange={(checked) => handlePropertyChange('bordered', checked)}
                />
                <label className="text-sm text-gray-700">Bordered</label>
              </div>
            </div>
          </div>
        );

      case 'accordion':
        return (
          <div className="space-y-3">
            <Textarea
              value={section.content || ''}
              onChange={(e) => handleContentChange(e.target.value)}
              placeholder='{"title": "FAQ Item", "content": "Answer content..."}'
              rows={4}
              className="font-mono text-sm"
            />

            {/* Accordion Properties */}
            <div className="flex items-center space-x-2">
              <Checkbox
                checked={properties.allowMultiple || false}
                onCheckedChange={(checked) => handlePropertyChange('allowMultiple', checked)}
              />
              <label className="text-sm text-gray-700">Allow Multiple Open</label>
            </div>
          </div>
        );

      default:
        return (
          <Textarea
            value={section.content || ''}
            onChange={(e) => handleContentChange(e.target.value)}
            placeholder="Enter content..."
            rows={4}
          />
        );
    }
  };

  // Rest of the component remains the same...
  return (
    <div className="bg-white border rounded-lg shadow-sm">
      {/* Section Header */}
      <div className="flex items-center justify-between p-4 border-b bg-gray-50">
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <GripVertical className="w-4 h-4 text-gray-400 cursor-move" />
            <div className={`w-3 h-3 rounded-full ${sectionType.color}`}></div>
            <IconComponent className="w-4 h-4 text-gray-600" />
            <span className="font-medium text-gray-900">{sectionType.label}</span>
          </div>
          <span className="text-sm text-gray-500">Priority: {section.priority}</span>
        </div>

        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            type="button"
            onClick={handleStatusToggle}
            className={`${isVisible ? 'text-green-600' : 'text-gray-400'}`}
          >
            {isVisible ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
          </Button>

          <Button
            variant="ghost"
            size="sm"
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button type="button" variant="ghost" size="sm">
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => onMove(section.id, 'up')}>
                Move Up
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onMove(section.id, 'down')}>
                Move Down
              </DropdownMenuItem>
              <DropdownMenuItem
                className="text-red-600"
                onClick={() => onDelete(section.id)}
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Section Content Editor */}
      {isExpanded && (
        <div className="p-4 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700">Language</label>
              <Select
                value={section.lang}
                onValueChange={(value) => onUpdate(section.id, { ...section, lang: value })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="ur">Urdu</SelectItem>
                  <SelectItem value="ar">Arabic</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">Priority</label>
              <Input
                type="number"
                value={section.priority}
                onChange={(e) => onUpdate(section.id, { ...section, priority: parseInt(e.target.value) || 0 })}
                min="0"
                max="100"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">Content</label>
            {renderContentEditor()}
          </div>
        </div>
      )}
    </div>
  );
};

// Add Section Dialog
const AddSectionDialog = ({ onAdd }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedType, setSelectedType] = useState('');

  const handleAdd = () => {
    if (selectedType) {
      onAdd(selectedType);
      setSelectedType('');
      setIsOpen(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button type="button" className="w-full" variant="outline">
          <Plus className="w-4 h-4 mr-2" />
          Add Section
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Add New Section</DialogTitle>
          <DialogDescription>
            Choose the type of content section you want to add to your page.
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-2 gap-3 mt-4">
          {Object.entries(SECTION_TYPES).map(([type, config]) => {
            const IconComponent = config.icon;
            return (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`p-4 rounded-lg border-2 transition-all hover:shadow-md ${
                  selectedType === type
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-lg ${config.color} flex items-center justify-center`}>
                    <IconComponent className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-medium text-gray-900">{config.label}</div>
                    <div className="text-sm text-gray-500">{config.description}</div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="flex justify-end space-x-2 mt-6">
          <Button variant="outline" type="button" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button type="button" onClick={handleAdd} disabled={!selectedType}>
            Add Section
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default function Edit() {
  const { page, sections = [] } = usePage().props;
  const [pageSections, setPageSections] = useState(sections);
  const [activeTab, setActiveTab] = useState('content');

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
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    const formData = {
      ...values,
      show_in_sitemap: values.show_in_sitemap ? 1 : 0,
      sections: pageSections,
      _method: 'PUT',
    };

    router.post(route("page.update", page.id), formData, {
      onSuccess: () => {
        setSubmitting(false);
      },
      onError: (errors) => {
        setSubmitting(false);
      },
    });
  };

  // Section management functions
  const addSection = (type) => {
    const newSection = {
      id: Date.now(), // Temporary ID for new sections
      type,
      lang: 'en',
      content: '',
      status: 'draft',
      priority: pageSections.length,
      isNew: true
    };
    setPageSections([...pageSections, newSection]);
  };

  const updateSection = (id, updatedSection) => {
    setPageSections(prev =>
      prev.map(section =>
        section.id === id ? updatedSection : section
      )
    );
  };

  const deleteSection = (id) => {
    setPageSections(prev => prev.filter(section => section.id !== id));
  };

  const moveSection = (id, direction) => {
    const currentIndex = pageSections.findIndex(section => section.id === id);
    if (currentIndex === -1) return;

    const newSections = [...pageSections];
    const targetIndex = direction === 'up' ? currentIndex - 1 : currentIndex + 1;

    if (targetIndex >= 0 && targetIndex < newSections.length) {
      [newSections[currentIndex], newSections[targetIndex]] =
      [newSections[targetIndex], newSections[currentIndex]];

      // Update priorities
      newSections.forEach((section, index) => {
        section.priority = index;
      });

      setPageSections(newSections);
    }
  };

  return (
    <AuthenticatedLayout>
      <Head title={`Edit Page - ${page.title}`} />

      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2 p-10">
          <div className="w-full">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-900">Edit Page</h1>
              <p className="text-gray-600 mt-1">Update the page information and content sections.</p>
            </div>

            <Formik
              initialValues={{
                image: page.image || "",
                slug: page.slug || "",
                title: page.title || "",
                description: page.description || "",
                meta_title: page.meta_title || "",
                meta_description: page.meta_description || "",
                meta_keywords: page.meta_keywords || "",
                canonical_url: page.canonical_url || "",
                redirect_url: page.redirect_url || "",
                customscript: page.customscript || "",
                customstyle: page.customstyle || "",
                status: page.status || "draft",
                priority: page.priority || 0,
                show_in_sitemap: page.show_in_sitemap === 1 || page.show_in_sitemap === true,
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
              enableReinitialize={true}
            >
              {({ isSubmitting, setFieldValue, values }) => (
                <Form className="space-y-6">
                  {/* Tabs Navigation */}
                  <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="content">Page Content</TabsTrigger>
                      <TabsTrigger value="builder">Page Builder</TabsTrigger>
                    </TabsList>

                    {/* Page Content Tab */}
                    <TabsContent value="content" className="space-y-6">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Left Column - Main Content */}
                        <div className="lg:col-span-2 space-y-6">
                          {/* Basic Information */}
                          <div className="bg-white p-6 rounded-lg shadow border">
                            <div className="border-b border-gray-200 pb-3 mb-4">
                              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                Basic Information
                              </h3>
                              <p className="text-sm text-gray-500 mt-1">Enter the main page details</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="grid gap-2">
                                <label htmlFor="title" className="text-sm font-medium text-gray-700">
                                  Title *
                                </label>
                                <Field
                                  as={Input}
                                  id="title"
                                  name="title"
                                  placeholder="Page Title"
                                  className="focus:ring-blue-500 focus:border-blue-500"
                                />
                                <ErrorMessage
                                  name="title"
                                  component="div"
                                  className="text-red-500 text-sm"
                                />
                              </div>

                              <div className="grid gap-2">
                                <label htmlFor="slug" className="text-sm font-medium text-gray-700">
                                  Slug *
                                </label>
                                <Field
                                  as={Input}
                                  id="slug"
                                  name="slug"
                                  placeholder="page-slug"
                                  className="focus:ring-blue-500 focus:border-blue-500"
                                />
                                <ErrorMessage
                                  name="slug"
                                  component="div"
                                  className="text-red-500 text-sm"
                                />
                              </div>
                            </div>

                            <div className="grid gap-2 mt-4">
                              <label htmlFor="description" className="text-sm font-medium text-gray-700">
                                Description
                              </label>
                              <Field
                                as={Textarea}
                                id="description"
                                name="description"
                                placeholder="Page description..."
                                rows={4}
                                className="focus:ring-blue-500 focus:border-blue-500"
                              />
                              <ErrorMessage
                                name="description"
                                component="div"
                                className="text-red-500 text-sm"
                              />
                            </div>

                            <div className="grid gap-2 mt-4">
                              <label htmlFor="image" className="text-sm font-medium text-gray-700">
                                Featured Image URL
                              </label>
                              <Field
                                as={Input}
                                id="image"
                                name="image"
                                placeholder="https://example.com/image.jpg"
                                className="focus:ring-blue-500 focus:border-blue-500"
                              />
                              <ErrorMessage
                                name="image"
                                component="div"
                                className="text-red-500 text-sm"
                              />
                            </div>
                          </div>

                          {/* SEO Settings */}
                          <div className="bg-white p-6 rounded-lg shadow border">
                            <div className="border-b border-gray-200 pb-3 mb-4">
                              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                SEO Settings
                              </h3>
                              <p className="text-sm text-gray-500 mt-1">Optimize your page for search engines</p>
                            </div>

                            <div className="space-y-4">
                              <div className="grid gap-2">
                                <label htmlFor="meta_title" className="text-sm font-medium text-gray-700">
                                  Meta Title
                                </label>
                                <Field
                                  as={Input}
                                  id="meta_title"
                                  name="meta_title"
                                  placeholder="SEO Title"
                                  className="focus:ring-blue-500 focus:border-blue-500"
                                />
                                <ErrorMessage
                                  name="meta_title"
                                  component="div"
                                  className="text-red-500 text-sm"
                                />
                              </div>

                              <div className="grid gap-2">
                                <label htmlFor="meta_description" className="text-sm font-medium text-gray-700">
                                  Meta Description
                                </label>
                                <Field
                                  as={Textarea}
                                  id="meta_description"
                                  name="meta_description"
                                  placeholder="SEO Description"
                                  rows={3}
                                  className="focus:ring-blue-500 focus:border-blue-500"
                                />
                                <ErrorMessage
                                  name="meta_description"
                                  component="div"
                                  className="text-red-500 text-sm"
                                />
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="grid gap-2">
                                  <label htmlFor="meta_keywords" className="text-sm font-medium text-gray-700">
                                    Meta Keywords
                                  </label>
                                  <Field
                                    as={Input}
                                    id="meta_keywords"
                                    name="meta_keywords"
                                    placeholder="keyword1, keyword2, keyword3"
                                    className="focus:ring-blue-500 focus:border-blue-500"
                                  />
                                  <ErrorMessage
                                    name="meta_keywords"
                                    component="div"
                                    className="text-red-500 text-sm"
                                  />
                                </div>

                                <div className="grid gap-2">
                                  <label htmlFor="canonical_url" className="text-sm font-medium text-gray-700">
                                    Canonical URL
                                  </label>
                                  <Field
                                    as={Input}
                                    id="canonical_url"
                                    name="canonical_url"
                                    placeholder="https://example.com/canonical-url"
                                    className="focus:ring-blue-500 focus:border-blue-500"
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
                          <div className="bg-white p-6 rounded-lg shadow border">
                            <div className="border-b border-gray-200 pb-3 mb-4">
                              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                                Advanced Settings
                              </h3>
                              <p className="text-sm text-gray-500 mt-1">Custom scripts, styles and redirects</p>
                            </div>

                            <div className="space-y-4">
                              <div className="grid gap-2">
                                <label htmlFor="redirect_url" className="text-sm font-medium text-gray-700">
                                  Redirect URL
                                </label>
                                <Field
                                  as={Input}
                                  id="redirect_url"
                                  name="redirect_url"
                                  placeholder="https://example.com/redirect-to"
                                  className="focus:ring-blue-500 focus:border-blue-500"
                                />
                                <ErrorMessage
                                  name="redirect_url"
                                  component="div"
                                  className="text-red-500 text-sm"
                                />
                              </div>

                              <div className="grid gap-2">
                                <label htmlFor="customscript" className="text-sm font-medium text-gray-700">
                                  Custom Scripts
                                </label>
                                <Field
                                  as={Textarea}
                                  id="customscript"
                                  name="customscript"
                                  placeholder="<script>...</script>"
                                  rows={4}
                                  className="focus:ring-blue-500 focus:border-blue-500 font-mono text-sm"
                                />
                                <ErrorMessage
                                  name="customscript"
                                  component="div"
                                  className="text-red-500 text-sm"
                                />
                              </div>

                              <div className="grid gap-2">
                                <label htmlFor="customstyle" className="text-sm font-medium text-gray-700">
                                  Custom Styles
                                </label>
                                <Field
                                  as={Textarea}
                                  id="customstyle"
                                  name="customstyle"
                                  placeholder="<style>...</style>"
                                  rows={4}
                                  className="focus:ring-blue-500 focus:border-blue-500 font-mono text-sm"
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
                          <div className="bg-white p-6 rounded-lg shadow border">
                            <div className="border-b border-gray-200 pb-3 mb-4">
                              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                                Page Settings
                              </h3>
                              <p className="text-sm text-gray-500 mt-1">Configure page status and visibility</p>
                            </div>

                            <div className="space-y-4">
                              <div className="grid gap-2">
                                <label htmlFor="status" className="text-sm font-medium text-gray-700">
                                  Status *
                                </label>
                                <Select
                                  name="status"
                                  value={values.status}
                                  onValueChange={(value) => setFieldValue("status", value)}
                                >
                                  <SelectTrigger className="focus:ring-blue-500 focus:border-blue-500">
                                    <SelectValue placeholder="Select status" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="draft">
                                      <div className="flex items-center">
                                        <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                                        Draft
                                      </div>
                                    </SelectItem>
                                    <SelectItem value="published">
                                      <div className="flex items-center">
                                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                                        Published
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

                              <div className="grid gap-2">
                                <label htmlFor="priority" className="text-sm font-medium text-gray-700">
                                  Priority
                                </label>
                                <Field
                                  as={Input}
                                  id="priority"
                                  name="priority"
                                  type="number"
                                  min="0"
                                  max="10"
                                  placeholder="5"
                                  className="focus:ring-blue-500 focus:border-blue-500"
                                />
                                <ErrorMessage
                                  name="priority"
                                  component="div"
                                  className="text-red-500 text-sm"
                                />
                                <p className="text-xs text-gray-500">Higher numbers = higher priority (0-10)</p>
                              </div>

                              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                                <Field name="show_in_sitemap">
                                  {({ field }) => (
                                    <Checkbox
                                      id="show_in_sitemap"
                                      checked={values.show_in_sitemap}
                                      onCheckedChange={(checked) =>
                                        setFieldValue("show_in_sitemap", checked)
                                      }
                                      className="focus:ring-blue-500"
                                    />
                                  )}
                                </Field>
                                <div>
                                  <label htmlFor="show_in_sitemap" className="text-sm font-medium text-gray-700 cursor-pointer">
                                    Show in Sitemap
                                  </label>
                                  <p className="text-xs text-gray-500">Include this page in the XML sitemap</p>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="bg-white p-6 rounded-lg shadow border">
                            <div className="space-y-3">
                              <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                                size="lg"
                              >
                                {isSubmitting ? (
                                  <div className="flex items-center">
                                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                    Updating...
                                  </div>
                                ) : (
                                  "Update Page"
                                )}
                              </Button>
                              <Button
                                type="button"
                                variant="outline"
                                onClick={() => router.get(route("page.index"))}
                                className="w-full"
                                size="lg"
                              >
                                Cancel
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>

                    {/* Page Builder Tab */}
                    <TabsContent value="builder" className="space-y-6">
                      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

                        {/* Page Sections - Main Area */}
                        <div className="lg:col-span-3 space-y-4">
                          <div className="bg-white p-6 rounded-lg shadow border">
                            <div className="border-b border-gray-200 pb-3 mb-6">
                              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                Page Sections
                              </h3>
                              <p className="text-sm text-gray-500 mt-1">
                                Build your page content with drag-and-drop sections
                              </p>
                            </div>

                            {pageSections.length === 0 ? (

                              <div className="text-center py-12 border-2 border-dashed border-gray-300 rounded-lg">
                                <div className="mx-auto w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                                  <Component className="w-6 h-6 text-gray-400" />
                                </div>
                                <h3 className="text-lg font-medium text-gray-900 mb-2">No sections yet</h3>
                                <p className="text-gray-500 mb-4">Start building your page by adding content sections.</p>
                                <AddSectionDialog onAdd={addSection} />
                              </div>
                            ) : (
                              <div className="space-y-4">
                                {pageSections
                                  .sort((a, b) => a.priority - b.priority)
                                  .map((section) => (
                                    <SectionEditor
                                      key={section.id}
                                      section={section}
                                      onUpdate={updateSection}
                                      onDelete={deleteSection}
                                      onMove={moveSection}
                                    />
                                  ))}

                                <div className="pt-4">
                                  <AddSectionDialog onAdd={addSection} />
                                </div>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Sidebar - Section Tools */}
                        <div className="space-y-6">

                          {/* Quick Add Sections */}
                          <div className="bg-white p-6 rounded-lg shadow border">
                            <div className="border-b border-gray-200 pb-3 mb-4">
                              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                Quick Add
                              </h3>
                              <p className="text-sm text-gray-500 mt-1">Add sections quickly</p>
                            </div>

                            <div className="grid grid-cols-2 gap-2">
                              {Object.entries(SECTION_TYPES).slice(0, 4).map(([type, config]) => {
                                const IconComponent = config.icon;
                                return (
                                  <button
                                    type="button"
                                    key={type}
                                    onClick={() => addSection(type)}
                                    className="p-3 rounded-lg border hover:border-blue-300 hover:bg-blue-50 transition-colors"
                                  >
                                    <div className="flex flex-col items-center space-y-1">
                                      <div className={`w-6 h-6 rounded ${config.color} flex items-center justify-center`}>
                                        <IconComponent className="w-3 h-3 text-white" />
                                      </div>
                                      <span className="text-xs font-medium text-gray-700">{config.label}</span>
                                    </div>
                                  </button>
                                );
                              })}
                            </div>

                            <div className="mt-4">
                              <AddSectionDialog onAdd={addSection} />
                            </div>
                          </div>

                          {/* Section Statistics */}
                          <div className="bg-white p-6 rounded-lg shadow border">
                            <div className="border-b border-gray-200 pb-3 mb-4">
                              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                                Statistics
                              </h3>
                            </div>

                            <div className="space-y-3">
                              <div className="flex justify-between text-sm">
                                <span className="text-gray-600">Total Sections:</span>
                                <span className="font-medium">{pageSections.length}</span>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span className="text-gray-600">Published:</span>
                                <span className="font-medium text-green-600">
                                  {pageSections.filter(s => s.status === 'published').length}
                                </span>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span className="text-gray-600">Draft:</span>
                                <span className="font-medium text-yellow-600">
                                  {pageSections.filter(s => s.status === 'draft').length}
                                </span>
                              </div>
                            </div>

                            {/* Section Types Breakdown */}
                            <div className="mt-4 pt-4 border-t border-gray-200">
                              <h4 className="text-sm font-medium text-gray-700 mb-2">Section Types</h4>
                              <div className="space-y-2">
                                {Object.entries(
                                  pageSections.reduce((acc, section) => {
                                    acc[section.type] = (acc[section.type] || 0) + 1;
                                    return acc;
                                  }, {})
                                ).map(([type, count]) => {
                                  const config = SECTION_TYPES[type];
                                  if (!config) return null;

                                  return (
                                    <div key={type} className="flex items-center justify-between text-sm">
                                      <div className="flex items-center space-x-2">
                                        <div className={`w-2 h-2 rounded-full ${config.color}`}></div>
                                        <span className="text-gray-600">{config.label}</span>
                                      </div>
                                      <span className="font-medium">{count}</span>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>

                          {/* Action Buttons - Builder */}
                          <div className="bg-white p-6 rounded-lg shadow border">
                            <div className="space-y-3">
                              <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                                size="lg"
                              >
                                {isSubmitting ? (
                                  <div className="flex items-center">
                                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                    Saving...
                                  </div>
                                ) : (
                                  "Save Page & Sections"
                                )}
                              </Button>

                              <Button
                                type="button"
                                variant="outline"
                                onClick={() => setActiveTab('content')}
                                className="w-full"
                                size="lg"
                              >
                                Back to Content
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
