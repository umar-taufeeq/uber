import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Captainlogin = () => {
   const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [captainrData, setCaptainData] = useState({})
    const SubmitHandler = (e) => { 
      e.preventDefault();
      setCaptainData({
        email: email,
        password: password
      })
      console.log(captainrData);
      
      setEmail('');
      setPassword('');
  
    }
  return (
    <div className='p-7 h-screen flex flex-col justify-between '>
        <div>
        <img className='mb-3 w-16' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSVCO4w_adxK32rCXFeKq3_NbLcR9b_js14w&s" alt="captain logo" />
        <form onSubmit={(e) => {SubmitHandler(e)}}>
            <h3 className='text-lg font-medium mb-2'>What's your email</h3>
            <input 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            type="email" 
            placeholder='email@example.com' />
            <h3  className='text-lg font-medium mb-2'>Enter Password</h3>
            <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
             required 
             className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
             type="password" 
             placeholder='password'/>
            <button
            className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-base'
            >login</button>  
        </form>
        <p className='text-center'> Register as a Captain?<Link to='/captain-signup' className='text-blue-600 '>Create new Account</Link></p>
        </div>
        <div>
            <Link 
            to='/login'
            className='bg-[#FBA518] text-white flex items-center justify-center font-semibold mb-5 rounded px-4 py-2  w-full text-lg placeholder:text-base'>Sign in as User</Link>
        </div>
    </div>
  )
}

export default Captainlogin