import React from "react";
import './checkIn.css'
import Button from 'react-bootstrap/Button';

export default function MembersHandler(props) {
  const userName = localStorage.getItem("userName")
  const [selectedMember, setSelectedMember] = React.useState(null);
  const [members_, setMembers_] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/members');
      const members_ = await response.json();
      setMembers_(members_);
    }
    fetchData();
  }, []);
  

  //Savechanges
  const updateChanges= (text)=>{
    props.props.handleChangesList((prevHistory) => [...prevHistory,
      { userName: {userName}, change: text }
      ])  
    }

  //Update Check Ins
  const updateCheckedIn = async (index) => {
    
    setMembers_((prevList) =>
      prevList.map((member, i) =>
        i === index ? { ...member, checkedIn: !member.checkedIn } : member
      )
    );
    const member= await getMember(index)
    let text=" Checked member: " + member.name

    if (!member.checkedIn){
      text += " In"
    } else {
      text += " Out"
    }
    updateChanges(text)
  }
  const getMember = (index) => {
    return new Promise((resolve, reject) => {
        if (index >= 0 && index < members_.length) {
            const member = members_[index];
            setSelectedMember(member);
            resolve(member);
        } else {
            reject("Invalid member index");
        }
    });
};

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
    console.log(members_)
    savedMembers(value)
    console.log(members_)
    errorMessage.textContent = ""
    let text = "Added member: " + value
    updateChanges(text)
  }
  async function savedMembers(value) {
    const newMember = { name:value, checkedIn: false };
    console.log(newMember)
    await fetch('/api/member', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newMember),
    });
    setMembers_([...members_, newMember])
  }

  //RemoveMember
  const removeMember = async (index) => {
    setMembers_( (prevList) =>   prevList.filter((_, i) => i !== index));
    await fetch('/api/remove', {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({i:index}),
    });
    console.log(members_)
    const member=  await getMember(index)
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
          onChange={() => updateCheckedIn(index)} />

          <button className="removeButton" onClick={() => removeMember(index)} >x</button>

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