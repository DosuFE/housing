'use client'
import { useState } from 'react';
import Link from 'next/link';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      console.log('Subscribing email:', email);
      // In a real application, send email to a backend/newsletter service
      setSubscribed(true);
      setEmail(''); // Clear email field
      setTimeout(() => setSubscribed(false), 5000); // Hide message after 5 seconds
    }
  };

  return (
    <footer className="bg-black text-white py-12 px-5 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 md:gap-x-8 lg:gap-x-12">
        {/* Company Info */}
        <div className="col-span-full md:col-span-2 lg:col-span-1">
          <Link href='/'>
            <p className='logo italic text-3xl font-bold'>WESTON</p>
          </Link>
          <p className="text-base pt-4 leading-relaxed text-gray-400">
            Your trusted partner in finding the perfect home. We offer a wide range 
            of properties and expert guidance to make your real estate journey seamless.
          </p>
        </div>

        {/* Quick Links & Contact Info Group */}
        <div className="col-span-full md:col-span-2 lg:col-span-2 grid grid-cols-2 gap-x-8">
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-5">Quick Links</h4>
            <ul className="space-y-3 text-base font-normal">
              <li><Link href="/" className="hover:text-sky-400 transition">Home</Link></li>
              <li><Link href="/properties" className="hover:text-sky-400 transition">Properties</Link></li>
              <li><Link href="/about" className="hover:text-sky-400 transition">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-sky-400 transition">Contact</Link></li>
              <li><Link href="/blog" className="hover:text-sky-400 transition">Blog</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-5">Contact Us</h4>
            <ul className="space-y-3 text-base font-normal">
              <li><a href="tel:+1234567890" className="hover:text-sky-400 transition">+1 (234) 567-890</a></li>
              <li><a href="mailto:sulaimondosu988@gmail.com" className="hover:text-sky-400 transition">info@housingestate.com</a></li>
              <li><span className="block">123 Real Estate Blvd,</span> City, Country</li>
            </ul>
          </div>
        </div>

        {/* Subscribe Newsletter */}
        <div className="col-span-full md:col-span-2 lg:col-span-1">
          <h4 className="text-xl font-semibold text-white mb-5">Subscribe to Our Newsletter</h4>
          <p className="text-sm text-gray-400 mb-4">Stay updated with our latest properties and news.</p>
          <form onSubmit={handleSubscribe} className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
            <button
              type="submit"
              className="w-full bg-sky-600 text-white py-2.5 rounded-md font-semibold hover:bg-sky-700 transition"
            >
              Subscribe
            </button>
            {subscribed && (
              <p className="text-green-400 text-sm mt-2">Subscribed successfully!</p>
            )}
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-base text-gray-400">
        <p>&copy; {new Date().getFullYear()} Housing Estate. All rights reserved.</p>
      </div>
    </footer>
  );
}