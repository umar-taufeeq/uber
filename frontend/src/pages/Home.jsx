import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'
import VechilePanel from '../components/VechilePanel'
import ConfirmedRide from '../components/ConfirmedRide'
import LookingForDriver from '../components/LookingForDriver'
import WaitingForDriver from '../components/WaitingForDriver'

const Home = () => {

  const [pickup, setPickup] = useState('')
  const [Destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const vechilePanelRef = useRef(null)
  const confirmRidePanelRef = useRef(null)
  const vechileFoundRef = useRef(null)
  const waitingForDriverRef = useRef(null)
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)
  const [vechilepanel, setVechilepanel] = useState(false)
  const [confirmRidePanel, setConfirmRidePanel] = useState(false)
  const [vechileFound, setVechileFound] = useState(false)
  const [waitingForDriver, setWaitingForDriver] = useState(false)

  const submitHandler = (e) => {
    e.preventDefault()

  }

  useGSAP(function () {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: '70%',
        padding: 20
      })
      gsap.to(panelCloseRef.current, {
        opacity: 1
      })
    } else {
      gsap.to(panelRef.current, {
        height: '0%',
        padding: 0
      })
      gsap.to(panelCloseRef.current, {
        opacity: 0
      })
    }
  }, [panelOpen])

  useGSAP(function () {
    if (vechilepanel) {
      gsap.to(vechilePanelRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(vechilePanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [vechilepanel])

  useGSAP(function () {
    if (confirmRidePanel) {
      gsap.to(confirmRidePanelRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(confirmRidePanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [confirmRidePanel])

  useGSAP(function () {
    if (vechileFound) {
      gsap.to(vechileFoundRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(vechileFoundRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [vechileFound])

  useGSAP(function () {
    if (waitingForDriver) {
      gsap.to(waitingForDriverRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(waitingForDriverRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [waitingForDriver])

  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-15  absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png" alt="" />
      <div className='h-screen w-screen'>
        {/* img for temp use */}
        <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>
      <div className=' flex flex-col justify-end h-screen absolute top-0 w-full '>
        <div className='bg-white p-6 h-[30%] relative'>
          <h5 ref={panelCloseRef}
            onClick={() => {
              setPanelOpen(false)
            }}
            className='absolute opacity-0 top-5 right-6'><i className="ri-arrow-down-wide-line"></i></h5>
          <h4 className='text-2xl font-semibold'>Find a trip</h4>
          <form onSubmit={(e) => {
            submitHandler(e)
          }} >
            <div className='line absolute h-16  w-1  bg-gray-800 rounded-full top-[40%] left-10'></div>
            <input
              onClick={() => {
                setPanelOpen(true)
              }}
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value)
              }}
              className='bg-[#eee] px-10 py-2 text-lg rounded-lg w-full mt-3' type="text" placeholder='Add a Pickup Location' />
            <input
              onClick={() => {
                setPanelOpen(true)
              }}
              value={Destination}
              onChange={(e) => {
                setDestination(e.target.value)
              }}
              className='bg-[#eee] px-10 py-2 text-lg rounded-lg w-full mt-3' type="text" placeholder='Enter Your Destination' />

          </form>
        </div>
        <div ref={panelRef} className='h-0  bg-white'>
          <LocationSearchPanel setPanelOpen={setPanelOpen} setVechilepanel={setVechilepanel} />
        </div>
      </div>
      <div ref={vechilePanelRef} className='fixed w-full  z-10 bottom-0 translate-y-full p-3 py-10 pt-12 px-3 bg-white'>
        <VechilePanel setConfirmRidePanel={setConfirmRidePanel} setVechilepanel={setVechilepanel} />
      </div>
      <div ref={confirmRidePanelRef} className='fixed w-full  z-10 bottom-0 translate-y-full p-3 py-6 pt-12 px-3 bg-white'>
        <ConfirmedRide setConfirmRidePanel={setConfirmRidePanel} setVechileFound={setVechileFound} />
      </div>
      <div ref={vechileFoundRef} className='fixed w-full  z-10 bottom-0 translate-y-full p-3 py-6 pt-12 px-3 bg-white'>
        <LookingForDriver setVechileFound={setVechileFound} />
      </div>
      <div ref={waitingForDriverRef} className='fixed w-full  z-10 bottom-0  p-3 py-6 pt-12 px-3 bg-white'>
        <WaitingForDriver waitingForDriver={waitingForDriver}/>
      </div>

    </div>
  )
}

export default Home