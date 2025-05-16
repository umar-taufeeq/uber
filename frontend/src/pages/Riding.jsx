import React from 'react'
import { Link, useLocation } from 'react-router-dom' // Added useLocation
import { useEffect, useContext } from 'react'
import { SocketContext } from '../context/SocketContext'
import { useNavigate } from 'react-router-dom'
import LiveTracking from '../components/LiveTracking'

const Riding = () => {
    const location = useLocation()
    const {ride}= location.state || {}

    const { socket } = useContext(SocketContext)
    const navigate = useNavigate()


   socket.on("ride-ended", () => {
        navigate('/home')
    })

  return (
    <div className='h-screen'>
        <Link to='/home' className='fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full'>
        <i className='text-lg font-medium ri-home-5-line'></i>
        </Link>
        <div className='h-1/2' >
        {/* <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" /> */}
        <LiveTracking/>
        </div>
        <div className='h-1/2 p-4 '>
        <div className='flex justify-between  items-center'>
    <img className='h-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1682350114/assets/c2/296eac-574a-4a81-a787-8a0387970755/original/UberBlackXL.png" alt="" />
    <div className='text-right'>
    <h2 className='text-lg font-medium capitalize'>{ride?.captain.fullname.firstname}</h2>
    <h4 className='text-xl font-semibold -mt-1 -mb-1'>{ride?.captain.vehicle.plate}</h4>
    <p className='text-sm text-gray-600'>Maruti Suzuki ALTO</p>
    </div>
    </div>

    <div className='flex gap-2 justify-between flex-col items-center'>
        <div className='w-full mt-5'>
            <div className='flex items-center gap-5 p-3 border-b-1'>
                <i className='text-lg ri-map-pin-2-fill'></i>
                <div>
                    <h3 className='text-lg font-medium'>Destination</h3>
                    <p className='text-sm -mt-1 text-gray-600'>{ride?.destination}</p>
                </div>
            </div>
            <div className='flex items-center gap-5 p-3 '>
            <i className="ri-currency-line"></i>
                <div>
                    <h3 className='text-lg font-medium'>Rs {ride?.fare}</h3>
                    <p className='text-sm -mt-1 text-gray-600'>cash cash</p>
                </div>
            </div>
        </div>
    </div>

            <button className='w-full mt-5 bg-green-500 text-white font-semibold p-2 rounded-lg'>Make a Payment</button>
            
        </div>
    </div>
  )
}

export default Riding