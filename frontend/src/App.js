import React from 'react';
import Header from './Components/Header';
import React,{ useState } from 'react';
import { Container, Navbar, Nav, Card, CardDeck, Form } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Councellor from './Components/Councellor';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import Visitor from './Components/Visitor';
import Appointment from './Components/Appointment';
import Contact from './Components/Contact';
function App() {
  return <React.Fragment>
    <header>
      <Header/>
    </header>
    <main>
      <Routes>
        <Route path='/' element={<Home/> }exact/>
        <Route path='/signup' element={<Signup/> }exact/>
        <Route path='/sign-in' element={<Signin/> }exact/>
        <Route path='/councellor' element={<Councellor/> }exact/>
        <Route path='/visitor' element={<Visitor/> }exact/>
        <Route path='/appointment' element={<Appointment/> }exact/>
        <Route path='/Contact' element={<Contact/> }exact/>
      </Routes>
    </main>
  </React.Fragment>
}
export default App;