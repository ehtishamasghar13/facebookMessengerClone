import './App.css';
import React, {useState} from 'react';

function App() {
  const [input, setInput]=useState('');
  const [messages, setMessages] =useState(['Hellow','Hi','whatsup']);
  console.log(input);
  console.log(messages);
  const sendMessage=(event) => {
    //all the logic to send a message goes 
    setMessages([...messages, input]);
    setInput('');
  }
  return (
    <div className="App">
      <h1>Hellow programmers</h1>
      <input value={input} onChange={event => setInput(event.target.value)} />
      <button onClick={sendMessage}>Send Message</button>
    </div>
  );
}

export default App;
