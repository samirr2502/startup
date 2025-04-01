import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';

export function NavBarUnAuthRight() {
  return (
    <>
      <div className="list_nav col-md-3 text-end">
        <NavLink className="btn btn-outline" to='/' role="button">
          Log in
        </NavLink>
        {authState === AuthState.Authenticated && (

        <NavLink className="btn btn-outline" to='/' role="button">
          Home
        </NavLink>
        )}
        <NavLink className="btn btn-outline" to='/about'>
        About
        </NavLink>
      </div> 
{/*Small screen*/}
<div class="dropdown_nav col-text-end">

      <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
        aria-expanded="false">
        <svg className="bi  mx-auto " width="24" height="24" fill="white">
          <use xlinkHref="bootstrap-icons.svg#person" />
        </svg>
      </button>
      <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
        <li><NavLink className="dropdown-item" to="/">
        Log in
        </NavLink></li>
        <li><NavLink className="dropdown-item" to='/'>
          Home
        </NavLink></li>
        <li><NavLink className="dropdown-item" to="/about">
        About
        </NavLink></li>
      </ul>
      </div>
    </>
  );
}