import React from 'react';

export function Changes(props) {
  const userName = localStorage.getItem('userName')
  const changes = props.props.changes

  const changesRender = changes.map((change, index) => {
    return (
      <tr key={index}>
        <td >
          {change.userName.userName}
          </td>
        <td> 
        {change.change}
        </td>
      </tr>
    );
  })

  const Table = () => {
    return (
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th scope="col">UserName</th>
            <th scope="col">Change</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {userName}
            </td>
            <td>
              Logged in
            </td>
          </tr>
            {changesRender}
        
        </tbody>
      </table>

    )
  }
  return (

    <div className="log_heading">
      <h4>Changes log</h4>
      <div className="table-responsive small">
        <Table />
      </div>
    </div>
  );
}