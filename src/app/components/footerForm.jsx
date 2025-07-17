import Form from "./form";


export default function FooterForm(){
    return(
        <section className="flex flex-col items-center justify-center 
        lg:flex-row lg:justify-between lg:gap-8 px-4 sm:px-6 md:px-8 
        lg:px-20 py-16 text-white
        ">
            <div className="w-full lg:w-3/5 text-center lg:text-left mb-10 lg:mb-0">
                <h1 className="text-3xl sm:text-4xl leading-tight font-bold mb-4">
                    We Help You Buy Or Sell Property Quickly
                </h1>
                <p className="text-lg sm:text-xl opacity-80">
                    Our team of experts is here to guide you through every step of the process, 
                    ensuring a smooth and successful transaction.
                </p>
            </div>

            <div className="w-full lg:w-2/5 flex justify-center">
                <Form/>
            </div>
        </section>
    )
}