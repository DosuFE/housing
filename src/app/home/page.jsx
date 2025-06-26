
import Link from 'next/link';
import Property from '../../../public/assets/estate-property.jpg';
import Scrapper from '../../../public/assets/scrapper_office.jpg'
import Image from 'next/image';
import CarouselSlider from '../components/carouselSlider';
import ImageProperty from '../components/imageProperty';
import ClientReview from '../components/clientsReview';
import Blog from '../components/blog';
import FooterForm from '../components/footerForm';

export default function Home(){
    const houses = [
        {
           id: 1,
           name: 'Living House',
           image: '/assets/living_house.jpg'
        },
        {
            id: 2,
            name: 'House Villa',
            image: '/assets/house_villa.jpg'
        },
        {
            id: 3,
            name: 'Office Floor',
            image: '/assets/office_floor.jpg'
        },
        {
            id: 4,
            name: 'House Apartment',
            image: '/assets/house_apartment.jpg'
        }
    ]
    return(
        <>
            <main className="flex flex-col items-center md:px-0 md:pl-10 md:justify-center md:flex-row-reverse">
                <div className="hero-video-effect w-full xl:w-1/2">
                <Image 
                    src={Property} 
                    alt="Image Property"
                    className='w-full'
                />
                </div>

                <div className='flex flex-col items-center justify-center md:items-start md:justify-start'>
                    <h1 
                        className='text-4xl text-center font-medium mt-10
                        text-gray-800 tracking-[1px] leading-10 
                        lg:tracking-wider lg:leading-16 sm:px-10 md:px-0
                        md:text-start lg:text-6xl
                    '>
                        Trusted Real Estate Property for you
                    </h1>
                    <p  
                        className='text-center text-gray-700 mt-5 px-5 sm:px-10 leading-7 
                        tracking-wide md:text-start md:px-0 lg:text-lg lg:max-w-4/5
                    '>
                        Looking for your dream house or property. 
                        Search here and select your best one from more than 1 million listing.
                    </p>

                    
                    <div className='flex items-center justify-center gap-4 mt-5 md:justify-start'>
                        <Link
                            href="/properties" 
                            className='bg-black/10 px-4 py-2 tracking-wide 
                            text-gray-800 font-semibold rounded-lg
                            hover:bg-sky-100
                            hover:transition hover:duration-500'
                        >
                         Explore Properties
                        </Link>
                        <Link
                            href="/properties" 
                            className='bg-transparent px-4 py-2 tracking-wide 
                            text-gray-800 font-semibold rounded-lg border
                            hover:bg-sky-100 hover:border-2 hover:border-sky-100
                            hover:transition hover:duration-500'
                        >
                            Learn More
                        </Link>
                    </div>

                    <div className='sub_container mt-10 md:mt-5 lg:mt-10 rounded-md'>
                        <div className='flex items-center mx-1 py-3 gap-2 sm:gap-5 sm:mx-3 sm:px-5
                        md:mx-0 lg:px-10 lg:py-5 md:px-2
                        '>
                        <div className='flex flex-col items-center justify-center'>
                            <p className=' tracking-wide font-semibold'>35+</p>
                            <p className='tracking-wide uppercase text-[10px]'>Years in Business</p>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <p className='tracking-wide font-semibold'>200+M</p>
                            <p className='tracking-wide uppercase text-[10px]'>Deal VOLUME IN PAST 12 MONTHS</p>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <p className=' tracking-wide font-semibold'>$1B+</p>
                            <p className='tracking-wide uppercase text-[10px]'>in total sales</p>
                        </div>       
                        </div>
                    </div>
                </div>
            </main>

            <section>
                <div className='text-center mt-10'>
                    <h2 className='text-3xl font-semibold text-gray-800 tracking-wide'>
                        What You Area Looking For?
                    </h2>
                    <p className='text-gray-700 text-lg mt-3 px-5 sm:px-10 leading-7 tracking-wide'>
                        We are committed to providing the best real estate services with a focus on customer satisfaction, integrity, and professionalism.
                    </p>
                </div>

                {/* MINI APARTMENT WITH DYNAMIC ROUTE DETAILS */}
                <article 
                    className='py-10 grid grid-cols-1 px-5 sm:px-10
                    sm:grid-cols-2 lg:grid-cols-4 gap-5
                
                '>
                    {
                        houses.map((house) => (
                            <Link href={`/home/${house.id}`} key={house.id}>
                                <div className="relative group overflow-hidden cursor-pointer">
                                    <img
                                    src={house.image}
                                    alt={house.name}
                                    className="w-full h-full object-cover transition duration-700 group-hover:brightness-50"
                                    />
                                    {/* Overlay for the name */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                                        <span className="text-white text-xl font-semibold">{house.name}</span>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </article>
            </section>

            {/* WHO WE ARE  */}
            <section>
                <div className='text-center mt-10 flex flex-col items-center justify-center'>
                    <h2 className='text-3xl font-semibold text-gray-800 tracking-wide'>
                        Who We Are?
                    </h2>
                    <p className='text-gray-700 text-lg mt-3 px-2 sm:px-10 leading-7 tracking-wider md:max-w-4/5'>
                        We are a leading real estate company with over 35 years of experience in the industry. 
                        Our team is dedicated to helping you find your dream property with integrity and 
                        professionalism. Whether you're looking to buy, sell, or rent, we have the expertise 
                        to guide you through every step of the process.
                    </p>
                </div>

                {/* WHO WE ARE IMAGE CONTENT */}
                <main 
                    className='flex flex-col items-center justify-center space-y-10
                    mt-10 lg:flex-row-reverse lg:justify-center lg:px-10 lg:mt-20 lg:gap-x-5
                    xl:gap-x-10

                '> 
                    <Image 
                        src={Scrapper} 
                        alt="Scrapper Property Environment"
                        className='w-full lg:w-1/2'
                    />
                   

                    <div className='
                        flex flex-col items-center justify-center 
                        lg:w-1/2 lg:items-start lg:justify-start
                    '>
                        <h2 
                            className='text-3xl font-semibold text-gray-800 
                            tracking-wide text-center lg:text-start
                        '>
                            MEET THE WESTON REAL ESTATE
                        </h2>

                        <p 
                            className='text-center text-gray-800 mt-5 px-5 sm:px-10 leading-7 
                            tracking-wide font-light lg:px-0 lg:text-lg lg:max-w-[90%] lg:text-start
                        '>
                            Meet the Weston Real Estate, your premier destination for personalized property solutions. 
                            Whether you're searching for the perfect family home, a cozy apartment, or a prime commercial space, 
                            we are dedicated to making your real estate dreams a reality. Our team of expert agents will 
                            guide you every step of the way, ensuring a smooth and stress-free experience. From luxury 
                            listings to affordable options, we have something for everyone. Discover your next investment 
                            with Weston Real Estate and unlock a world of possibilities. 
                            Contact us today to start your journey towards finding the perfect property.
                        </p>

                        <Link
                            href="/about" 
                            className='bg-black px-8 py-4 tracking-wide 
                            mt-5 
                            text-white uppercase
                            hover:bg-transparent hover:text-gray-800
                            hover:border-2 hover:border-gray-800
                            hover:transition hover:duration-500'
                        >
                         read more
                        </Link>
                    </div>
                </main>
            </section>

            {/* EXCLUSIVE LISTINGS WITH CAROUSEL SLIDER BY ITSELF & CONTROLLER */}
            <section>
                <div className='text-center mt-10'>
                    <h2 className='text-3xl font-semibold text-gray-800 tracking-wide'>
                        Exclusive Listings
                    </h2>
                    <p className='text-gray-700 text-lg mt-3 px-5 sm:px-10 leading-7 tracking-wide'>
                        Explore our exclusive listings and find your dream property today. 
                        Our team is here to assist you in every step of the process.
                    </p>
                </div>

                {/* Carousel Slider Component would go here */}
                {/* This is a placeholder for the carousel slider */}
                <div className='carousel-slider mt-10'>
                    <CarouselSlider/>
                
                        <div className="flex items-center justify-center lg:hidden">
                            <Link
                                href="/properties" 
                                className='bg-white px-8 py-4 tracking-wide 
                                mt-10 border-2 border-black/60  lg:hidden
                                uppercase
                                hover:bg-black hover:text-white
                                hover:transition hover:duration-500'
                            >
                              View All Properties
                            </Link>
                        </div>
                </div>
            </section>


            {/* AREA OF EXPERTISE && IMAGE LINK TO PROPERTY */}
            <section>
                <div className='text-center mt-10'>
                    <h2 className='text-3xl font-semibold text-gray-800 tracking-wide'>
                        AREA OF EXPERTISE
                    </h2>
                    <p className='text-gray-700 text-lg mt-3 px-5 sm:px-10 leading-7 tracking-wide'>
                        We are committed to providing the best real estate services with a 
                        focus on customer satisfaction, integrity, and professionalism.
                    </p>
                </div>

                <ImageProperty/>
            </section>
            
            {/* CLIENTS REVIEWS SECTION */}
            <main className='mt-10'>
                <ClientReview/>
            </main>

            {/* BLOG */}
            <section className='mt-10'>
                <div className='text-center'>
                    <h2 className='text-3xl font-semibold text-sky-800 tracking-wide estate-title'>
                        Latest Blogs
                    </h2>
                    <p className='text-gray-700 text-lg mt-3 px-5 sm:px-10 leading-7 tracking-wide'>
                        Stay updated with our latest blogs and articles on real estate trends, tips, and insights.
                    </p>
                </div>
            
                <Blog/>
            </section>

            {/* FOOTER BANNER */}
            <main className='banner'>
                <FooterForm/>
            </main>
        </>
    )
}