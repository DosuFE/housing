import ContactForm from "../components/contactForm"; // Import the new ContactForm

export default function Contact(){
    return(
        <main className="min-h-screen bg-gray-50 flex flex-col items-center ">
            <div className="max-w-3xl mx-auto text-center mb-12">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
                    Get In Touch
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                    Whether you're looking to buy, sell, or just have a question, we're here to help. 
                    Reach out to us and let's start a conversation!
                </p>
            </div>

            {/* Contact Information Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full mb-16">
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Location</h3>
                    <p className="text-gray-600">123 Real Estate Ave, Cityville, State 12345</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Call Us</h3>
                    <p className="text-gray-600">+1 (234) 567-8900</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Email Us</h3>
                    <p className="text-gray-600">info@westonestate.com</p>
                </div>
            </div>

            {/* Using the new ContactForm component */}
            <div className="banner w-full flex justify-center">
                <ContactForm/> 
            </div>
        </main>
    )
}