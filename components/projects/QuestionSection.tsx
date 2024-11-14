import React from 'react'

export default function QuestionSection() {
    return (
        <div className='bg-[#DBE2F7] px-8 md:px-28 py-10'>
            <div className="text-black bg-white rounded-3xl py-10">
                <div className="">
                    <div className="flex justify-center items-center pt-8 text-[#0CB8F7] text-lg font-bold ">AT YOUR SERVICE</div>
                    <div className="flex justify-center items-center pt-2 text-2xl lg:text-4xl font-bold">Questions about</div>
                    <div className="flex justify-center items-center pt-1 text-2xl lg:text-4xl font-bold">the offers ?</div>
                    <div className="flex justify-center items-center text-base pt-2 px-4 text-center">Whether you want to ask me a question or discuss your project, don't wait any longer.</div>
                    <div className="flex justify-center items-center text-base pt-2 px-4">Contact me by phone: 06 46 52 57 93</div>
                    <div className="flex justify-center items-center text-base pt-2 px-4">Or send me a message:</div>
                </div>
                <div className="p-4 flex flex-col gap-4 px-12 lg:px-32 xl:px-56">
                    <div className="flex flex-col md:flex-row gap-4 ">
                        <div className="border-2 px-2 w-full">
                            <input type='text' placeholder='First Name' className='py-3 w-full outline-none' />
                        </div>
                        <div className="border-2 px-2 w-full">
                            <input type='text' placeholder='Last Name' className='py-3 w-full outline-none' />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 ">
                        <div className="border-2 px-2 w-full">
                            <input type='text' placeholder='E-Mail Address' className='py-3 w-full outline-none' />
                        </div>
                        <div className="border-2 px-2 w-full">
                            <input type='text' placeholder='Phone' className='py-3 w-full outline-none' />
                        </div>
                    </div>
                    <div className="border-2 px-2 w-full h-40">
                        <textarea placeholder='Message' className='py-3 w-full outline-none h-full'/>
                    </div>
                    <button className='rounded-2xl px-8 py-4 bg-sky-400 w-fit text-white mx-[auto]'>
                        Send
                    </button>
                </div>
            </div>
        </div>
    )
}
