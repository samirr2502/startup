import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Home } from './client/home';
import {Speaker } from './speaker/speaker'

import './app.css';

export default function App() {

  return (
    <BrowserRouter>
      <div className='body'>
        {/* <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-evenly border-bottom">
          <div className="d-flex align-items-center col-md-3 mb-md-0 ">
            <img src="images/logo_icon.png" width="50px" />
          </div>

          <NavBarUnAuthCenter />

          <div className="list_nav col-md-3 text-end">

              <NavLink className="btn btn-outline" to='/' role="button">
                Log in
              </NavLink>

          </div>
        </header> */}
        <>
          <Routes>
            <Route path='/' element={
              <Home 
              />}
            />
            <Route path='/speaker' element={<Speaker />} exact />
            <Route path="*" element={<NotFound />} exact />
          </Routes>
        </>
      </div>

    </BrowserRouter>
  );
}

function NotFound() {
  return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}