import React from 'react';
import Helmet from 'react-helmet';
import DashboradNavbar from './DashboradNavbar';
import Sidebar from './Sidebar';
import { Link, Outlet } from 'react-router-dom';


const Dashborad = () => {
  return (
    <div className="dashborad">
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <DashboradNavbar />
      <div className="dashborad-main-content">
        <Sidebar />

        <Outlet />

      </div>
    </div>
  )
}

export default Dashborad;