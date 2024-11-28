import React from 'react';

export function UsersLogged() {
  const userName = localStorage.getItem('userName')

//   const Table = () => {
//     // return(
//     // <table className="table table-striped table-sm">
//     //   <thead>
//     //     <tr>
//     //       <th scope="col">UserName</th>
//     //       <th scope="col">{userName}</th>

//     //     </tr>
//     //   </thead>
//     // </table>

// )}
  return (
    <div className="log_heading">
      <h5>Logged in as:</h5>
      <div className="table-responsive small">
       <h2> {userName}</h2>
      </div>
    </div>
  );
}