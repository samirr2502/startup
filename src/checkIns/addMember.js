  
  const [newUser, setInputValue] = React.useState('');
  const [changeMessage, setChangeMessage] = React.useState('');
  const userName = localStorage.getItem('userName');
  let updatedList = JSON.parse(localStorage.getItem('myList')) || [];

  const addChangeMessage = () =>{
    const table = document.querySelector('table.changes tbody');
  
    // Create a new row and cells

    const newRow = document.createElement('tr');
    const cell1 = document.createElement('td');
    const cell2 = document.createElement('td');
    setChangeMessage(" added member: " + newUser)

    cell1.textContent = userName;
    cell2.textContent = changeMessage;
    //Set the content of the cells

    // Append cells to the row
    newRow.appendChild(cell1);
    newRow.appendChild(cell2);
    
    // Append the row to the table
    table.appendChild(newRow);
  }




  const addNewMember =() =>{

    let errorP = document.querySelector('p.errorMessage')

    if (newUser == ""){
      errorP.textContent= "Cannot be empty"
      return
    } 
    if (updatedList.includes(newUser)){
      errorP.textContent= "Already added"
      console.log(updatedList)
      return
    }


    errorP.textContent= ""

    // Find the table with class 'members'
    const table = document.querySelector('table.members tbody');
  
    // Create a new row and cells

    const newRow = document.createElement('tr');
    const cell1 = document.createElement('td');
    const cell2 = document.createElement('td');
    const checkBox = document.createElement('input')
    checkBox.type = 'checkbox'
    cell2.appendChild(checkBox)
    //Set the content of the cells
    cell1.textContent = newUser;
    updatedList.push(newUser)
    setChangeMessage(userName + " added member: " + newUser)
    // Append cells to the row
    newRow.appendChild(cell1);
    newRow.appendChild(cell2);
    
    // Append the row to the table
    table.appendChild(newRow);
  }
