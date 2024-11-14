import React from 'react'

export default function ServiceSection() {
    return (
        <div className=''>
            <div className="flex flex-col justify-center items-center py-16 gap-4">
                <p className='text-[#0CB8F7] text-lg font-medium'>YOUR TURNKEY E-COMMERCE SITE</p>
                <p className='font-bold text-4xl lg:text-5xl'>Website creation E-commerce</p>
            </div>

            <div className="py-4">
                <div className="flex flex-col md:flex-row">
                    <div className="w-full flex justify-center items-cente">
                        <img src='https://www.florianperrier.com/app/themes/understrap-child/images/illus/florian-perrier-developpeur-web-freelance-creation-site-e-commerce-01.svg' alt='image' height={400} width={400} />
                    </div>
                    <div className="w-full px-8 flex flex-col justify-center items-cente gap-4">
                        <div className="text-4xl font-bold py-4">Youre-commerce siteturnkey</div>
                        <div className="text-base">Launching your online store is an opportunity to transform your vision into a captivating shopping experience.An online store offers much more than just selling products online.It’s a digital showcase where your brand comes to life, reaches new horizons, and creates lasting connections with your customers.Ready to embark on the world of e-commerce?
                        </div>
                        <div className="">
                            <button className='text-white text-base bg-[#0cb8f7] py-4 px-8 rounded-lg drop-shadow-lg'>
                                Contact me
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


