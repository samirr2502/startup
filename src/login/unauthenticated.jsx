import React from 'react';

export  function UnAuth(props) {
  const [userName, setUserName] = React.useState(props.userName);
  const [password, setPassword] = React.useState('');
  //const [displayError, setDisplayError] = React.useState(null);

  async function loginUser() {
    localStorage.setItem('userName', userName);
    props.onLogin(userName);
  }

  async function createUser() {
    localStorage.setItem('userName', userName);
    props.onLogin(userName);
  }
  return (
    <main className="bd-example col-md-9">
    <section className="content ">
      <div className="content_left">
        <form className="px-4 py-3">


          <div className="mb-1">
            <label htmlFor="email" className="form-label" >UserName</label>
            <input type="email" className="form-control" id="email" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder='userNameEx'/>
          </div>
          <div className="mb-1">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          </div>


          <div className="login_buttons d-flex flex-wrap justify-content-sm-between">
            <a className="btn btn-primary"  role="button"
            onClick={() => loginUser()}>
              Log in
            </a>
          <a className="btn btn-outline-primary" role="button" 
          onClick={() => createUser()}>
            Sign-up
          </a>
        </div>
        </form>
      </div>
    

    </section>
  </main>
  );
}