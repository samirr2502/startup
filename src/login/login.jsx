import React from 'react';
import { Auth } from './authenticated';
import { UnAuth } from './unauthenticated';
import { AuthState } from './authState';
import { UserHandler } from './UserHandler';



export function Login(props) {

  const [changesList, setChangesList] = React.useState(()=>{
    const savedChanges = localStorage.getItem('changesList');
    return savedChanges ? JSON.parse(savedChanges) : [];
})
React.useEffect(() => {
  localStorage.setItem('changesList', JSON.stringify(changesList));
}, [changesList]);


  return (
    <main className="bd-example col-md-9">
      <section className="title">
        <h1>CheckIn's Log In</h1>
      </section>


          {props.authState === AuthState.Authenticated && (
            <Auth
              userName={props.userName}
              onLogout={() =>
              props.onAuthChange(props.userName, AuthState.Unauthenticated)}
              changes={changesList} 
              handleChangesList={setChangesList} 
              
              />
          )}

          {props.authState === AuthState.Unauthenticated && (
            <UnAuth
              userName={props.userName}
              onLogin={(loginUserName) => {
                props.onAuthChange(loginUserName, AuthState.Authenticated);
              }} 
              changes={changesList} 
              handleChangesList={setChangesList}
              props={props}
              />
          )}

<UserHandler
 usersList= {props.usersList}
 setUsersList ={props.setUsersList}
 setCurrentUser = {props.setCurrentUser}/>
    </main>
  );
}