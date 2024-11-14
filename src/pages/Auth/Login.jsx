import React, { useState } from 'react';
import axios from 'axios';
import "./Login.scss";
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [values, setValues] = useState({
    email:'',
    password:'',
  });
  const handleChanges = (e) => {
     setValues({...values, [e.target.name]:e.target.value})
  };

  const navigate = useNavigate();

  const handelSubmit = async (e) => {
     e.preventDefault();
    try{
     const response = await axios.post('', values);
     if(response.status === 201){
        navigate('/');
     }
    } catch(err) {
        console.log(err)
    }
  };
    return (
    <div className='outer-container'>
        <div className='inner-container'>
            <h2>Login</h2>
            <form onSubmit={handelSubmit}>
                <div className="mb">
                    <label htmlFor="email" className='label'>Email</label>
                    <input type="text" placeholder='Enter Email' name="email" onChange={handleChanges} className='input'/>
                </div>
                <div className="mb">
                    <label htmlFor="password" className='label'>Password</label>
                    <input type="password" placeholder='Enter Password'name="password" onChange={handleChanges} className='input'/>
                </div>
                <button className='btn'>Submit</button>
            </form>
        </div>
        <div className='ftr'>
            <p>Don't Have Account</p>
            <Link to='/Register' className='link'>Register</Link>
        </div>
    </div>
  );
};

export default Login;