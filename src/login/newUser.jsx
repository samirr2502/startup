import React from 'react';

export function NewUser() {
  return (
 <main>
    <form className="px-4 py-3">
          <div className="mb-1">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input type="email" className="form-control" id="name" placeholder="John Doe"/>
          </div>
          <div className="mb-1">
            <label htmlFor="exampleDropdownFormEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com"/>
          </div>
          <div className="mb-1">
            <label htmlFor="exampleDropdownFormPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleDropdownFormPassword1" placeholder="Password"/>
          </div>
     
          <div className="login_buttons">
            <a className="btn btn-primary" href="newUserLanding.html" role="button">
              Create
            </a>
            <a className="btn btn-outline-primary" href="index.html" role="button" >
              Back
            </a>
            
          </div>
        </form>
 </main>
);
}