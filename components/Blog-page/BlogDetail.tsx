import React from 'react'
export default function BlogDetail() {
    return (
        <div className='py-16'>
            <div className="text-center text-4xl font-bold xl:text-5xl font-sans py-8 px-8 md:px-32">Everything you need to know about WordPress maintenance</div>
            <div className="w-full flex flex-col lg:flex-row gap-4 px-8 md:px-32 ">
                <div className="w-full flex flex-col gap-4">
                    <div className="flex gap-2 text-sky-400">
                        <div className="">📅</div>
                        <div className="">13/11/2024</div>
                    </div>
                    <img src={"https://static.vecteezy.com/system/resources/previews/032/250/860/large_2x/beautiful-nature-wallpaper-nature-wallpaper-nature-wallpaper-nature-wallpaper-nature-wallpaper-nature-wallpaper-ai-generated-free-photo.jpg"} alt='image' />
                    <div className="">
                        WordPress is one of the most popular CMS for creating websites. However, creation and design are not enough: you have to think about performing regular maintenance so that the interface is functional and ergonomic. As a freelance web developer , I tell you everything you need to know about WordPress maintenance .
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className='text-2xl font-bold'>WordPress Maintenance: What is it Exactly?</p>
                        <p className='text-base'>WordPress maintenance is the set of operations carried out to ensure proper functioning and security. The intervention of a freelance web developer will allow you to optimize the performance of your website. He will present you with an invoice that will vary depending on the scale of the task to be carried out. WordPress maintenance of a site will help you save time and ensure the sustainability of your online activities.</p>

                    </div>
                </div>


                <div className=" w-full lg:w-1/3 py-8 lg:px-4 flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <div className=" text-base lg:text-2xl font-bold">Need a freelance web developer?</div>
                        <div className="text-base">You want to create a website and you are looking for a freelance developer? Call me and contact me now</div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className=" text-base lg:text-2xl font-bold">Recent articles</div>
                        <div className="text-base">Recent articles
                            Everything you need to know about WordPress maintenance
                            The Importance of WordPress Maintenance
                            What are the missions of the freelance developer?
                            Web development: focus on the latest trends
                            Website creation: what</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
