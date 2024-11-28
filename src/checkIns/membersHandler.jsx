import React from "react";
import './checkIn.css'
import Button from 'react-bootstrap/Button';
import { ChangeNotifier } from './changeNotifier';


export default function MembersHandler(props) {
  const userName = localStorage.getItem("userName")
  const [selectedMember, setSelectedMember] = React.useState(null);
  const [members_, setMembers_] = React.useState([]);

  React.useEffect(() => {
    fetchMembers();
  }, []);
  
  async function fetchMembers() {
    const response = await fetch('/api/members');
    const members = await response.json();
    setMembers_(members);
  }
  //Savechanges
  const updateChanges= (text)=>{

    // props.props.handleChangesList((prevHistory) => [...prevHistory,
    //   { userName: {userName}, change: text }])

    ChangeNotifier.broadcastChange({userName},text);
  }

  //Update Check Ins
  const updateCheckedIn = async (member, index) => {
    let text=" Checked member: " + member.name

    if (!member.checkedIn){
      text += " In"
    } else {
      text += " Out"
    }
    // const updatedMember = {name: member.name, checkedIn: !member.checkedIn}
    checkInMember(member)
    updateChanges(text)
  }
  async function checkInMember(member) {
    
    const response = await fetch('/api/member/checkIn', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({memberName:member.name, checkedIn: !member.checkedIn}),
    });
    if (response?.status === 200) {
      await fetchMembers();

    } else {
      const body = await response.json();
      setDisplayError(`⚠ Error: `);
    }
  }


  //add a new member
  const addMemberNew = async (e) => {
    const value = document.getElementById('name').value
    const errorMessage = document.getElementById('errorMessage')
    //Cannot be empty
    if (value == '') {
      errorMessage.textContent = "cannot add empty member"
      return
    }
    //Cannot Exist
    const memberExists = members_.some(
      (member) => member.name.toLowerCase() === value.toLowerCase()
    );
    if (memberExists) {
      errorMessage.textContent = "Member already exists"
      return
    }
    //Set member
    saveMembers(value)
    errorMessage.textContent = ""
    await fetchMembers()

    let text = "Added member: " + value
    updateChanges(text)
  }
  async function saveMembers(value) {
    const newMember = { name:value, checkedIn: false };
    const response = await fetch('/api/member', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newMember),
    });
    if (response?.status === 200) {
      await fetchMembers();

    } else {
      const body = await response.json();
      setDisplayError(`⚠ Error: `);
    }
  }

  //RemoveMember
  const removeMember = async (member, index) => {
    //setMembers_( (prevList) =>   prevList.filter((_, i) => i !== index));
    const response = await fetch('/api/remove', {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({memberName:member.name}),
    });
    if (response?.status === 200) {
      await fetchMembers();

    } else {
      const body = await response.json();
      setDisplayError(`⚠ Error: `);
    }

    let text = "Removed member: " + member.name
    updateChanges(text)

  }

  //Render Members List
  const membersRender = members_.map((member, index) => {
    return (
      <tr key={index}>
        <td>
          {member.name}</td>
        <td> <input type="checkbox"
          checked={member.checkedIn}
          onChange={() => updateCheckedIn(member, index)} />

          <button className="removeButton" onClick={() => removeMember(member, index)} >x</button>

        </td>
      </tr>
    );
  });
  const resetData =  () => {
    console.log(members_)
     fetch('/api/clear', {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' }
    });

    setMembers_([])
    let text = "cleared Data"
    updateChanges(text)
  }

  const AddButtons = () => {
    return (
      <div className="save_buttons d-flex flex-wrap add_buttons">
        <input required type="text" id="name" placeholder="memberName"className="inputTextName" autoComplete="true"
        />
        <a className="add_member btn btn-success" onClick={(e) => addMemberNew(e)} role="button">+</a>
        <Button onClick={() => resetData()}> Reset</Button>
      </div>
    );
  }
  const Table = () => {
    return (
      <table className="table table-striped table-sm members">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Checked In</th>
          </tr>
        </thead>
        <tbody>
          {membersRender}
        </tbody>
      </table>
    )
  }
  return (
    <>      
    <AddButtons />
    <p id="errorMessage"></p>

      <Table />
    </>
  );
}