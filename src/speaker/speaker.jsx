import React from 'react';


export function Speaker(props) {

  const [commonTextList, setCommonTextList]=  React.useState([]);
  
  
  let port = window.location.port;

  const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
const socket =  new WebSocket(`${protocol}://${window.location.hostname}:${port}/ws`);

// Display that we have opened the webSocket
socket.onopen = (event) => {
  console.log("opened")
  //appendMsg('system', 'websocket', 'connected');
};



async function sendText() {
  const value = document.getElementById("sendTextArea").value;
  //console.log(value)
  const text = { value:value };
  console.log(text)
  socket.send(JSON.stringify(text))
  // const response = await fetch('/api/send', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(text),
  // });

  // if (response.ok) {
  //   //console.log(response.body)
  //   console.log("Text broadcasted successfully");
  // } else {
  //   console.error("Error broadcasting text");
  //   const body = await response.json();
  //   setDisplayError(`⚠ Error: `);
  // }
}
  const addCommonText = ()=>{
    const value = document.getElementById("newText").value
    setCommonTextList([...commonTextList,value])
  }
  const removeText= (textToRemove)=>{
    setCommonTextList((prevItems) => prevItems.filter((item) => item !== textToRemove));
  };
  
  const useText = (text)=>{
    const textArea = document.getElementById("sendTextArea")
    textArea.value = text
    console.log(text)
  }
  

   const CommonText = [...commonTextList]
  //.sort((a, b) => a.value.localeCompare(b.value))
  .map((text, index) => {
    return (
      <ul key={index}>
        <li className="" > 
          <span className="useText" onClick={() => useText(text)}>{text}</span>
           <span className="removeText" onClick={() =>removeText(text)}>x</span>
        </li>
      </ul>
    );
  });


  return (
    <main className="speakerHome">
      <div className='textInput'>
        <h3>Input</h3>
        <textarea id="sendTextArea"></textarea>
        <button onClick={()=>sendText()}>Send</button>
      </div>

      <div className='commonTextButtons'>
        <h3>Common Texts</h3>
        <p>click to use</p>
        <input id="newText" type="text"></input>
        <button onClick={()=> addCommonText()}> add</button>
        {CommonText}
      </div>

    </main>
  );
}