import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import '../styling/adduser.css';

export default function AddUser() {
    const [email, setEmail] = useState('');
      const [password,setPassword] = useState('')
      const navigate = useNavigate();
    
    
      const handleSubmit = async () => {
        axios.post('http://localhost:8080/api/user/addone')
        .then((res)=>{console.log(res);})
        .then(()=>{navigate('/getall') })
        .catch((err)=>{console.log(err);})
      };
  return (
    <div>
       <div className='login-container'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email"   onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" />
        <input type="password" name="password"  onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
    </div>
  )
}
