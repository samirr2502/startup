import React from "react";
import './checkIn.css'
export default function MembersHandler(props) {
  const userName = localStorage.getItem("userName")

  const [membersAll, setMembersAll] = React.useState(() => {
    const savedMembers = localStorage.getItem('membersAll');
    return savedMembers ? JSON.parse(savedMembers) : [];
  });

  const [selectedMember, setSelectedMember] = React.useState(null);

  React.useEffect(() => {
    localStorage.setItem('membersAll', JSON.stringify(membersAll));
  }, [membersAll]);

  //Savechanges
  const updateChanges= (text)=>{
    props.props.handleChangesList((prevHistory) => [...prevHistory,
      { userName: {userName}, change: text }
      ])  
    }

  //Update Check Ins
  const updateCheckedIn = async (index) => {
    
    setMembersAll((prevList) =>
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
  const getMember = async (index) => {
    return new Promise((resolve, reject) => {
        if (index >= 0 && index < membersAll.length) {
            const member = membersAll[index];
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
    const memberExists = membersAll.some(
      (member) => member.name.toLowerCase() === value.toLowerCase()
    );
    if (memberExists) {
      errorMessage.textContent = "Member already exists"
      return
    }
    //Set member
    setMembersAll((prevHistory) => [...prevHistory,
    { name: value, checkedIn: false }
    ])
    let text = "Added member: " + value
    updateChanges(text)

  }
  //RemoveMember
  const removeMember = async (index) => {
    setMembersAll((prevList) => prevList.filter((_, i) => i !== index));
    const member= await getMember(index)
    let text = "Removed member: " + member.name
    updateChanges(text)

  }

  //Render Members List
  const membersRender = membersAll.map((member, index) => {
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


  const AddButtons = () => {
    return (
      <div className="save_buttons d-flex flex-wrap">
        <input required type="text" id="name" className="inputTextName" autoComplete="true"
        />
        <a className="btn btn-success" onClick={(e) => addMemberNew(e)} role="button">
          Add Member
        </a>
        <p id="errorMessage"></p>
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
      <Table />
      <AddButtons />
    </>
  );



}