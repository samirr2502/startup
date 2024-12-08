import React, { createElement, useEffect } from 'react';


export function Home(props) {
  const [text, setText]= React.useState("");



  //   ws.onopen = ()=>{
  //     console.log("open")
  //   }
  //   ws.onmessage = async (event) => {
  //   await fetchText()
  // };
  React.useEffect(() => {
    let port = window.location.port;
    
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    const socket =  new WebSocket(`${protocol}://${window.location.hostname}:${port}/ws`);

    console.log(socket.con)
  // Display that we have opened the webSocket
  socket.onopen = (event) => {
    console.log("opened")
    //appendMsg('system', 'websocket', 'connected');
  };
  
  // Display messages we receive from our friends
  socket.onmessage = async (event) => {
    console.log("attempting onmeesage")
    let text = event.data
    let container = document.getElementById("container")
    // container.classList.add('highlight')
    // container.classList.remove('fadeout')

    let newElement = document.createElement('h1')
    newElement.textContent = JSON.parse(text).value
    newElement.style.padding = '5px';
    newElement.style.margin = '5px 0';
    container.innerHTML = null
    container.classList.add('fadeout')
    container.appendChild(newElement)
    setTimeout(()=>{
      container.classList.remove('fadeout')
      container.innerHTML = null

    }, 3000)    


  };
  const fadeElement = document.getElementById('updatedText');

    function fadeInOut() {
      fadeElement.classList.toggle('fade-out');
    }
  socket.onclose = (event) => {
  };
  })

  // React.useEffect(() => {
  //   fetchText(); // Fetch initial data
  //   const interval = setInterval(fetchText, 1000); // Poll every 5 seconds
  //   return () => clearInterval(interval); // Clean up the interval on unmount
  // }, []); // Empty dependency array ensures this runs only once after mount

  async function fetchText() {
    console.log("attempt to fetch")
    try {
      const response = await fetch('/api/text');
      const text = await response.json();
      setText(text.value)
      //localStorage.setItem('savedText',"test");
      console.log(text.value)
      //setText("test");
    } catch (error) {
      console.error('Failed to fetch members:', error);
    }
  }
  return (
    <main className="client">
      <div className="target_text">
        
        
        <h2>{text}</h2>
        <div id="container"></div>
        <h1 id="updatedText"></h1>

      </div>
    </main>
  );
}