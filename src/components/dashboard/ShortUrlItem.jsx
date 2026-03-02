import React from 'react'

const ShortUrlItem = ({ originalUrl, shortUrl, clickCount, createdDate }) => {
    const subDomain = import.meta.env.VITE_REACT_FRONT_END_URL.replace(
        /^https?:\/\//,
        ""
      );

  return (
    <div className={`bg-slate-100 shadow-lg border border-dotted  border-slate-500 px-6 sm:py-1 py-3 rounded-md  transition-all duration-100 `}>
        <div className={`flex sm:flex-row flex-col  sm:justify-between w-full sm:gap-0 gap-5 py-5 `}>
            <div className="flex-1 sm:space-y-1 max-w-full overflow-x-auto overflow-y-hidden ">
                <div className="text-slate-900 pb-1 sm:pb-0   flex items-center gap-2 ">
                    <a href={`${import.meta.env.VITE_REACT_SUBDOMAIN}/${shortUrl}`}
                        target="_blank"
                        className=" text-[17px]  font-montserrat font-[600] text-linkColor ">
                        {subDomain + "/" + `${shortUrl}`}
                    </a>
                </div>
                <div className='flex items-center gap-1'>
                    <h3 className='text-slate-700 font-normal text-[17px]'>
                        {originalUrl}
                    </h3>
                </div>
                <div className='flex items-center gap-8 pt-6'>
                    <div className='flex gap-1 items-center font-semibold text-green-800'>
                        <span><MdOutlineAdsClick className='text-[22px] me-1' /> </span>
                        <span className='text-[16px]'>{clickCount}</span>
                        <span className='text-[15px]'>{clickCount === 1 ? "Click" : "Clicks"}</span>
                    </div>
                </div>
                <div className='flex items-center gap-2 font-semibold text-lg text-slate-800'>
                        <span><FaRegCalendarAlt /></span>
                        <span className='text-[17px]'>
                            {dayjs(createdDate).format("MMM DD, YYYY")}
                        </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShortUrlItem