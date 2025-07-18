'use client'

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    inquiryType: '',
    propertyType: '',
    preferredLocation: '',
    budget: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    let newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required';
    } else if (!/^\+?[0-9]{10,15}$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number';
    }
    if (!formData.inquiryType) newErrors.inquiryType = 'Please select an inquiry type';
    if (!formData.propertyType) newErrors.propertyType = 'Please select a property type';
    if (!formData.preferredLocation.trim()) newErrors.preferredLocation = 'Preferred Location is required';
    if (!formData.budget.trim()) newErrors.budget = 'Budget is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: undefined,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await new Promise((resolve) => setTimeout(() => {
        console.log('Form Data Submitted:', formData); // Log updated form data
        resolve({ success: true });
      }, 1000));

      if (response.success) {
        setShowSuccessPopup(true);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          inquiryType: '',
          propertyType: '',
          preferredLocation: '',
          budget: '',
          message: '',
        });
      } else {
        setErrors({ submit: 'Something went wrong. Please try again.' });
      }
    } catch (err) {
      setErrors({ submit: err.message || 'An unexpected error occurred.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const closePopup = () => {
    setShowSuccessPopup(false);
  };

  return (
    <section className="py-12 px-4 max-w-3xl mx-auto w-full">
      <form onSubmit={handleSubmit} className="bg-black/70 p-8 rounded-xl shadow-lg flex flex-col space-y-6">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Send Us Your Inquiry</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="fullName" className="block text-gray-300 text-sm font-bold mb-2">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="shadow appearance-none border border-gray-700 rounded w-full py-3 px-4 text-white leading-tight focus:outline-none focus:shadow-outline bg-black/60 placeholder-gray-400"
              aria-invalid={errors.fullName ? "true" : "false"}
              aria-describedby="fullName-error"
            />
            {errors.fullName && <p id="fullName-error" className="text-red-400 text-xs italic mt-1">{errors.fullName}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-300 text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="shadow appearance-none border border-gray-700 rounded w-full py-3 px-4 text-white leading-tight focus:outline-none focus:shadow-outline bg-black/60 placeholder-gray-400"
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby="email-error"
            />
            {errors.email && <p id="email-error" className="text-red-400 text-xs italic mt-1">{errors.email}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="block text-gray-300 text-sm font-bold mb-2">Phone Number</label>
          <input
            type="tel" // Use tel type for phone numbers
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="shadow appearance-none border border-gray-700 rounded w-full py-3 px-4 text-white leading-tight focus:outline-none focus:shadow-outline bg-black/60 placeholder-gray-400"
            aria-invalid={errors.phone ? "true" : "false"}
            aria-describedby="phone-error"
          />
          {errors.phone && <p id="phone-error" className="text-red-400 text-xs italic mt-1">{errors.phone}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="inquiryType" className="block text-gray-300 text-sm font-bold mb-2">Inquiry Type</label>
            <select
              id="inquiryType"
              name="inquiryType"
              value={formData.inquiryType}
              onChange={handleChange}
              required
              className="shadow appearance-none border border-gray-700 rounded w-full py-3 px-4 text-white leading-tight focus:outline-none focus:shadow-outline bg-black/60 placeholder-gray-400 pr-8"
              aria-invalid={errors.inquiryType ? "true" : "false"}
              aria-describedby="inquiryType-error"
            >
              <option value="">Select an Option</option>
              <option value="buying">Buying Property</option>
              <option value="selling">Selling Property</option>
              <option value="renting">Renting Property</option>
              <option value="general">General Inquiry</option>
            </select>
            {errors.inquiryType && <p id="inquiryType-error" className="text-red-400 text-xs italic mt-1">{errors.inquiryType}</p>}
          </div>
          <div>
            <label htmlFor="propertyType" className="block text-gray-300 text-sm font-bold mb-2">Property Type</label>
            <select
              id="propertyType"
              name="propertyType"
              value={formData.propertyType}
              onChange={handleChange}
              required
              className="shadow appearance-none border border-gray-700 rounded w-full py-3 px-4 text-white leading-tight focus:outline-none focus:shadow-outline bg-black/60 placeholder-gray-400 pr-8"
              aria-invalid={errors.propertyType ? "true" : "false"}
              aria-describedby="propertyType-error"
            >
              <option value="">Select a Type</option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="villa">Villa</option>
              <option value="land">Land</option>
              <option value="office">Office</option>
              <option value="other">Other</option>
            </select>
            {errors.propertyType && <p id="propertyType-error" className="text-red-400 text-xs italic mt-1">{errors.propertyType}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="preferredLocation" className="block text-gray-300 text-sm font-bold mb-2">Preferred Location</label>
            <input
              type="text"
              id="preferredLocation"
              name="preferredLocation"
              value={formData.preferredLocation}
              onChange={handleChange}
              required
              className="shadow appearance-none border border-gray-700 rounded w-full py-3 px-4 text-white leading-tight focus:outline-none focus:shadow-outline bg-black/60 placeholder-gray-400"
              aria-invalid={errors.preferredLocation ? "true" : "false"}
              aria-describedby="preferredLocation-error"
            />
            {errors.preferredLocation && <p id="preferredLocation-error" className="text-red-400 text-xs italic mt-1">{errors.preferredLocation}</p>}
          </div>
          <div>
            <label htmlFor="budget" className="block text-gray-300 text-sm font-bold mb-2">Budget (e.g., $500,000 - $1,000,000)</label>
            <input
              type="text"
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              required
              className="shadow appearance-none border border-gray-700 rounded w-full py-3 px-4 text-white leading-tight focus:outline-none focus:shadow-outline bg-black/60 placeholder-gray-400"
              aria-invalid={errors.budget ? "true" : "false"}
              aria-describedby="budget-error"
            />
            {errors.budget && <p id="budget-error" className="text-red-400 text-xs italic mt-1">{errors.budget}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-gray-300 text-sm font-bold mb-2">Your Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="shadow appearance-none border border-gray-700 rounded w-full py-3 px-4 text-white leading-tight focus:outline-none focus:shadow-outline bg-black/60 placeholder-gray-400 resize-none"
            aria-invalid={errors.message ? "true" : "false"}
            aria-describedby="message-error"
          ></textarea>
          {errors.message && <p id="message-error" className="text-red-400 text-xs italic mt-1">{errors.message}</p>}
        </div>

        {errors.submit && <p className="text-red-400 text-sm text-center">{errors.submit}</p>}

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      {showSuccessPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 animate-fadeIn">
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
            <h3 className="mt-5 text-2xl font-semibold text-gray-900">Inquiry Sent!</h3>
            <p className="mt-2 text-gray-600">Your message has been sent successfully. We will get back to you shortly.</p>
            <button
              onClick={closePopup}
              className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Got It!
            </button>
          </div>
        </div>
      )}
    </section>
  );
} 