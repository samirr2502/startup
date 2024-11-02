import React from 'react';

export default function Auth() {
  return (
    <main className="bd-example col-md-1">
         <div id="api_phrase_div">
      <p>This will have a cool phrase coming from an API</p>
    </div>
    <div className="card_view_container">
      <div className="card_view_home">
        <i className='fas fa-stream' ></i>
        <a href="meetingViewer.html">View Meeting</a>
      </div>
      <div className="card_view_home">
        <i className='fas fa-edit' ></i>
        <a href="meetingPlanner.html">Edit Meeting</a>
      </div>
      <div className="card_view_home">
        <i className='fas fa-tools' ></i>
        <a href="management.html">Manage</a>
      </div>
    </div>
  </main>
  );
}