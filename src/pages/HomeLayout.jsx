import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar';

function HomeLayout() {
  return (
  <>
    < Navbar />
    < Outlet />
    {/* < Link to='/about'>About Page</Link> */}
  </>
   
  );
}

export default HomeLayout