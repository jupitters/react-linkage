import React from 'react'

const ShortUrlItem = ({ originalUrl, shortUrl, clickCount, createdDate }) => {
  return (
    <div>{shortUrl}</div>
  )
}

export default ShortUrlItem