import React from 'react';
import Button from 'react-bootstrap/Button';
import { ChangeNotifier } from '../changeNotifier';
export function Changes(props) {
  const userName = localStorage.getItem('userName')
  const changes_old = props.props.changes
  const [changes, setChanges] = React.useState([]) 
  
  React.useEffect(()=>{
    ChangeNotifier.addHandler(handleChangesList)
    return () => {
      ChangeNotifier.removeHandler(handleChangesList);
    }
  })
  function handleChangesList(change) {
    setChanges([...changes, change]);
  }
  const clearChanges = ()=>{
   setChanges([])
  }
  const changesRender = [...changes].reverse().map((change, index) => {
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
            {changesRender}
        
        </tbody>
      </table>

    )
  }
  return (

    <div className="log_heading">
      <h5>Changes log</h5>
      <div className="table-responsive small">
      <Button variant='danger' onClick={() => clearChanges()} >
          Clear
        </Button>
        <Table />
      </div>
    </div>
  );
}
