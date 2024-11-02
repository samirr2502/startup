import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { NavBarUnAuthCenter } from './navBar/navBarUnAuthCenter'
import { NavBarUnAuthRight } from './navBar/navBarUnAuthRight'
export function HeadComp() {
return(

    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-evenly border-bottom">
    <div className="d-flex align-items-center col-md-3 mb-md-0 ">
      <img src="media/images/logo_icon.png" width="50px"/>
    </div>
      <NavBarUnAuthCenter />
      <NavBarUnAuthRight />  
    </header>
);
}