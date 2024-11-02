import React from 'react';

export function Home() {
  return (
    <main className="bd-example col-md-9">
    <section className="title">
    <h2>Welcome, <span>[%user]</span></h2>
  </section>
  <section className="content">
    <div className="content_left">
    <div id="api_phrase_div">
      <p>This will have a cool phrase coming from an API</p>
    </div>
    <div className="card_view_container">
      <div className="card_view_home">
        <i className='fas fa-stream' style='font-size:24px'></i>
        <a href="meetingViewer.html">View Meeting</a>
      </div>
      <div className="card_view_home">
        <i className='fas fa-edit' style='font-size:24px'></i>
        <a href="meetingPlanner.html">Edit Meeting</a>
      </div>
      <div className="card_view_home">
        <i className='fas fa-tools' style='font-size:24px'></i>
        <a href="management.html">Manage</a>
      </div>
    </div>
    </div>
    <div className="content_right">
      <div id="carousel_slides" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carousel_slides" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carousel_slides" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carousel_slides" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="media/images/conferenceCenter.png"  width="400px" height="400px" style="overflow-x: hidden;"/>
          </div>
          <div className="carousel-item">
            <img src="media/images/topView.png" width="400px" height="400px" style="overflow-x: hidden;" />

          </div>
          <div className="carousel-item">
            <img src="media/images/provoTemple.png" width="400px" height="400px" style="overflow-x: hidden;" />

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