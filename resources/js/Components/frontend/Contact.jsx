import { router } from '@inertiajs/react';
import axios from 'axios';
import React, { useEffect } from 'react'
import * as Yup from 'yup';

function Contact() {
     const [isExpanded, setIsExpanded] = React.useState(false);
    const [form, setForm] = React.useState(null);
    const [formData, setFormData] = React.useState({});
    const [files, setFiles] = React.useState({});
    const [loading, setLoading] = React.useState(false);
    const [errors, setErrors] = React.useState({});
    const [isSubmitting, setIsSubmitting] = React.useState(false);
        const [recaptchaLoaded, setRecaptchaLoaded] = React.useState(false);
    const [recaptchaWidgetId, setRecaptchaWidgetId] = React.useState(null);
const [validationSchema, setValidationSchema] = React.useState(null);
    // Load reCAPTCHA v2 script
    // useEffect(() => {
    //     // Check if reCAPTCHA is already loaded
    //     // if (window.grecaptcha) {
    //     //     setRecaptchaLoaded(true);
    //     //     return;
    //     // }

    //     const script = document.createElement('script');
    //     script.src = 'https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit';
    //     script.async = true;
    //     script.defer = true;

    //     // Define global callback for reCAPTCHA load
    //     window.onRecaptchaLoad = () => {
    //         setRecaptchaLoaded(true);
    //     };

    //     document.head.appendChild(script);

    //     return () => {
    //         // Cleanup
    //         // if (document.head.contains(script)) {
    //         //     document.head.removeChild(script);
    //         // }
    //         // delete window.onRecaptchaLoad;
    //     };
    // }, []);

    // Render reCAPTCHA when loaded and form is expanded
    // useEffect(() => {
    //     if ( window.grecaptcha) {
    //         // Clear the container first
    //         const container = document.getElementById('recaptcha-container');
    //         // if (container) {
    //         //     container.innerHTML = '';
    //         // }

    //         // Reset the widget ID
    //         // if (recaptchaWidgetId !== null) {
    //         //     setRecaptchaWidgetId(null);
    //         // }

    //         // Small delay to ensure container is cleared
    //         const timer = setTimeout(() => {
    //             try {
    //                 const widgetId = window.grecaptcha.render('recaptcha-container', {
    //                     'sitekey': import.meta.env.VITE_GOOGLE_RECAPTCHA_SITE_KEY,
    //                     'callback': (response) => {
    //                         console.log('reCAPTCHA completed:', response);
    //                     },
    //                     'expired-callback': () => {
    //                         console.log('reCAPTCHA expired');
    //                     },
    //                     'error-callback': () => {
    //                         console.log('reCAPTCHA error');
    //                     }
    //                 });
    //                 setRecaptchaWidgetId(widgetId);
    //             } catch (error) {
    //                 console.error('Error rendering reCAPTCHA:', error);
    //             }
    //         }, 100);

    //         return () => {
    //             clearTimeout(timer);
    //         };
    //     }

    //     // Cleanup when form is collapsed
    //     if (!isExpanded && recaptchaWidgetId !== null) {
    //         const container = document.getElementById('recaptcha-container');
    //         if (container) {
    //             container.innerHTML = '';
    //         }
    //         setRecaptchaWidgetId(null);
    //     }
    // }, [recaptchaLoaded, isExpanded]);

        // Cleanup reCAPTCHA on component unmount
    // useEffect(() => {
    //     return () => {
    //         if (recaptchaWidgetId !== null) {
    //             const container = document.getElementById('recaptcha-container');
    //             if (container) {
    //                 container.innerHTML = '';
    //             }
    //         }
    //     };
    // }, []);

    // Create Yup validation schema based on form fields
    const createValidationSchema = (fields) => {
        const schemaFields = {};

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
                    fieldSchema = Yup.string().matches(
                        /^[\+]?[1-9][\d]{0,15}$/,
                        'Please enter a valid phone number'
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
        axios.get('/api/v1/form/contact')
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

      // Validate single field
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
            // Validate entire form with Yup
            if (validationSchema) {
                // Prepare data for validation (including files)
                const dataToValidate = { ...formData };
                Object.keys(files).forEach(key => {
                    if (files[key]) {
                        dataToValidate[key] = files[key];
                    }
                });

                await validationSchema.validate(dataToValidate, { abortEarly: false });
            }
              // Get reCAPTCHA response
            // let recaptchaResponse = '';
            // if (window.grecaptcha && recaptchaWidgetId !== null) {
            //     recaptchaResponse = window.grecaptcha.getResponse(recaptchaWidgetId);
            // }

            // if (!recaptchaResponse) {
            //     setErrors({
            //         'g-recaptcha-response': ['Please complete the reCAPTCHA verification.']
            //     });
            //     setIsSubmitting(false);
            //     return;
            // }

            // Create FormData for file uploads
            const submitData = new FormData();

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
            //form.client.submit

            // Add reCAPTCHA response
            // submitData.append('g-recaptcha-response', recaptchaResponse);

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

            // Reset reCAPTCHA
            // if (window.grecaptcha && recaptchaWidgetId !== null) {
            //     window.grecaptcha.reset(recaptchaWidgetId);
            // }

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
            // if (window.grecaptcha && recaptchaWidgetId !== null) {
            //     window.grecaptcha.reset(recaptchaWidgetId);
            // }

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
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-700 pb-6 gap-4">
                    {/* Left Text */}
                    <p className="text-[25px] md:text-[50px] fc-primary mb-0">
                        Stay Ahead. Stay Relevant.
                    </p>

                    {/* Right 'Let's Talk' with Icon */}
                    <div
                        className="text-color-hover flex items-center cursor-pointer"
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                        <h2 className="text-[40px] md:text-[80px] font-[400] fc-primary mr-4 md:mr-6 leading-none">
                            let's talk
                        </h2>
                        <div
                            className={`w-14 h-14 md:w-20 md:h-20 rounded-full svg-icon-footer flex items-center justify-center transition-transform duration-300 ${
                                isExpanded ? 'rotate-180' : ''
                            }`}
                            onClick={()=>{

                               //after 2 sec scroll down
                               setTimeout(() => {
                                    const contactForm = document.getElementById('contact-form');
                                    if (contactForm) {
                                        contactForm.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }, 300);


                            }}
                        >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-8 h-8 md:w-10 md:h-12 text-black"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                        </div>
                    </div>
                </div>

                {/* Expandable Box with Smooth Animation */}
                <div id='contact-form'
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        isExpanded ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6 transform transition-transform duration-500 ease-in-out">
                        <div className='row m-0'>
                            <p className="text-[30px] fc-secondary mb-0 p-0">Start a Conversation</p>
                            <div className="mt-4 col-md-6 p-0">
                                <p className="text-[20px] fc-primary mb-0">Email:</p>
                                <a
                                    href="mailto:info@thedesignfirm.com"
                                    className="inline-block text-[16px] fc-primary mb-0 border-b-2 border-transparent hover:border-current transition-all duration-200"
                                >
                                    info@thedesignfirm.com
                                </a>
                            </div>

                            <div className="mt-4 col-md-6  p-0" >
                                <p className="text-[20px] fc-primary mb-0">Contact:</p>
                                <a className="inline-block text-[16px] fc-primary mb-0 border-b-2 border-transparent hover:border-current transition-all duration-200" href='tel:+923030808833'>PAK: +92 303 080 8833</a><br />
                                <a className="inline-block text-[16px] fc-primary mb-0 border-b-2 border-transparent hover:border-current transition-all duration-200" href='tel:+966543435768'>KSA: +966 54 343 5768</a><br />
                                <a className="inline-block text-[16px] fc-primary mb-0 border-b-2 border-transparent hover:border-current transition-all duration-200" href='tel:+12393565070'>USA: +1 239 356 5070</a>
                            </div>
                            {/* <div className="mt-4  p-0">
                                <p className="text-[20px] fc-primary mb-0">Pakistan:</p>
                                <a className="inline-block text-[16px] fc-primary mb-0 border-b-2 border-transparent hover:border-current transition-all duration-200" href='tel:+92 303 080 8833'>+92 303 080 8833</a>
                            </div> */}
                        </div>

                        {/* Dynamic Form */}
                    {form && form.fields && (
                        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row md:flex-wrap gap-4 text-white justify-between">
                            {form.fields.map((field) => renderField(field))}

                              {/* reCAPTCHA v2 Checkbox */}
                            {/* <div className="w-full">
                                <div id="recaptcha-container" className="flex justify-start"></div>
                                {errors['g-recaptcha-response'] && (
                                    <p className="text-red-500 text-sm mt-2">
                                        {Array.isArray(errors['g-recaptcha-response'])
                                            ? errors['g-recaptcha-response'][0]
                                            : errors['g-recaptcha-response']
                                        }
                                    </p>
                                )}
                            </div> */}


                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="group flex items-center gap-2 bg-transparent border-none fc-primary transition-colors duration-300 text-lg font-medium cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Submitting...' : (form.submit_button_text || 'Submit')}
                                <span className="fc-purple group-hover:translate-x-1 transition-transform">→</span>
                            </button>
                        </form>
                    )}

                    {/* Loading state */}
                    {!form && (
                        <div className="flex items-center justify-center text-white">
                            <p>Loading form...</p>
                        </div>
                    )}
                    </div>
                </div>
   </>
  )
}

export default Contact
