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
      </section>

      <section className="content">
        <div className="content_left">
         <CheckIn changes={changesList} handleChangesList={setChangesList}/>
        </div>

        <div className="content_right">
         <LogInfo changes={changesList}/>
        </div>

      </section >
    </main>
  );
}