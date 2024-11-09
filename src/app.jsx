import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { About } from './about/about';
import { CheckInHome } from './checkIns/checkInHome';
import { NavBarUnAuthCenter } from './header/navBar/navBarUnAuthCenter'
import { Footer } from './footer'
import { AuthState } from './login/authState';

import './app.css';

export default function App() {
  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
  const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
  const [authState, setAuthState] = React.useState(currentAuthState);
  

  return (
    <BrowserRouter>
      <div className='body'>
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-evenly border-bottom">
          <div className="d-flex align-items-center col-md-3 mb-md-0 ">
            <img src="images/logo_icon.png" width="50px" />
          </div>

          <NavBarUnAuthCenter />

          <div className="list_nav col-md-3 text-end">
          {authState === AuthState.Unauthenticated && (

            <NavLink className="btn btn-outline" to='/' role="button">
              Log in
            </NavLink>
          )}
            {authState === AuthState.Authenticated && (
              <>
              <NavLink className="btn btn-outline" to='/' role="button">
                Home
              </NavLink>
              <NavLink className="btn btn-outline" to='/checkInHome' role="button">
                CheckIn
              </NavLink>
              </>
            )} 
            <NavLink className="btn btn-outline" to='/about'>
              About
            </NavLink>
          </div>
        </header>
        <>
        <Routes>
            <Route path='/' element={
              <Login userName={userName}
              authState={authState}
                onAuthChange={(userName, authState) => {
                  setAuthState(authState);
                  setUserName(userName);
                }}
              />} 
                />
            <Route path='/checkInHome' element={<CheckInHome />} exact />
            <Route path='/about' element={<About />} exact />
            <Route path="*" element={<NotFound />} exact />
          </Routes>
        </>

        <Footer />

      </div>

    </BrowserRouter>
  );
}

function NotFound() {
  return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}