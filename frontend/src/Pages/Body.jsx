import { useState, useEffect } from 'react'

import { Outlet } from "react-router-dom";
const Body = () => {
  return (
    <div>
      
      <Outlet />
      <HomePage/>
      <Footer/>
    </div>
  )
}

export default Body