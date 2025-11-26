import React,{useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login(){
  const [data,setData]=useState({email:'',password:''});
  const [msg,setMsg]=useState('');
  const nav=useNavigate();

  const handle=e=>setData({...data,[e.target.name]:e.target.value});

  const submit=async e=>{
    e.preventDefault();
    try{
      const res=await axios.post('http://localhost:5000/api/auth/login',data);
      localStorage.setItem('token',res.data.token);
      nav('/catalogue');
    }catch(err){
      setMsg("Login failed");
    }
  }

  return(
    <div style={{textAlign:'center'}}>
      <h2>Login</h2>
      <form onSubmit={submit}>
        <input name="email" placeholder="Email" onChange={handle}/><br/>
        <input name="password" type="password" placeholder="Password" onChange={handle}/><br/>
        <button>Login</button>
      </form>
      <p>{msg}</p>
    </div>
  );
}
