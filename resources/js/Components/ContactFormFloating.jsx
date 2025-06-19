import { useState } from 'react';

export default function ContactFormFloating({ initialOpen = false }) {
    const [isOpen, setIsOpen] = useState(initialOpen);
    const [data, setData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [processing, setProcessing] = useState(false);
    const [errors, setErrors] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);
        
        // Simulate form submission
        setTimeout(() => {
            setProcessing(false);
            setData({ name: '', email: '', phone: '', message: '' });
            setIsOpen(false);
        }, 1500);
    };

    const handleInputChange = (field, value) => {
        setData(prev => ({ ...prev, [field]: value }));
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: '' }));
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {isOpen ? (
                <div className="bg-white rounded-xl shadow-lg w-72 max-w-[calc(100vw-2rem)] overflow-hidden transform transition-all duration-300 ease-out">
                    {/* Header */}
                    <div 
                        className="text-white p-4 relative overflow-hidden"
                        style={{ backgroundColor: '#9BE500' }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                        <div className="relative flex justify-between items-center">
                            <div>
                                <h3 className="font-bold text-lg">Feedback</h3>
                                {/* <p className="text-white/90 text-xs mt-0.5">Quick message</p> */}
                            </div>
                            <button 
                                onClick={() => setIsOpen(false)}
                                className="text-white/80 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    
                    <div className="p-4 space-y-3">
                        <div>
                            <label htmlFor="name" className="block text-xs font-semibold text-gray-800 mb-1">
                                Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                value={data.name}
                                onChange={(e) => handleInputChange('name', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white text-gray-800 text-sm"
                                style={{ '--tw-ring-color': '#9BE500' }}
                                required
                            />
                            {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-xs font-semibold text-gray-800 mb-1">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={data.email}
                                onChange={(e) => handleInputChange('email', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white text-gray-800 text-sm"
                                style={{ '--tw-ring-color': '#9BE500' }}
                                required
                            />
                            {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-xs font-semibold text-gray-800 mb-1">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows="3"
                                value={data.message}
                                onChange={(e) => handleInputChange('message', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white text-gray-800 resize-none text-sm"
                                style={{ '--tw-ring-color': '#9BE500' }}
                                placeholder="Your message..."
                                required
                            ></textarea>
                            {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                        </div>

                        <button
                            type="submit"
                            onClick={handleSubmit}
                            disabled={processing}
                            className="w-full text-white py-3 px-4 rounded-lg font-semibold focus:outline-none focus:ring-3 focus:ring-opacity-50 disabled:opacity-70 transition-all duration-200 transform hover:scale-[1.02] disabled:hover:scale-100 shadow-md hover:shadow-lg text-sm"
                            style={{ 
                                backgroundColor: '#9BE500',
                                '--tw-ring-color': '#9BE500'
                            }}
                        >
                            {processing ? (
                                <div className="flex items-center justify-center">
                                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Sending...
                                </div>
                            ) : (
                                <div className="flex items-center justify-center">
                                    Send Message
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                    </svg>
                                </div>
                            )}
                        </button>
                    </div>
                </div>
            ) : (
                <button
                    onClick={() => setIsOpen(true)}
                    className="text-white p-4 rounded-full shadow-lg focus:outline-none focus:ring-3 focus:ring-opacity-50 transition-all duration-200 transform hover:scale-110 group relative overflow-hidden"
                    style={{ 
                        backgroundColor: '#9BE500',
                        '--tw-ring-color': '#9BE500'
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                    
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none"
  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
  viewBox="0 0 24 24">
  <path d="M7 10v12H3V10h4z"/>
  <path d="M21 10c0-1.1-.9-2-2-2h-5.2l.7-3.4.1-.5c0-.8-.3-1.6-.9-2.1L13 2 7 9v12h10.1c1 0 1.8-.7 2-1.6l1.5-7c.1-.2.1-.5.1-.7z"/>
</svg>



                    
                    {/* Floating notification dot */}
                    <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-400 rounded-full animate-pulse"></div>
                </button>
            )}
        </div>
    );
}