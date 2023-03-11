import React from 'react'
import Topbar from '../Components/Header'
import Sidebar from '../Components/Menu'
import Dashboards from '../Components/Dashboard'
const Dashboard = () => {
  return (
   <>
   <Topbar/>
   <Dashboards/>
   <Sidebar/>
   </>
  )
}

export default Dashboard