import React,{useContext} from 'react'
import {CaptainDataContext} from '../context/CaptainContext'

const CaptainDetails = () => {

  //  const {captain} = useContext(CaptainDataContext);
  //  console.log(captain)

  //  const { captain, isLoading } = data;
  //    if (isLoading) {
  //       return <div>Loading...</div>;
  //        }

    const { captain, isLoading } = useContext(CaptainDataContext);
    // console.log("Captain Data:", captain);

  
    // Return loading state if captain data is still being fetched
    if (isLoading) {
      return <div>Loading...</div>;
    }
  
    // Handle the case where captain is undefined or not yet set
    if (!captain) {
      return <div>No captain data available</div>;
    }

  return (
    <div>
         <div className='flex items-center justify-between'>
      <div  className='flex items-center justify-start gap-3'>
        <img className='h-10 w-10 rounded-full object-cover' src="https://images.unsplash.com/photo-1740031904427-ca6713523372?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <h4 className='text-lg font-medium capitalize'> {captain.fullname?.firstname} {captain.fullname?.lastname}</h4>
      </div>
      <div>
        <h4 className='text-xl font-semibold'>Rs 200.95</h4>
        <p className='text-sm  tex3-grmb-2 ay-600'>earned</p>
      </div>
    </div>
        <div className='flex p-3 mt-6 bg-gray-100 rounded-xl justify-center gap-5 items-start'>
          <div className='text-center'>
            <i className='text-3xl mb-2 font-thin ri-timer-2-line'></i> 
            <h5 className='text-lg font-medium'>10.2</h5>
            <p className='text-sm text-gray-600 '>hours online</p>
            </div>
          <div className='text-center'>
            <i className='text-3xl mb-2 font-thin ri-speed-up-line'></i>
          <h5 className='text-lg font-medium'>10.2</h5>
          <p className='text-sm text-gray-600 '>hours online</p>
          </div>
          <div className='text-center'>
            <i className='text-3xl mb-2 font-thin ri-booklet-line'></i>
          <h5 className='text-lg font-medium'>10.2</h5>
          <p className='text-sm text-gray-600 '>hours online</p>
          </div>
      </div>
    </div>
  )
}

export default CaptainDetails