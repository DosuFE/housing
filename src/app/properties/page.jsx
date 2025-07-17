import Image from "next/image"
import Property from '../../../public/assets/properties.jpg'
import Tab from "../components/tab"

export default function Properties(){
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
                        Our Property
                    </h1>
                    <p  
                        className='text-center text-gray-700 mt-5 px-5 sm:px-10 leading-7 
                        tracking-wide md:text-start md:px-0 lg:text-lg lg:max-w-4/5
                    '>
                        Looking for your dream house or property. 
                        Search here and select your best one from more than 1 million listing.
                    </p>         
                </div>
            </main>

           <article className="mt-10">
                <Tab/>
            </article> 
        </>
    )
}