'use client'
import { useState } from 'react';

export default function Form() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        subject: '',
        message: '',
    });
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real application, you would send this data to a backend
        console.log('Form Data Submitted:', formData);

        // Simulate successful submission
        setShowSuccessPopup(true);
        setFormData({ fullName: '', email: '', subject: '', message: '' }); // Clear form
    };

    const closePopup = () => {
        setShowSuccessPopup(false);
    };

    return(
        <section className="py-12 px-4 max-w-lg mx-auto">
            <form onSubmit={handleSubmit} className="bg-black/50 gap-y-4 py-7 px-5 rounded-xl flex flex-col items-center justify-center">
                {/* FULL NAME */}
                <input 
                    type="text" 
                    placeholder="Full Name" 
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="text-white text-lg leading-10
                    bg-white/20 py-1 px-3 placeholder:text-white 
                    placeholder:opacity-70 
                    w-[400px] outline-none active:outline-none focus:outline-none
                    cursor-pointer"
                />
                {/* EMAIL */}
                <input 
                    type="email" 
                    placeholder="Your Email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="text-white text-lg leading-10
                    bg-white/20 py-1 px-3 placeholder:text-white 
                    placeholder:opacity-70 
                    w-[400px] outline-none active:outline-none focus:outline-none
                    cursor-pointer"
                />
                {/* SUBJECT */}
                <input 
                    type="text" 
                    placeholder="Subject" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="text-white text-lg leading-10
                    bg-white/20 py-1 px-3 placeholder:text-white 
                    placeholder:opacity-70 
                    w-[400px] outline-none active:outline-none focus:outline-none
                    cursor-pointer"
                />
                {/* TEXTAREA */}
                <textarea 
                    placeholder="Message"
                    rows="2"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="text-white text-lg leading-10
                    bg-white/20 py-1 px-3 placeholder:text-white 
                    placeholder:opacity-70 
                    w-[400px] outline-none active:outline-none focus:outline-none
                    cursor-pointer"
                />
                {/* SUBMIT */}
                <button type="submit"
                 className="bg-transparent border-2 border-white text-white text-lg leading-12
                 py-2 px-4 hover:bg-white/20 transition-colors duration-300
                 w-[400px] cursor-pointer active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/50
                ">
                    SUBMIT
                </button>
            </form>

            {showSuccessPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fadeIn">
                    <div className="bg-white p-8 rounded-lg shadow-2xl text-center max-w-sm w-full relative transform scale-100 transition-transform duration-300 popup-scale-up">
                        <button
                            onClick={closePopup}
                            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-2xl font-semibold leading-none"
                            aria-label="Close success message"
                        >
                            &times;
                        </button>
                        <svg className="mx-auto h-16 w-16 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <h3 className="mt-5 text-2xl font-semibold text-gray-900">Success!</h3>
                        <p className="mt-2 text-gray-600">Your message has been sent successfully. We will get back to you shortly.</p>
                        <button
                            onClick={closePopup}
                            className="mt-6 px-6 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-700 transition"
                        >
                            Got It!
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}