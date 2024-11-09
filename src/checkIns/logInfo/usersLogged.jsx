import React from 'react';

export function UsersLogged() {
  const userName = localStorage.getItem('userName')

  const Table = () => {
    return(
    <table className="table table-striped table-sm">
      <thead>
        <tr>
          <th scope="col">UserName</th>
        </tr>
      </thead>
      <tbody>
        <tr>
        <td>
          {userName}
        </td>
        </tr>
      </tbody>
    </table>

)}
  return (
    <div className="log_heading">
      <h4>Users Logged</h4>
      <div className="table-responsive small">
        <Table />
      </div>
    </div>
  );
}