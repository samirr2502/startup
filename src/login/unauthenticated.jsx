import React from 'react';
import Button from 'react-bootstrap/Button';
import './login.css'
export function UnAuth(props) {
  const [userName, setUserName] = React.useState(props.userName);
  const [password, setPassword] = React.useState('');
  //const [displayError, setDisplayError] = React.useState(null);
  const updateChanges= (text)=>{
    props.handleChangesList((prevHistory) => [...prevHistory,
      { userName: {userName}, change: text }
      ])  
    }

    const getUser = async (name) => {
      return new Promise((resolve, reject) => {
        const user = props.props.usersList.find((user) => user.userName === name)
        if(user){
              props.props.setCurrentUser(user);
              resolve(user);
          } else {
            resolve()
          }
      })
    }

  async function loginUser() {
    const errorMessage = document.getElementById('logInErrorMessage')

    const user = await getUser(userName)
    if(!user) {
      errorMessage.textContent = "User Doesn't Exist"
      return 
    }
    if(user.password == password){
    localStorage.setItem('userName', userName);
    props.onLogin(userName);
    updateChanges("Logged In")
    } else {
      errorMessage.textContent = "Wrong Password, Contact Admin in case forgot"
    }
  }

  async function createUser() {
    const errorMessage = document.getElementById('logInErrorMessage')

    const user = await getUser(userName)
    console.log(user)
    if(!user){
      props.props.setUsersList((prevHistory) => [...prevHistory,
        { userName: userName, password: password, authState: props.authState }
        ])
      
    localStorage.setItem('userName', userName);
    props.onLogin(userName);
    updateChanges("Created User and Logged In")
    }
    else {
      errorMessage.textContent = "User Already Exists"
    }
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
        <p id="logInErrorMessage"></p>

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