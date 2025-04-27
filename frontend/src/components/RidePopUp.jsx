import React from 'react'

const RidePopUp = (props) => {
  return (
    <div>
         <h5 className='p-1 w-[93%] text-center absolute top-0' onClick={() => {
                props.setRidePopupPanel(false)
            }}><i className="text-3xl text-gray-300 ri-arrow-down-wide-line"></i></h5>
            <h3 className='text-2xl font-semibold mb-5'>New Ride Available!</h3>

            <div className='flex justify-between  items-center p-3 bg-yellow-200 rounded-lg mt-4'> 
                <div className='flex items-center gap-3 '>
                    <img className='h-10 w-10 rounded-full object-cover' src="https://plus.unsplash.com/premium_photo-1715876267901-617fcb78efa1?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                      <h2 className='text-lg font-medium'>{props.ride?.user.fullname.firstname + " " + props.ride?.user.fullname.lastname}</h2>
                </div>
                <h5 className='text-lg font-semibold'>2.2km</h5>
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
                            <p className='text-sm -mt-1 text-gray-600'>{props.ride?.fare}</p>
                        </div>
                    </div>
                </div>
                <div className='flex mt-5 w-full items-center justify-between'>
                <button onClick={()=>{
                props.setRidePopupPanel(false)
                
                
                }} className=' bg-gray-300 text-gray-800 font-semibold p-3 px-10 rounded-lg'>Ignore</button>
                <button onClick={()=>{
                    props.setConfirmRidePopupPanel(true)
                    props.setRidePopupPanel(false)
                    props.confirmRide()

                }} className='  bg-green-500 text-white font-semibold p-3 px-10 rounded-lg'>Accept</button>
            
                </div>
            </div>

    </div>
  )
}

export default RidePopUp