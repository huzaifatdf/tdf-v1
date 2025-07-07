import { router } from '@inertiajs/react';
import axios from 'axios';
import React from 'react'
import * as Yup from 'yup';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

function ProductForm(props) {
     const [isExpanded, setIsExpanded] = React.useState(false);
    const [form, setForm] = React.useState(null);
    const [formData, setFormData] = React.useState({});
    const [files, setFiles] = React.useState({});
    const [loading, setLoading] = React.useState(false);
    const [errors, setErrors] = React.useState({});
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const {product} = props;
    const [validationSchema, setValidationSchema] = React.useState(null);

           const createValidationSchema = (fields) => {
                const schemaFields = {};

                //ignore on field_product
                if (fields.some(field => field.name === 'field_product')) {
                    fields = fields.filter(field => field.name !== 'field_product');
                }

                fields.forEach(field => {
                    let fieldSchema;

                    switch (field.type) {
                        case 'email':
                            fieldSchema = Yup.string().email('Please enter a valid email address');
                            break;
                        case 'url':
                            fieldSchema = Yup.string().url('Please enter a valid URL');
                            break;
                        case 'tel':
                            fieldSchema = Yup.string().test(
                                'is-valid-phone',
                                'Please enter a valid phone number',
                                function(value) {
                                    // If no value and not required, it's valid
                                    if (!value && !field.required) return true;
                                    // If no value and required, it's invalid
                                    if (!value && field.required) return false;
                                    // Check if it's a valid phone number format (basic check)
                                    // react-phone-number-input handles most validation
                                    return value.length >= 10; // Basic length check
                                }
                            );
                            break;
                        case 'number':
                            fieldSchema = Yup.number().typeError('Please enter a valid number');
                            if (field.min !== undefined) {
                                fieldSchema = fieldSchema.min(field.min, `Minimum value is ${field.min}`);
                            }
                            if (field.max !== undefined) {
                                fieldSchema = fieldSchema.max(field.max, `Maximum value is ${field.max}`);
                            }
                            break;
                        case 'date':
                            fieldSchema = Yup.date().typeError('Please enter a valid date');
                            break;
                        case 'checkbox':
                            if (field.options && Object.keys(field.options).length > 1) {
                                // Multiple checkboxes
                                fieldSchema = Yup.array();
                                if (field.required) {
                                    fieldSchema = fieldSchema.min(1, `Please select at least one ${field.label.toLowerCase()}`);
                                }
                            } else {
                                // Single checkbox
                                fieldSchema = Yup.boolean();
                                if (field.required) {
                                    fieldSchema = fieldSchema.oneOf([true], `${field.label} is required`);
                                }
                            }
                            break;
                        case 'radio':
                            fieldSchema = Yup.string();
                            break;
                        case 'select':
                            fieldSchema = Yup.string();
                            break;
                        case 'file':
                            fieldSchema = Yup.mixed();
                            if (field.required) {
                                fieldSchema = fieldSchema.required(`${field.label} is required`);
                            }
                            // File size validation (if specified in field options)
                            if (field.options?.max_size) {
                                fieldSchema = fieldSchema.test(
                                    'fileSize',
                                    `File size must be less than ${field.options.max_size}MB`,
                                    value => !value || (value && value.size <= field.options.max_size * 1024 * 1024)
                                );
                            }
                            // File type validation
                            if (field.options?.accept) {
                                const acceptedTypes = field.options.accept.split(',').map(type => type.trim());
                                fieldSchema = fieldSchema.test(
                                    'fileType',
                                    `File type must be one of: ${acceptedTypes.join(', ')}`,
                                    value => !value || acceptedTypes.some(type =>
                                        type === '*' || value.type.includes(type.replace('*', ''))
                                    )
                                );
                            }
                            break;
                        case 'textarea':
                        case 'text':
                        default:
                            fieldSchema = Yup.string();
                            break;
                    }

                    // Add common validations
                    if (field.required && field.type !== 'checkbox' && field.type !== 'file') {
                        fieldSchema = fieldSchema.required(`${field.label} is required`);
                    }

                    // Length validations
                    if (field.min_length && (field.type === 'text' || field.type === 'textarea')) {
                        fieldSchema = fieldSchema.min(field.min_length, `${field.label} must be at least ${field.min_length} characters`);
                    }
                    if (field.max_length && (field.type === 'text' || field.type === 'textarea')) {
                        fieldSchema = fieldSchema.max(field.max_length, `${field.label} must be no more than ${field.max_length} characters`);
                    }

                    schemaFields[field.name] = fieldSchema;
                });

                return Yup.object().shape(schemaFields);
            };

    React.useEffect(() => {
        // Fetch form configuration
        axios.get('/api/v1/form/product-form')
            .then(response => {
                console.log(response.data);
                setForm(response.data.form);

                  // Create validation schema
                const schema = createValidationSchema(response.data.fields);
                setValidationSchema(schema);

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

       const validateField = async (fieldName, value) => {
        if (!validationSchema) return;

        try {
            await validationSchema.validateAt(fieldName, { [fieldName]: value });
            // Clear error if validation passes
            setErrors(prev => ({
                ...prev,
                [fieldName]: null
            }));
        } catch (error) {
            // Set error if validation fails
            setErrors(prev => ({
                ...prev,
                [fieldName]: error.message
            }));
        }
    };

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
          // Validate field on change
        validateField(fieldName, value);
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
          // Validate field on change
        validateField(fieldName, value);
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
          // Validate field on change
        validateField(fieldName, value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrors({});

        try {
            //ignore validation on field_product
                // Validate entire form with Yup
            if (validationSchema) {
                // Exclude the product field from validation
                // Prepare data for validation (including files)
                const dataToValidate = { ...formData };
                Object.keys(files).forEach(key => {
                    if (files[key]) {
                        dataToValidate[key] = files[key];
                    }
                });

                await validationSchema.validate(dataToValidate, { abortEarly: false });
            }

            // Create FormData for file uploads
            const submitData = new FormData();
            console.log(formData);
            formData["field_product"] =product;
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
            // const response = await axios.post(`/api/v1/form/${form.slug}/submit`, submitData, {
            //     headers: {
            //         'Content-Type': 'multipart/form-data',
            //     },
            // });
              const response = router.post(route('client.submit.form', form.slug), submitData,  {
                            preserveScroll: true,
                            preserveState: true,
                            headers: {
                                'Content-Type': 'multipart/form-data',
                            },
                        })


            // Handle success
            // alert(form.success_message || 'Form submitted successfully!');

            // Reset form
              let initialData = {};

            form.fields.forEach(field => {
                if (field.type === 'radio' && field.options) {
                    const previousSelectedValue = tabStates?.[field.name];
                    const selectedOption = field.options?.[previousSelectedValue] || '';
                    initialData[field.name] = selectedOption;
                } else if (field.type === 'checkbox' && field.options) {
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

             if (error.name === 'ValidationError') {
                // Handle Yup validation errors
                const validationErrors = {};
                error.inner.forEach(err => {
                    validationErrors[err.path] = err.message;
                });
                setErrors(validationErrors);
            } else {
                // Handle server errors
                // if (window.grecaptcha && recaptchaWidgetId !== null) {
                //     window.grecaptcha.reset(recaptchaWidgetId);
                // }
                if (error.response && error.response.data && error.response.data.errors) {
                    setErrors(error.response.data.errors);
                } else {
                    alert('There was an error submitting the form. Please try again.');
                }
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

            case 'tel':
                return (
                    <div key={field.id} className={field.width === 'half' ? 'w-full md:w-[45%]' : 'w-full'}>
                        <PhoneInput
                            id={fieldId}
                            international
                            countryCallingCodeEditable={false}
                            defaultCountry="PK"
                            value={fieldValue}
                            onChange={(value) => handleInputChange(field.name, value || '')}
                            placeholder={field.placeholder || field.label}
                            className={`phone-input ${errorClasses}`}
                            style={{
                                '--PhoneInput-color': '#ffffff',
                                '--PhoneInputInternationalIconPhone-opacity': '0.8',
                                '--PhoneInputInternationalIconGlobe-opacity': '0.65',
                                '--PhoneInputCountrySelect-marginRight': '0.5rem',
                                '--PhoneInputCountrySelectArrow-width': '0.3rem',
                                '--PhoneInputCountrySelectArrow-marginLeft': '0.5rem',
                                'border-bottom': '1px solid #91a7ba',
                            }}
                            numberInputProps={{
                                className: `w-full bg-transparent text-white placeholder-gray-400 border-0 outline-none ${errorClasses}`,
                                style: {
                                    background: 'transparent',
                                    border: 'none',
                                    outline: 'none',
                                    color: 'white',
                                    fontSize: '16px',
                                }
                            }}
                            countrySelectProps={{
                                className: 'bg-transparent text-black',
                                style: {
                                    background: 'transparent',
                                    border: 'none',
                                    outline: 'none',
                                    color: 'white',
                                }
                            }}
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
