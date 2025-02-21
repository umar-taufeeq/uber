import React from 'react'

const LocationSearchPanel = (props) => {

  const locations=[
    "House.NO-351 potka near potka masjid,chakradharpur",
    "House.NO-451 potka near potka masjid,chakradharpur",
    "House.NO-551 potka near potka masjid,chakradharpur"
  ]
  return (
    <div>
        {/* sample data soon to be change */}
        {
          locations.map(function(elem,idx){
            return  <div key={idx} onClick={()=>{
              props.setVechilepanel(true)
              props.setPanelOpen(false)
            }} className='flex gap-4  border-2 p-3 border-gray-100 active:border-black rounded-xl items-center my-2 justify-start'>
            <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'><i className='ri-map-pin-fill'></i></h2>
            <h4 className='font-medium'>{elem}</h4>
        </div>
          })
        }

    </div>
  )
} 

export default  LocationSearchPanel