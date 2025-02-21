import React from 'react'

const VechilePanel = (props) => {
  return (
    <div>
        <h5 className='p-1 w-[93%] text-center absolute top-0' onClick={()=>{
        props.setVechilepanel(false)
      }}><i className="text-3xl text-gray-300 ri-arrow-down-wide-line"></i></h5>
      <h3 className='text-2xl font-semibold mb-5'>Choose a Vechile</h3>
      <div onClick={()=>{
        props.setConfirmRidePanel(true)
      }} className='flex border-2 border-gray-100 active:border-black mb-3 rounded-xl  w-full p-3 items-center justify-between cursor-pointer'>
           <img className='h-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1682350114/assets/c2/296eac-574a-4a81-a787-8a0387970755/original/UberBlackXL.png" alt="" />
           <div className=' ml-2 w-1/2'>
            <h4 className='font-medium text-base'> UBERGO <span><i className='ri-user-3-fill'></i>4</span></h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordble,compact ride</p>
           </div>
           <h2 className='text-lg font-semibold'>RS193.20</h2>
       
       </div>
       <div onClick={()=>{
        props.setConfirmRidePanel(true)
      }}  className='flex border-2 border-gray-100 active:border-black mb-3 rounded-xl  w-full p-3 items-center justify-between cursor-pointer'>
           <img className='h-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
           <div className=' ml-2 w-1/2'>
            <h4 className='font-medium text-base'> MOTO<span><i className='ri-user-3-fill'></i>1</span></h4>
            <h5 className='font-medium text-sm'>3 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordble,motorcycle ride</p>
           </div>
           <h2 className='text-lg font-semibold'>RS 65</h2>
       
       </div>
       <div onClick={()=>{
        props.setConfirmRidePanel(true)
      }}  className='flex border-2 border-gray-100 active:border-black mb-3 rounded-xl  w-full p-3 items-center justify-between cursor-pointer'>
           <img className='h-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
           <div className=' ml-2 w-1/2'>
            <h4 className='font-medium text-base'> UBERAUTO<span><i className='ri-user-3-fill'></i>3</span></h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordble,Autoride ride</p>
           </div>
           <h2 className='text-lg font-semibold'>RS 125</h2>
       
       </div>
    </div>
  )
}

export default VechilePanel