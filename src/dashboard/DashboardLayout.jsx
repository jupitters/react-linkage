import React from 'react'
import Graph from './Graph'
import { dummyData } from '../dummyData/data'
import { useStoredContext } from '../contextApi/ContextApi'
import { useFetchTotalClicks } from '../hooks/useQuery'

const DashboardLayout = () => {
  const { token } = useStoredContext();
  const onError = (error) => {
    console.log(error)
  }

  const { isLoading: loader, data: totalClicks } = useFetchTotalClicks(token, onError);

  return (
    <div className='lg:px-14 sm:px-8 px-4 min-h-[calc(100vh-64px)]'>
      {loader ? (
        <p>Loading...</p>
      ) : (
        <div className='lg:w-[90%] w-full mx-auto py-16'>
            <div className='h-96 relative'>
                <Graph graphData={dummyData} />
            </div>
            <div className="py-5 sm:text-end text-center">
              <button className='bg-custom-gradient px-4 py-2 rounded-md text-white'>
                Create a New Short URL
              </button>
            </div>
        </div>
      )}
    </div>
  )
}

export default DashboardLayout