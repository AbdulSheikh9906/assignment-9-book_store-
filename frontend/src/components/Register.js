import React,{useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

export default function Register(){
  const [data,setData]=useState({name:'',email:'',password:''});
  const [msg,setMsg]=useState('');
  const nav=useNavigate();

  const handle=e=>setData({...data,[e.target.name]:e.target.value});

  const submit=async e=>{
    e.preventDefault();
    try{
      await axios.post('http://localhost:5000/api/auth/register',data);
      setMsg("Registered!");
      nav('/login');
    }catch{
      setMsg("Error registering");
    }
  }

  return(
    <div style={{textAlign:'center'}}>
      <h2>Register</h2>
      <form onSubmit={submit}>
        <input name="name" placeholder="Name" onChange={handle}/><br/>
        <input name="email" placeholder="Email" onChange={handle}/><br/>
        <input name="password" type="password" placeholder="Password" onChange={handle}/><br/>
        <button>Register</button>
      </form>
      <p>{msg}</p>
    </div>
  );
}
