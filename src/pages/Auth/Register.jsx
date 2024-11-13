import React, { useState } from 'react'
import axios from 'axios'
import "./Login.scss"
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
  const [values, setValues] = useState({
    username:'',
    email:'',
    password:'',
  })
  const handleChaneges = (e) => {
     setValues({...values, [e.target.name]:[e.target.value]})
  }
  const handelsubmit = async (e) => {
     e.preventDefault()
    try{
     const response = await axios.post('', values) 
     if(response.status === 201){
        nevigate('/login')
     }
    } catch(err) {
        console.log(err)
    }
  }
    return (
    <div className= /*'outer-container'*/ 'flex justify-center item-center h-screen' >
        <div className= /*'inner-container'*/ 'shadow-lg px-8 py-5 border w-96'>
            <h2>Register</h2>text-lg fornt-bold md-4
            <form onSubmit={handelsubmit}>
                <div className="mb">mb-4
                    <label htmlFor="username" className='label'/*block text-gray-700*/>Username</label>
                    <input type="text" placeholder='Enter Username' name="username" onChange={handleChaneges} className='input' /*w-full px-3 py-2 border*//>
                </div>
                <div className="mb">
                    <label htmlFor="email" className='label'>Email</label>
                    <input type="text" placeholder='Enter Email' name="email" onChange={handleChaneges} className='input'/>
                </div>
                <div className="mb">
                    <label htmlFor="password" className='label'>Password</label>
                    <input type="password" placeholder='Enter Password'name="password" onChange={handleChaneges} className='input'/>
                </div>
                <button className='btn'>Submit</button>
            </form>
        </div>
        <div className='ftr' /*text-center*/>
            <p>Already have account</p>
            <Link to='/login' className='link'>Login</Link>
        </div>
    </div>
  )
}

export default Register