import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/Login';
import Register from './components/Register';
import Catalogue from './components/Catalogue';
import AddBook from './components/AddBook';   // <-- right place
import Navbar from './components/Navbar';

export default function App(){
  return (
    <Router>
      <Navbar />
      <h1 style={{textAlign:'center'}}>Online Book Store</h1>

      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/catalogue" element={<Catalogue/>}/>
        <Route path="/addbook" element={<AddBook/>}/>  {/* <-- correct route */}
      </Routes>

    </Router>
  );
}
