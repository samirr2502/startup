import React from 'react';
export function NavBarAuthCenter() {
return( 

    <>
    <div className="d-flex align-items-center col-md-2 mb-2 mb-md-0 ">
      <img src="media/images/logo_icon.png" width="50px"/>
    </div>
    <ul className="nav list_nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
      <li><a className="nav-link px-2 link-secondary" href="home.html">Home</a></li>
      <li><a className="nav-link px-2 link-dark" href="meetingViewer.html">Meeting Viewer</a></li>
      <li><a className="nav-link px-2 link-dark" href="meetingPlanner.html">Meeting Planner</a></li>
      <li><a className="nav-link px-2 link-dark" href="management.html">Management</a></li>
      <li><a className="nav-link px-2 link-dark" href="https://github.com/samirr2502/startup">About</a></li>
    </ul>


      <div className="dropdown_nav col-6 justify-content-center">

        <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
          aria-expanded="false">
          Home
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a className="dropdown-item  active " href="home.html">Home</a></li>
      <li><a className="dropdown-item" href="meetingViewer.html">Meeting Viewer</a></li>
      <li><a className="dropdown-item" href="meetingPlanner.html">Meeting Planner</a></li>
      <li><a className="dropdown-item" href="management.html">Management</a></li>
          <li><a  className="dropdown-item"  href="https://github.com/samirr2502/startup"  target="_blank">About</a></li>
          
        </ul>
      </div>
      
     
</>
);
}