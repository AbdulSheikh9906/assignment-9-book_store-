import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Catalogue(){
  const [books,setBooks]=useState([]);

  const fetchBooks = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/books');
      setBooks(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(()=>{ fetchBooks(); },[]);

  return(
    <div style={{textAlign:'center', padding:20}}>
      <h2>Books</h2>

      <Link to="/addbook">
        <button style={{margin:20,padding:10}}>Add New Book</button>
      </Link>

      {books.length === 0 ? <p>No books found</p> : books.map(b=>(
        <div key={b.id} style={{border:'1px solid #ccc',margin:10,padding:10}}>
          <h3>{b.title}</h3>
          <p>{b.author}</p>
          <p>${b.price}</p>
        </div>
      ))}
    </div>
  );
}
