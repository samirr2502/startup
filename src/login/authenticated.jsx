import React from 'react';
import { useNavigate } from 'react-router-dom';

export function Auth(props) {
  const [userName, setUserName] = React.useState(props.userName);

  const navigate = useNavigate();
  const updateChanges= (text)=>{
    props.handleChangesList((prevHistory) => [...prevHistory,
      { userName: {userName}, change: text }
      ])  
    }
  async function logout() {
    localStorage.removeItem('userName');
    props.onLogout();
    updateChanges("Logged Out")
  }

  return (
    <>
    
      <section className="content">
        <div className="content_left">
          <form className="px-4 py-3">
            <div className="mb-1">
              <h3>Welcome {userName}</h3>
              <a className="btn btn-primary" role="button"
                onClick={() => navigate('/checkInHome')}>
                Check In
              </a>
            </div>
            <div className="mb-1">

              <a className="btn btn-secondary" role="button"
                onClick={() => logout()}>
                Logout
              </a>
            </div>
          </form>
          <div id="api_phrase_div">
            <p>This will have a cool phrase coming from an API</p>
          </div>

        </div>


        <div className="content_right" >
          <img src="images/topView.png" />

        </div>


      </section>
    </>
  );
}