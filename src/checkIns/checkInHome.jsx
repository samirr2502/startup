import React from 'react';
import { CheckIn } from './checkIn';
import {LogInfo} from './logInfo/logInfo'

export function CheckInHome() {
  const [changesList, setChangesList] = React.useState(()=>{
    const savedChanges = localStorage.getItem('changesList');
    return savedChanges ? JSON.parse(savedChanges) : [];
})
React.useEffect(() => {
  localStorage.setItem('changesList', JSON.stringify(changesList));
}, [changesList]);

  return (
    <main className="bd-example col-md-9">
      <section className="title">
        <h1>Check in and View Log</h1>
      </section>

      <section className="content">
        <div className="content_left checkIn">
         <CheckIn changes={changesList} handleChangesList={setChangesList}/>
        </div>

        <div className="content_right logInfo">
         <LogInfo changes={changesList} handleChangesList={setChangesList}/>
        </div>

      </section >
    </main>
  );
}