import React from 'react'

function Contact() {
    const [isExpanded, setIsExpanded] = React.useState(false);
  return (
   <>
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-700 pb-6 gap-4">
                    {/* Left Text */}
                    <p className="text-[18px] md:text-[22px] fc-primary mb-0">
                        Stay Ahead. Stay Relevant...
                    </p>

                    {/* Right 'Let's Talk' with Icon */}
                    <div
                        className="flex items-center cursor-pointer"
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                        <h2 className="text-[40px] md:text-[80px] font-[400] fc-primary mr-4 md:mr-6 leading-none">
                        let's talk
                        </h2>
                        <div
                        className={`w-14 h-14 md:w-20 md:h-20 rounded-full svg-icon-footer flex items-center justify-center transition-transform duration-300 ${
                            isExpanded ? 'rotate-180' : ''
                        }`}
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
                <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        isExpanded ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6 transform transition-transform duration-500 ease-in-out">
                        <div className='row m-0'>
                            <p className="text-[22px] fc-primary mb-0  p-0">Start a Conversation</p>
                            <div className="mt-4 col-md-6 p-0">
                                <p className="text-[22px] fc-primary mb-0">Email:</p>
                                <a
                                    href="mailto:info@thedesignfirm.com"
                                    className="inline-block text-[18px] fc-primary mb-0 border-b-2 border-transparent hover:border-current transition-all duration-200"
                                >
                                    info@thedesignfirm.com
                                </a>
                            </div>

                            <div className="mt-4 col-md-6  p-0" >
                                <p className="text-[22px] fc-primary mb-0">USA:</p>
                                <a className="inline-block text-[18px] fc-primary mb-0 border-b-2 border-transparent hover:border-current transition-all duration-200" href='tel:+12393565070'>+12393565070</a>
                            </div>
                            <div className="mt-4  p-0">
                                <p className="text-[22px] fc-primary mb-0">Pakistan:</p>
                                <a className="inline-block text-[18px] fc-primary mb-0 border-b-2 border-transparent hover:border-current transition-all duration-200" href='tel:+92 303 080 8833'>+92 303 080 8833</a>
                            </div>
                        </div>

                        <form className="flex flex-col md:flex-row md:flex-wrap gap-4 text-white justify-between">
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full md:w-[45%] "
                            />
                            <input
                                type="tel"
                                placeholder="Phone"
                                className="w-full md:w-[45%]"
                            />
                            <textarea
                                placeholder="Message"
                                rows="4"
                                className="w-full"
                            ></textarea>
                            <button type="button" className="group flex items-center gap-2 bg-transparent border-none fc-primary transition-colors duration-300 text-lg font-medium cursor-pointer">Submit<span className="fc-purple group-hover:translate-x-1 transition-transform">→</span></button>
                        </form>
                    </div>
                </div>
   </>
  )
}

export default Contact
