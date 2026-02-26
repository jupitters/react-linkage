import React from 'react'

const LandingPage = () => {
    let desc =
  "Generate short, memorable links with ease using Linkage intuitive interface. Share URLs effortlessly across platforms. Optimize your sharing strategy with Linklytics. Track clicks and manage your links seamlessly to enhance your online presence. Generate short, memorable links with ease using Linkage intuitive interface. Share URLs effortlessly across platforms.";

  return (
    <div className='min-h-[calc(100vh-64px)] lg:px-14'>
        <div className='lg:flex-row flex-col lg:py-5 pt-16 lg:gap-10 gap-8 flex justify-between'>
            <div className='flex-1'>
                <h1 className='font-bold font-roboto text-slate-800 md:text-5xl text-3xl md:leading-13.75 sm:leading-11.25 leading-10 lg:w-full md:w-[70%] w-full'>Linkage Simplifies URL Shortening For Efficient Sharing</h1>
                <p className='text-slate-700 text-sm my-5'>
                    Linkage streamlines the process of URL shortening, making sharing
                    links effortless and efficient. With its user-friendly interface,
                    Linkage allows you to generate concise, easy-to-share URLs in
                    seconds. Simplify your sharing experience with Linkage today.
                </p>
                <div className='flex items-center gap-3'>
                    <button className='bg-custom-gradient w-40 text-white rounded-md py-2 cursor-pointer'>
                        Manage Links
                    </button>
                    <button className='border-btnColor border w-40 text-btnColor rounded-md py-2 cursor-pointer'>
                        Create Short Link
                    </button>
                </div>
            </div>
            <div className='flex-1 flex justify-center w-full'>
                <img className='sm:w-120 w-100 object-cover rounded-md' src='/images/img2.png' alt='' />
            </div>
        </div>
        <div className='sm:pt-12 pt-7'>
            <p className='text-slate-800 font-roboto font-bold lg:w-[60%] md:w-[70%] sm:w-[80%] mx-auto text-3-xl text-center'>
                Trusted By individuals and teams at the world best companies
            </p>
        </div>
    </div>
  )
}

export default LandingPage