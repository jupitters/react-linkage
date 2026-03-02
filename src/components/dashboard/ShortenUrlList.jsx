import React from 'react'
import ShortUrlItem from './ShortUrlItem'

const ShortenUrlList = ({ data }) => {
  return (
    <div className='my-6 space-y-4 '>
        {data.map((item) => (
            <ShortUrlItem key={item.id} {...item} />
        ))}
    </div>
  )
}

export default ShortenUrlList