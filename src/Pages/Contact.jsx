import React from 'react';
import useTitle from '../Hooks/useTitle';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Contact = () => {
    useTitle("Contact Us");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Contact form submitted!");
        e.target.reset();
        toast("Your message has been sent successfully!");
    };

    return (
        <div className="bg-[#0F172A] text-white py-12 px-4 min-h-[calc(100vh-200px)]">
            <div className="w-11/12 mx-auto">
                
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#7C3AED]">
                    Get In Touch
                </h1>
                <p className="text-center text-gray-400 max-w-3xl mx-auto mb-12">
                    Do you have any questions, feedback, or business inquiries? We're here to help! Reach out to us through the form or our contact details.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="bg-[#1E293B] p-8 rounded-xl shadow-xl space-y-6 lg:col-span-1">
                        <h2 className="text-2xl font-semibold mb-6">Our Information</h2>
                        
                        <div className="flex items-start space-x-4">
                            <FaMapMarkerAlt className="text-[#7C3AED] text-2xl mt-1 flex-shrink-0" />
                            <div>
                                <p className="font-semibold">Office Address</p>
                                <p className="text-gray-400">123 Game Dev Street, Silicon Valley, CA 90210</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <FaEnvelope className="text-[#7C3AED] text-2xl mt-1 flex-shrink-0" />
                            <div>
                                <p className="font-semibold">Email Us</p>
                                <p className="text-gray-400">support@lotusplaystore.com</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <FaPhoneAlt className="text-[#7C3AED] text-2xl mt-1 flex-shrink-0" />
                            <div>
                                <p className="font-semibold">Call Us</p>
                                <p className="text-gray-400">+1 (555) 123-4567</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#1E293B] p-8 rounded-xl shadow-xl lg:col-span-2">
                        <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Your Name</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    required 
                                    className="w-full px-4 py-3 rounded-lg bg-[#0F172A] border border-[#7C3AED]/30 focus:border-[#7C3AED] outline-none text-white"
                                    placeholder="Enter your full name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Your Email</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    required 
                                    className="w-full px-4 py-3 rounded-lg bg-[#0F172A] border border-[#7C3AED]/30 focus:border-[#7C3AED] outline-none text-white"
                                    placeholder="Enter your email address"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    rows="4" 
                                    required 
                                    className="w-full px-4 py-3 rounded-lg bg-[#0F172A] border border-[#7C3AED]/30 focus:border-[#7C3AED] outline-none text-white"
                                    placeholder="Write your message here..."
                                ></textarea>
                            </div>

                            <button 
                                type="submit" 
                                className="w-full btn bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold rounded-lg transition-colors py-3"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contact;