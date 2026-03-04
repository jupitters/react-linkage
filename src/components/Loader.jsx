import React from 'react'

const Loader = () => {
  return (
    <RotatingLines
            visible={true}
            height="65"
            width="65"
            color="red"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{}}
            wrapperClass=""
            />
  )
}

export default Loader