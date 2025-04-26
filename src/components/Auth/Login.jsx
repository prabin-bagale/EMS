import React from 'react'
import { useState } from 'react'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Email is:', email);
    console.log('Password is:', password);
    setEmail('')
    setPassword('')
    
  }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 rounded-xl border-emerald-600 p-20'>
        <form onSubmit={(e)=>{
          handleSubmit(e)
        }} className='flex flex-col items-center justify-center '>
            <input onChange={(e) => setEmail(e.target.value)} value={email}
            required 
            className='  outline-none bg-transparent border-2 border-emerald-600 rounded-full text-xl py-3 px-5 placeholder:text-gray-400' type="email" placeholder='Enter Your Email' />
            <input onChange={(e) => setPassword(e.target.value)} value={password}
            required
             className='  outline-none bg-transparent border-2 mt-3 border-emerald-600 rounded-full text-xl py-3 px-5 placeholder:text-gray-400' type="password" placeholder='Enter Password' />
            <button className=' mt-5 text-white  outline-none border-none  bg-emerald-600 rounded-full text-xl py-3 px-5 placeholder:text-white'>Login</button>
        </form>
       
      </div>
    </div>
  )
}

export default Login
