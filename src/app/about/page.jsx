import Scrapper from '../../../public/assets/scrapper_office.jpg'
import Image from 'next/image'
import Accolades from '../components/accolades'
import Members from '../components/members'

export default function About(){
    return (
        <>
            <main 
                className='flex flex-col items-center justify-center space-y-10
                lg:flex-row-reverse lg:justify-center lg:pl-10 lg:gap-x-5
                xl:gap-x-10
            
            '> 
                <div className='hero-video-effect w-full xl:w-1/2'>

                    <Image 
                        src={Scrapper} 
                        alt="Scrapper Property Environment"
                        className='w-full'
                    />
                </div>
                

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
                </div>
            </main> 

            {/* TEAM ACCOLADES SECTION */}
            <section className='team-accolades mt-10 py-20 w-full flex flex-col items-center justify-center gap-5 md:gap-10'>
                <h2 className='text-3xl font-semibold text-white tracking-wide text-center'>
                    OUR TEAM ACCOLADES
                </h2>
                
                <Accolades/>
            </section>

            {/* MEMBERS OF WESTON GROUP */}
            <main>
                <div className='text-center my-10'>
                    <h2 className='text-3xl font-semibold text-gray-800 tracking-wide'>
                        MEMBERS OF WESTON GROUP
                    </h2>
                    <p className='text-gray-700 text-lg mt-3 px-5 sm:px-10 leading-7 tracking-wide'>
                        Mauris primis turpis Laoreet magna felis mi amet quam enim curae. 
                        Sodales semper tempor dictum faucibus habitasse.
                    </p>
                </div>

                <Members/>
            </main>
        </>
    )
};