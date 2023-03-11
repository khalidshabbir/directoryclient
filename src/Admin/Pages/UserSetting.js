import React from 'react'
import Setting from '../Components/UserSetting'
import Topbar from '../Components/Header'
import Sidebar from "../Components/Menu"
import AdminUser from '../Components/AdminUsers'

const UserSetting = () => {
  return (
   <>
   <Topbar/>
   <Sidebar/>
    <AdminUser/>
  
   </>
  )
}

export default UserSetting