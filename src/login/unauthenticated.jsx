import React from 'react';
import Button from 'react-bootstrap/Button';

export function UnAuth(props) {
  const [userName, setUserName] = React.useState(props.userName);
  const [password, setPassword] = React.useState('');
  //const [displayError, setDisplayError] = React.useState(null);
  const updateChanges= (text)=>{
    props.handleChangesList((prevHistory) => [...prevHistory,
      { userName: {userName}, change: text }
      ])  
    }

  async function loginUser() {
    localStorage.setItem('userName', userName);
    props.onLogin(userName);
    updateChanges("Logged In")
  }

  async function createUser() {
    localStorage.setItem('userName', userName);
    props.onLogin(userName);
    updateChanges("Created User and Logged In")
  }
  return (
    <>
    <section className="content">
    <div className="content_left">
      <form className="px-4 py-3">


        <div className="mb-1">
          <label htmlFor="email" className="form-label" >UserName</label>
          <input type="email" className="form-control" id="email" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder='userNameEx' />
        </div>
        <div className="mb-1">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        </div>


        <div className="login_buttons d-flex flex-wrap justify-content-sm-between">
          <Button variant='primary' onClick={() => loginUser()} disabled={!userName || !password}>
          Login
        </Button>
        <Button variant='secondary' onClick={() => createUser()} disabled={!userName || !password}>
          Create
        </Button>
        </div>
      </form>
      </div>


<div className="content_right" >
    <img src="images/provoTemple.png"/>

  </div>


</section>
    </>
  );
}