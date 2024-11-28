import React from "react";
import './checkIn.css'
import {ChangeType, ChangeNotifier } from './changeNotifier';

export default function MembersHandler(props) {
  const userName = localStorage.getItem("userName")
  const [members_, setMembers_] = React.useState([]);
  React.useEffect(() => {
    fetchMembers();
    //This makes sure the database updates render back in the other clients side
    // Set up WebSocket connection
    let port = window.location.port;
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    const ws = new WebSocket(`${protocol}://${window.location.hostname}:${port}/ws`);
    ws.onmessage = async (event) => {
    await fetchMembers()
  };
  // Clean up WebSocket 
  return () => {
    ws.close();
  };
  }, []);
  
  async function fetchMembers() {
    try {
      const response = await fetch('/api/members');
      const members = await response.json();
      setMembers_(members);
    } catch (error) {
      console.error('Failed to fetch members:', error);
    }
  }

  //Savechanges
  const updateChanges= (text, changeType)=>{
    ChangeNotifier.broadcastChange({userName},text,changeType);
  }

  //Update Check Ins
  const updateCheckedIn = async (member, index) => {
    //Get's called by the Button on the page
    let text=" Checked member: " + member.name

    if (!member.checkedIn){
      text += " In"
    } else {
      text += " Out"
    }
    await checkInMember(member)
    await fetchMembers()
    updateChanges(text, ChangeType.UpdateMember)

  }

  async function checkInMember(member) {
    //Get's called by updateCheck it to make the fetch request
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
    updateChanges(text, ChangeType.NewMember)
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
    updateChanges(text, ChangeType.NewMember)

  }

  //Render Members List
  const membersRender = [...members_]
  .sort((a, b) => a.name.localeCompare(b.name)).map((member, index) => {
    return (
      <tr key={index}>
        <td>
          {member.name}</td>
        <td> <input type="checkbox"
          checked={member.checkedIn}
          onChange={() => updateCheckedIn(member, index)}
          />
          <button className="removeButton" onClick={() => removeMember(member, index)} >x</button>

        </td>
      </tr>
    );
  });
  // Need to import Button component to use in case need to reset data
  // const resetData =  () => {
  //    fetch('/api/clear', {
  //     method: 'DELETE',
  //     headers: { 'content-type': 'application/json' }
  //   });

  //   setMembers_([])
  //   let text = "cleared Data"
  //   updateChanges(text)
  // }

  const AddButtons = () => {
    return (
      <div className="save_buttons d-flex flex-wrap add_buttons">
        <input required type="text" id="name" placeholder="memberName"className="inputTextName" autoComplete="true"
        />
        <a className="add_member btn btn-success" onClick={(e) => addMemberNew(e)} role="button">+</a>
        {/* <Button onClick={() => resetData()}> Reset</Button>
        <Button onClick={() => fetchMembers()}> Refresh</Button> */}
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