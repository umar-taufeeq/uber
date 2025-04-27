import React from 'react'

const ConfirmedRide = (props) => {
    return (
        <div>
            <h5 className='p-1 w-[93%] text-center absolute top-0' onClick={() => {
                props.setConfirmRidePanel(false)
            }}><i className="text-3xl text-gray-300 ri-arrow-down-wide-line"></i></h5>
            <h3 className='text-2xl font-semibold mb-5'>Confirm your ride</h3>

            <div className='flex gap-2 justify-between flex-col items-center'>
                <img className='h-20' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1682350114/assets/c2/296eac-574a-4a81-a787-8a0387970755/original/UberBlackXL.png" alt="" />
                <div className='w-full mt-5'>
                    <div className='flex items-center gap-5 p-3 border-b-1'>
                        <i className='text-lg ri-map-pin-2-fill'></i>
                        <div>
                            <h3 className='text-lg font-medium'>Pickup</h3>
                            <p className='text-sm -mt-1 text-gray-600'>{props.pickup}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3 border-b-1'>
                        <i className='text-lg ri-map-pin-2-fill'></i>
                        <div>
                            <h3 className='text-lg font-medium'>Destination</h3>
                            <p className='text-sm -mt-1 text-gray-600'>{props.destination}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3 '>
                    <i className="ri-currency-line"></i>
                        <div>
                            <h3 className='text-lg font-medium'>Rs {props.fare [props.vehicleType]}</h3>
                            <p className='text-sm -mt-1 text-gray-600'>cash </p>
                        </div>
                    </div>
                </div>
                <button onClick={()=>{
                    props.setVechileFound(true)
                    props.setConfirmRidePanel(false)
                    props.createRide()
                }} className='w-full mt-5 bg-green-500 text-white font-semibold p-2 rounded-lg'>Confirm</button>
            </div>
        </div>
    )
}

export default ConfirmedRide