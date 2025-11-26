import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(){
  return(
    <nav style={{padding:10,textAlign:'center'}}>
      <Link to="/">Home</Link> | 
      <Link to="/catalogue"> Catalogue </Link> | 
      <Link to="/login"> Login </Link> | 
      <Link to="/register"> Register </Link>
    </nav>
  );
}
