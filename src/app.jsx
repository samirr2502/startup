import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Home } from './home/home';
import { HeadComp } from './header/header'
import { Footer } from './footer'
import './app.css';

export default function App() {
  return (
    <BrowserRouter>
      <div className='body'>
        <HeadComp />
        <main>
          <Routes>
            <Route path='/' element={<Login />} exact />
            <Route path="*" element={<NotFound />} exact />
          </Routes>
        </main>

        <Footer />

      </div>
      
    </BrowserRouter>
  );
}

function NotFound() {
  return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}