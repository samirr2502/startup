import React from 'react';
import { UsersLogged } from './usersLogged';
import { Changes } from './changes';

export function LogInfo(props) {
  return (
    <div className="meeting_edit_log">
      <UsersLogged />
      <hr/>

      <Changes props={props} />
    </div>
  );
}