import React, { useState,useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsIcon from '@mui/icons-material/Notifications';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import swal from 'sweetalert';
import { baseurl } from '../../baseurl/baseurl';
const Header = () => {
  const userimg = localStorage.getItem("directoryuserimage");
  
  const asktoconfirm=(e)=>{
    e.preventDefault()
    swal({
      title: "Are you sure?",
      text: "You want to Logout!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      logout()
   
      });
  }
  const logout = () => {
    swal("Logout Successfully successfully!",{
      icon: "success", 
      buttons:false,
      timer: 800,
      margin: "300px"
    }).then(()=>{
      window.localStorage.removeItem("directorytoken");
      window.localStorage.removeItem("directoryuserimage");
      window.localStorage.removeItem("directoryuserid");
      window.location.href = "/admin/login";
    });
   

  };
  return (
    <div>
    <nav className="main-header d-flex justify-content-between navbar navbar-expand navbar-white navbar-light fixed-top">
      {/* Left navbar links */}
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" data-widget="pushmenu" href="#"><i className="fas fa-bars" /></a>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <NavLink to="/admin" className="nav-link">Home</NavLink>
        </li>
       
      </ul>

     
      <div className='d-flex align-items-center'> 
    <IconButton className='mx-2'onClick={asktoconfirm} aria-label="delete">
     <LogoutIcon className=''/>
    </IconButton>

    <li className="nav-item dropdown list-unstyled mx-3">
        <a className="nav-link m-0 pt-1" data-toggle="dropdown" href="#" >
        <IconButton className='' aria-label="setting">
        <SettingsIcon className=''/>
    </IconButton>
         
        </a>
        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
         
      
          <NavLink to="/admin_setting/edit_profile" className="dropdown-item">
            <i className="fa fa-wrench mr-2" /> Profile Setting
           
          </NavLink>
        
        
          <div className="dropdown-divider" />
          <div className="dropdown-item">
            <i className="fa fa-unlock mr-2" /> Change Password
           
          </div>
        
         
        </div>
      </li>
          <div width="20%" height="20%" class="me-3 bg-info rounded-circle">
          <Avatar  src={ baseurl+`/uploads/${userimg}`} />
          {/* <img src={ baseurl+`/uploads/${userimg}`}/> */}
        {/* <img src={require('../../uploads/avatar.jpg')} /> */}
          </div></div>
    </nav>
  </div>
  
  )
}

export default Header