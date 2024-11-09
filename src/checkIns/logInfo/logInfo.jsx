import React from 'react';
import { UsersLogged } from './usersLogged';
import { Changes } from './changes';

export function LogInfo(props) {
  return (
    <div className="meeting_edit_log">
      <h4>Session log</h4>
      <hr/>
      <UsersLogged />
      <hr/>

      <Changes props={props} />
    </div>
  );
}