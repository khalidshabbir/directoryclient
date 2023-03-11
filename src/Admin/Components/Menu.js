import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import SettingsIcon from '@mui/icons-material/Settings';
import CategoryIcon from '@mui/icons-material/Category';
import BusinessIcon from '@mui/icons-material/Business';
import RateReviewIcon from '@mui/icons-material/RateReview';
import DomainAddIcon from '@mui/icons-material/DomainAdd';
import ReviewsIcon from '@mui/icons-material/Reviews';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
export default class Menu extends Component {
    render() {
        return (
          <div>
  <aside className="main-sidebar sidebar-dark-primary elevation-4" style={{background:"#051A47"}}>
    {/* Brand Logo */}
    <NavLink to='/admin' className="brand-link  py-3">
     <div className='d-flex align-items-center'>
     <div className='ms-2 ps-1'> 
      <img src='../img/logo2.png' alt='' width={160} height={40}/>
      </div>
      <div className='text-end ms-4 d-lg-none d-block'>
      <li className="nav-item">
          <a className="nav-link" data-widget="pushmenu" href="#"><i className="fas fa-bars" /></a>
        </li>
      </div>
      
     </div>
     
     
    
    </NavLink>
    {/* Sidebar */}
    <div className="sidebar">
      {/* Sidebar user panel (optional) */}
    
      {/* Sidebar Menu */}
      <nav className="mt-3">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        
         <li className="nav-item has-treeview  " >
            <NavLink to="/companyListing"  className="nav-link ">
              <DomainAddIcon className='me-1'/>
              <p className='p-0 m-0'>
                Register
              </p>
            </NavLink>
           
          </li>
         <li className="nav-item has-treeview  ">
            <NavLink to="/companyDetails" className="nav-link ">
              <BusinessIcon className='me-1'/>
              <p className='p-0 m-0'>
                Companies
              </p>
            </NavLink>
           
          </li>
         <li className="nav-item has-treeview  ">
            <NavLink to="/testimonial" className="nav-link ">
              <RateReviewIcon className='me-1'/>
              <p className='p-0 m-0'>
                Testimonials
              </p>
            </NavLink>
           
          </li>
         <li className="nav-item has-treeview  ">
            <NavLink to="/Client/Reviews" className="nav-link ">
              <ReviewsIcon className='me-1'/>
              <p className='p-0 m-0'>
                Reviews
              </p>
            </NavLink>
           
          </li>
          <li className="nav-item has-treeview  ">
            <NavLink to="/aboutusDetails" className="nav-link d-flex align-items-center ">
              <PeopleAltIcon className='me-1'/>
              <p className='p-0 m-0 '>
                Aboutus
              </p>
            </NavLink>
           
          </li>
       
         
          <li className="nav-item has-treeview  ">
            <NavLink to="/admin_setting" className="nav-link ">
              <SettingsIcon className='me-1'/>
              <p className='p-0 m-0'>
                Setting
              </p>
            </NavLink>
           
          </li>
      
       
        </ul>
      </nav>
    
    </div>
    {/* /.sidebar */}
  </aside>
</div>

        )
    }
}
