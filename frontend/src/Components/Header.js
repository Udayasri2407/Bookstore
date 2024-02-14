import React, {useState} from 'react'
import {AppBar, Toolbar, Typography, Tabs,Tab} from '@mui/material';
import AddHomeIcon from "@mui/icons-material/AddHome";
import {NavLink} from 'react-router-dom';
import logo from '../Images/logo.jpeg'
const Header = () => {
  const [value,setvalue]= useState()
  return (
    <div>
      <AppBar sx={{backgroundColor: '#4da6ff'}}   position='sticky'> 
      <Toolbar>
      <img src={logo} width={50}/> 
        <Typography>Counselling and Visitor Management System </Typography>
        <Tabs sx={{ml: 'auto'}} textColor='inherit' indicatorColor='primary' value={value} onChange={(e,val)=>setvalue(val)}>
        <Tab LinkComponent={NavLink} to= '/signup' label='SignUp'/>
        <Tab LinkComponent={NavLink} to= '/signin' label='Signin'/>
        <Tab LinkComponent={NavLink} to= '/counseller' label='Add Counsellor'/> 
        <Tab LinkComponent={NavLink} to= '/appointment' label='Appointment'/> 
        <Tab LinkComponent={NavLink} to= '/vistor' label='Add Vistor'/>
        <Tab LinkComponent={NavLink} to= '/contact'label='Contact'/>
        </Tabs>
      </Toolbar>
    </AppBar>
    </div>
  )
}

export default Header