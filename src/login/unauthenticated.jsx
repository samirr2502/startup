import React from 'react';

export  function UnAuth() {
  return (
    <main className="bd-example col-md-9">

    <section className="content ">
      <div className="content_left">
        <form className="px-4 py-3">
          <div className="mb-1">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="email@gmail.com" />
          </div>
          <div className="mb-1">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Password" />
          </div>
          <div className="login_buttons d-flex flex-wrap justify-content-sm-between">
            <a className="btn btn-primary" href="home.html" role="button">
              Log in
            </a>
          <a className="btn btn-outline-primary " href="createUser.html" role="button" >
            Sign-up
          </a>
          
        </div>
          
        </form>
      </div>
    

    </section>
  </main>
  );
}