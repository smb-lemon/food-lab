import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function HomeLayout() {
  return (
  <div>
    <h1>HomeLayout</h1>
    <Outlet />
    {/* < Link to='/about'>About Page</Link> */}
  </div>
   
  );
}

export default HomeLayout