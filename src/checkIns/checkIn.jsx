import React from 'react';
import MembersHandler from './membersHandler'
export function CheckIn(props){
    return (
            <div className="members_add_delete" >
            <h4>Members List</h4>
              <MembersHandler props={props}/>
            </div>
    );
}