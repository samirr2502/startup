import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';

export function NavBarUnAuthRight() {
  return (
    <>
      <div className="list_nav col-md-3 text-end">
        <NavLink className="btn btn-outline-primary" to='/home' role="button">
          Log in
        </NavLink>
        <a className="btn btn-primary" href="createUser.html" role="button" >
          Sign-up
        </a>
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
        <li><a className="dropdown-item active" href="index.html">Log in</a></li>
        <li><a className="dropdown-item" href="createUser.html">Sign-up</a></li>
      </ul>
      </div>
    </>
  );
}