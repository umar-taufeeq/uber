import React from 'react'

const WaitingForDriver = (props) => {
  return (
         <div>
    <h5 className='p-1 w-[93%] text-center absolute top-0' onClick={() => {
        props.WaitingForDriver(false)
    }}><i className="text-3xl text-gray-300 ri-arrow-down-wide-line"></i></h5>
    <div className='flex justify-between  items-center'>
    <img className='h-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1682350114/assets/c2/296eac-574a-4a81-a787-8a0387970755/original/UberBlackXL.png" alt="" />
    <div className='text-right'>
    <h2 className='text-lg font-medium capitalize'>{props.ride?.captain.fullname.firstname}</h2>
    <h4 className='text-xl font-semibold -mt-1 -mb-1'>{props.ride?.captain.vehicle.plate}8</h4>
    <p className='text-sm text-gray-600'>Maruti Suzuki ALTO</p>
    <h1 className='text-lg font-semibold'>  {props.ride?.otp} </h1>
    </div>
    </div>

    <div className='flex gap-2 justify-between flex-col items-center'>
        <div className='w-full mt-5'>
            <div className='flex items-center gap-5 p-3 border-b-1'>
                <i className='text-lg ri-map-pin-2-fill'></i>
                <div>
                    <h3 className='text-lg font-medium'>Pickup</h3>
                    <p className='text-sm -mt-1 text-gray-600'>{props.ride?.pickup}</p>
                </div>
            </div>
            <div className='flex items-center gap-5 p-3 border-b-1'>
                <i className='text-lg ri-map-pin-2-fill'></i>
                <div>
                    <h3 className='text-lg font-medium'>Destination</h3>
                    <p className='text-sm -mt-1 text-gray-600'>{props.ride?.destination}</p>
                </div>
            </div>
            <div className='flex items-center gap-5 p-3 '>
            <i className="ri-currency-line"></i>
                <div>
                    <h3 className='text-lg font-medium'>Rs {props.ride?.fare}</h3>
                    <p className='text-sm -mt-1 text-gray-600'>cash||UPI</p>
                </div>
            </div>
        </div>
    </div>
</div>
    
  )
}

export default WaitingForDriver