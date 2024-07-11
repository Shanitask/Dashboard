
import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
export default function Dashboard(){
    return(
        <>
  <Header/>
      <div className="row">
<div className='col-md-2'>
<Sidebar/>
</div>
<div className='col-md-10'>
   <Outlet></Outlet>
</div>
      </div>
  <Footer/>
        </>
    )
}
