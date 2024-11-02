import React from 'react';
import Auth from './authenticated';
import { UnAuth } from './unauthenticated';

import NewUser from './newUser';

export function Login() {
  return (
    <main className="bd-example col-md-9">
    <section className="title">
      <h1>Meeting's Planner</h1>
    </section>
    
    <section className="content ">
    <div className="content_left">
        <Auth />  
    </div>

    <div className="content_left">
        <UnAuth />  
    </div>

    <div className="content_left">
        <NewUser />  
    </div>


    <div className="content_right" >
    
      <div id="carousel_slides" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carousel_slides" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carousel_slides" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carousel_slides" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="media/images/conferenceCenter.png" />
          </div>
          <div className="carousel-item">
            <img src="media/images/topView.png" />

          </div>
          <div className="carousel-item">
            <img src="media/images/provoTemple.png" />

          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carousel_slides" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carousel_slides" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

    </div>

  </section>
  </main>
  );
}