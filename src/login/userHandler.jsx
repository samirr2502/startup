import React from 'react';

export function UserHandler(props) {

  const getUser = async (name) => {
    return new Promise((resolve, reject) => {
      const user = props.usersList.find((user) => user.userName === name)
      if(user){
            props.setCurrentUser(user);
            resolve(user);
        } else {
            reject("Member Not found");
        }
    })
  }
  //getUser('samir')
  
  return (
<></>
);
}