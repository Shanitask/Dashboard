
import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Sidebar(){
    return(
        <>

<div className="sidebar">
  
      <ul className="nav flex-column">
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/Dashboard/home">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/Dashboard/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/services">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
        </>
    )
}
