import React from 'react'

const LocationSearchPanel = ({ suggestions, setVehiclePanel, setPanelOpen, setPickup, setDestination, activeField }) => {

  const handleSuggestionClick = (suggestion) => {
    const fullText = `${suggestion.mainText}, ${suggestion.secondaryText}`;
    if (activeField === 'pickup') {
      setPickup(fullText);
    } else if (activeField === 'destination') {
      setDestination(fullText);
    }
      // setVehiclePanel(true)
      // setPanelOpen(false)
  }

  return (
    <div>
        {/* sample data soon to be change */}
        {
          suggestions.map(function(elem,idx){
            return  <div key={idx} onClick={()=>{
             handleSuggestionClick(elem)}} 
             className='flex gap-4  border-2 p-3 border-gray-100 active:border-black rounded-xl items-center my-2 justify-start'>
            <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'><i className='ri-map-pin-fill'></i></h2>
            <h4 className='font-medium'>{`${elem.mainText}, ${elem.secondaryText}`}</h4> 
        </div>
          })
        }

    </div>
  )
} 

export default  LocationSearchPanel

// //  <div>
//             {/* Display fetched suggestions */}
//             {
//               suggestions.map((elem, idx) => (
//                   <div key={idx} onClick={() => handleSuggestionClick(elem)} 
//               className='flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start'>
//                       <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'><i className="ri-map-pin-fill"></i>
//                       </h2>
//                       <h4 className='font-medium'>{elem}</h4>
//                   </div>
//               ))
//           }
//       </div>