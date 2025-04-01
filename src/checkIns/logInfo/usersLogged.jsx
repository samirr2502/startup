import React from 'react';

export function UsersLogged() {
  const userName = localStorage.getItem('userName')

  return (
    <div className="log_heading">
      <h5>Logged in as:</h5>
      <div className="table-responsive small">
       <h2> {userName}</h2>
      </div>
    </div>
  );
}