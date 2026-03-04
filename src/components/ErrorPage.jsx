import React from 'react'
import { FaExclamationTriangle } from 'react-icons/fa'

const ErrorPage = ({ message }) => {
  return (
    <div className='flex flex-col items-center justify-center min-h-[calc(100vh-64px)] bg-gray-100 p-6'>
        <FaExclamationTriangle className='text-6xl text-red-500 mb-4' />
        <h1 className='text-3xl font-bold mb-2 text-gray-800'>
            Oops! Something went wrong.
        </h1>
    </div>
  )
}

export default ErrorPage