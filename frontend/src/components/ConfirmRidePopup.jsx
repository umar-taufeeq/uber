import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios  from 'axios'
import { useNavigate } from 'react-router-dom'

const ConfirmRidePopup = (props) => {
    const [otp, setOtp] = useState('')
   
    const navigate = useNavigate()

    const submitHander = async (e) => {
        e.preventDefault()

        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/start-ride`, {
            params: {
                rideId: props.ride._id,
                otp: otp
            },
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })

        if (response.status === 200) {
            props.setConfirmRidePopupPanel(false)
            props.setRidePopupPanel(false)
            navigate('/captain-riding', { state: { ride: response.data } })

        }
    }
    return (
        <div>
            <h5 className='p-1 w-[93%] text-center absolute top-0' onClick={() => {
                props.setRidePopupPanel(false)
            }}><i className="text-3xl text-gray-300 ri-arrow-down-wide-line"></i></h5>
            <h3 className='text-2xl font-semibold mb-5'>Confirm This Ride To Start</h3>

            <div className='flex justify-between  items-center p-3 bg-yellow-200 rounded-lg mt-4'>
                <div className='flex items-center gap-3 '>
                    <img className='h-10 w-10 rounded-full object-cover' src="https://plus.unsplash.com/premium_photo-1715876267901-617fcb78efa1?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <h2 className='text-lg font-medium capitalize'>{props.ride?.user.fullname.firstname}</h2>
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
                            <h3 className='text-lg font-medium'>RS {props.ride?.fare}</h3>
                            <p className='text-sm -mt-1 text-gray-600'>cash||upi</p>
                        </div>
                    </div>
                </div>

                <div className='mt-6 w-full '>
                    <form onSubmit={submitHander}>
                        <input value={otp} onChange={(e)=>setOtp(e.target.value)} type="text" className='bg-[#eee] px-6 py-4 font-mono text-lg rounded-lg w-full mt-3' placeholder='ENTER OTP' />
                    <button className='w-full mt-5 text-lg flex justify-center bg-green-500 text-white font-semibold p-3 rounded-lg'>Confirm</button>

                    <button onClick={() => {
                        props.setRidePopupPanel(false)
                        props.setConfirmRidePopupPanel(false)
                    }} className='w-full mt-5 bg-red-600 text-lg text-white font-semibold p-3 rounded-lg'>Cancel</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default ConfirmRidePopup