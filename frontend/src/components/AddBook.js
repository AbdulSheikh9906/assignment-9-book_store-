import React,{useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AddBook(){
  const [data,setData]=useState({title:'',author:'',price:''});
  const [msg,setMsg]=useState('');
  const nav = useNavigate();

  const handle=e=>setData({...data,[e.target.name]:e.target.value});

  const submit=async e=>{
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/books/add', data);
      nav('/catalogue');
    } catch (err) {
      setMsg('Failed to add book');
    }
  };

  return(
    <div style={{textAlign:'center', padding:20}}>
      <h2>Add New Book</h2>
      <form onSubmit={submit}>
        <input name="title" placeholder="Title" onChange={handle} /><br/><br/>
        <input name="author" placeholder="Author" onChange={handle} /><br/><br/>
        <input name="price" placeholder="Price" onChange={handle} /><br/><br/>
        <button>Add Book</button>
      </form>
      <p>{msg}</p>
    </div>
  );
}
