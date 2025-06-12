import axios from 'axios';
import React from 'react'

function ProductForm() {
     const [isExpanded, setIsExpanded] = React.useState(false);
    const [form, setForm] = React.useState(null);
    const [formData, setFormData] = React.useState({});
    const [files, setFiles] = React.useState({});
    const [loading, setLoading] = React.useState(false);
    const [errors, setErrors] = React.useState({});
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    React.useEffect(() => {
        // Fetch form configuration
        axios.get('/api/v1/form/product-form')
            .then(response => {
                console.log(response.data);
                setForm(response.data.form);

                // Initialize form data based on form fields
                const initialData = {};
                response.data.fields.forEach(field => {
                    if (field.type === 'checkbox' && field.options) {
                        initialData[field.name] = [];
                    } else if (field.default_value) {
                        initialData[field.name] = field.default_value;
                    } else {
                        initialData[field.name] = '';
                    }
                });
                setFormData(initialData);
            })
            .catch(error => {
                console.error('Error fetching form:', error);
            });
    }, []);

    const handleInputChange = (fieldName, value) => {
        setFormData(prev => ({
            ...prev,
            [fieldName]: value
        }));

        // Clear error when user starts typing
        if (errors[fieldName]) {
            setErrors(prev => ({
                ...prev,
                [fieldName]: null
            }));
        }
    };

    const handleFileChange = (fieldName, file) => {
        if (file) {
            setFiles(prev => ({
                ...prev,
                [fieldName]: file
            }));
            setFormData(prev => ({
                ...prev,
                [fieldName]: file.name
            }));
        }
    };

    const handleCheckboxChange = (fieldName, value, checked) => {
        setFormData(prev => {
            const currentValues = prev[fieldName] || [];
            if (checked) {
                return {
                    ...prev,
                    [fieldName]: [...currentValues, value]
                };
            } else {
                return {
                    ...prev,
                    [fieldName]: currentValues.filter(v => v !== value)
                };
            }
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrors({});

        try {
            // Create FormData for file uploads
            const submitData = new FormData();
            console.log(formData);
            // Add all form fields to FormData
            Object.keys(formData).forEach(key => {
                if (Array.isArray(formData[key])) {
                    // Handle checkbox arrays
                    formData[key].forEach(value => {
                        submitData.append(`${key}[]`, value);
                    });
                } else {
                    submitData.append(key, formData[key] || '');
                }
            });

            // Add files
            Object.keys(files).forEach(key => {
                if (files[key]) {
                    submitData.append(key, files[key]);
                }
            });


            // Submit to API
            const response = await axios.post(`/api/v1/form/${form.slug}/submit`, submitData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            // Handle success
            alert(form.success_message || 'Form submitted successfully!');

            // Reset form
            const initialData = {};
            form.fields.forEach(field => {
                if (field.type === 'checkbox' && field.options) {
                    initialData[field.name] = [];
                } else {
                    initialData[field.name] = '';
                }
            });
            setFormData(initialData);
            setFiles({});
            setIsExpanded(false); // Close the form after successful submission

        } catch (error) {
            console.error('Form submission error:', error);

            if (error.response && error.response.data && error.response.data.errors) {
                setErrors(error.response.data.errors);
            } else {
                alert('There was an error submitting the form. Please try again.');
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    const renderField = (field) => {
        const fieldValue = formData[field.name] || '';
        const fieldError = errors[field.name];
        const fieldId = `field-${field.name}`;

        const baseInputClasses = "w-full bg-transparent ";
        const errorClasses = fieldError ? "border-red-500" : "";

        switch (field.type) {
            case 'text':
            case 'email':
            case 'url':
            case 'tel':
                return (
                    <div key={field.id} className={field.width === 'half' ? 'w-full md:w-[45%]' : 'w-full'}>
                        <input
                            id={fieldId}
                            type={field.type}
                            value={fieldValue}
                            onChange={(e) => handleInputChange(field.name, e.target.value)}
                            placeholder={field.placeholder || field.label}
                            required={field.required}
                            maxLength={field.max_length}
                            minLength={field.min_length}
                            className={`${baseInputClasses} ${errorClasses}`}
                        />
                        {fieldError && <p className="text-red-500 text-sm mt-1">{fieldError}</p>}
                    </div>
                );

            case 'number':
                return (
                    <div key={field.id} className={field.width === 'half' ? 'w-full md:w-[45%]' : 'w-full'}>
                        <input
                            id={fieldId}
                            type="number"
                            value={fieldValue}
                            onChange={(e) => handleInputChange(field.name, e.target.value)}
                            placeholder={field.placeholder || field.label}
                            required={field.required}
                            className={`${baseInputClasses} ${errorClasses}`}
                        />
                        {fieldError && <p className="text-red-500 text-sm mt-1">{fieldError}</p>}
                    </div>
                );

            case 'textarea':
                return (
                    <div key={field.id} className="w-full">
                        <textarea
                            id={fieldId}
                            value={fieldValue}
                            onChange={(e) => handleInputChange(field.name, e.target.value)}
                            placeholder={field.placeholder || field.label}
                            required={field.required}
                            maxLength={field.max_length}
                            minLength={field.min_length}
                            rows={4}
                            className={`${baseInputClasses} ${errorClasses}`}
                        />
                        {fieldError && <p className="text-red-500 text-sm mt-1">{fieldError}</p>}
                    </div>
                );

            case 'select':
                return (
                    <div key={field.id} className={field.width === 'half' ? 'w-full md:w-[45%]' : 'w-full'}>
                        <select
                            id={fieldId}
                            value={fieldValue}
                            onChange={(e) => handleInputChange(field.name, e.target.value)}
                            required={field.required}
                            className={`${baseInputClasses} ${errorClasses}`}
                        >
                            <option value="">{field.placeholder || `Select ${field.label}`}</option>
                            {field.options && Object.entries(field.options).map(([value, label]) => (
                                <option key={value} value={value}>{label}</option>
                            ))}
                        </select>
                        {fieldError && <p className="text-red-500 text-sm mt-1">{fieldError}</p>}
                    </div>
                );

            case 'radio':
                return (
                    <div key={field.id} className="w-full">
                        <label className="block text-white mb-2">{field.label}</label>
                        <div className="space-y-2">
                            {field.options && Object.entries(field.options).map(([value, label]) => (
                                <label key={value} className="flex items-center text-white">
                                    <input
                                        type="radio"
                                        name={field.name}
                                        value={value}
                                        checked={fieldValue === value}
                                        onChange={(e) => handleInputChange(field.name, e.target.value)}
                                        required={field.required}
                                        className="mr-2"
                                    />
                                    {label}
                                </label>
                            ))}
                        </div>
                        {fieldError && <p className="text-red-500 text-sm mt-1">{fieldError}</p>}
                    </div>
                );

            case 'checkbox':
                if (field.options && Object.keys(field.options).length > 1) {
                    // Multiple checkbox options
                    return (
                        <div key={field.id} className="w-full">
                            <label className="block text-white mb-2">{field.label}</label>
                            <div className="space-y-2">
                                {Object.entries(field.options).map(([value, label]) => (
                                    <label key={value} className="flex items-center text-white">
                                        <input
                                            type="checkbox"
                                            checked={(fieldValue || []).includes(value)}
                                            onChange={(e) => handleCheckboxChange(field.name, value, e.target.checked)}
                                            className="mr-2"
                                        />
                                        {label}
                                    </label>
                                ))}
                            </div>
                            {fieldError && <p className="text-red-500 text-sm mt-1">{fieldError}</p>}
                        </div>
                    );
                } else {
                    // Single checkbox
                    return (
                        <div key={field.id} className="w-full">
                            <label className="flex items-center text-white">
                                <input
                                    type="checkbox"
                                    checked={!!fieldValue}
                                    onChange={(e) => handleInputChange(field.name, e.target.checked)}
                                    className="mr-2"
                                />
                                {field.placeholder || field.label}
                            </label>
                            {fieldError && <p className="text-red-500 text-sm mt-1">{fieldError}</p>}
                        </div>
                    );
                }

            case 'file':
                return (
                    <div key={field.id} className="w-full">
                        <label className="block text-white mb-2">{field.label}</label>
                        <input
                            id={fieldId}
                            type="file"
                            onChange={(e) => handleFileChange(field.name, e.target.files[0])}
                            required={field.required}
                            accept={field.options?.accept || '*'}
                            className="w-full p-3 bg-transparent border border-gray-600 rounded-md text-white file:bg-purple-600 file:text-white file:border-none file:rounded file:px-4 file:py-2 file:mr-4"
                        />
                        {files[field.name] && (
                            <p className="text-sm text-gray-400 mt-1">Selected: {files[field.name].name}</p>
                        )}
                        {fieldError && <p className="text-red-500 text-sm mt-1">{fieldError}</p>}
                    </div>
                );

            case 'date':
                return (
                    <div key={field.id} className={field.width === 'half' ? 'w-full md:w-[45%]' : 'w-full'}>
                        <input
                            id={fieldId}
                            type="date"
                            value={fieldValue}
                            onChange={(e) => handleInputChange(field.name, e.target.value)}
                            required={field.required}
                            className={`${baseInputClasses} ${errorClasses}`}
                        />
                        {fieldError && <p className="text-red-500 text-sm mt-1">{fieldError}</p>}
                    </div>
                );

            case 'hidden':
                return (
                    <input
                        key={field.id}
                        type="hidden"
                        name={field.name}
                        value={fieldValue || field.default_value || ''}
                    />
                );

            default:
                return (
                    <div key={field.id} className={field.width === 'half' ? 'w-full md:w-[45%]' : 'w-full'}>
                        <input
                            id={fieldId}
                            type="text"
                            value={fieldValue}
                            onChange={(e) => handleInputChange(field.name, e.target.value)}
                            placeholder={field.placeholder || field.label}
                            required={field.required}
                            className={`${baseInputClasses} ${errorClasses}`}
                        />
                        {fieldError && <p className="text-red-500 text-sm mt-1">{fieldError}</p>}
                    </div>
                );
        }
    };

  return (
   <>


            <div className="">
                {/* Dynamic Form */}
            {form && form.fields && (
                <form onSubmit={handleSubmit} className="">
                    <div className='grid grid-cols-1 md:grid-cols-1 gap-6 py-6 transform transition-transform duration-500 ease-in-out'>
                    <div className="flex flex-col md:flex-row md:flex-wrap gap-4 text-white justify-between">
                    {form.fields.map((field) => renderField(field))}
                    </div>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group flex items-center justify-content-end gap-2 bg-transparent border-none fc-primary transition-colors duration-300 text-lg font-medium cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? 'Submitting...' : (form.submit_button_text || 'Submit')}
                        <span className="fc-purple group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                    </div>
                </form>
            )}

            {/* Loading state */}
            {!form && (
                <div className="flex items-center justify-center text-white">
                    <p>Loading form...</p>
                </div>
            )}
            </div>

   </>
  )
}

export default ProductForm
