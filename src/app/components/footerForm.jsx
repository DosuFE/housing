import Form from "./form";


export default function FooterForm(){
    return(
        <section className="flex flex-col items-center justify-center lg:flex-row lg:mx-20 mt-20 py-20">
            <div className="lg:pl-20">
                <h1 className="text-white text-center lg:text-start text-3xl leading-10 lg:max-w-3/5">
                    We Help You Buy Or Sell Property Quickly
                </h1>
                <p className="text-white text-center lg:text-start text-lg mt-4 lg:max-w-3/5">
                    Our team of experts is here to guide you through every step of the process, 
                    ensuring a smooth and successful transaction.
                </p>
            </div>

            <Form/>
        </section>
    )
}