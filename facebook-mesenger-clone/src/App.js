import React, {useState} from 'react';
import  Button from '@material-ui/core/Button';
import FormControl  from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel'
import Message from './Message'
import './App.css';


function App() {
  const [input, setInput]=useState('');
  const [messages, setMessages] =useState(['Hellow','Hi','whatsup']);
  //console.log(input);
  //console.log(messages);
  const sendMessage=(event) => {
    event.preventDefault();
    setMessages([...messages, input]);
    setInput('');
  }
  return (
    <div className="App">
      <h1>Hellow programmers</h1>
      <form>
      <FormControl>
        <InputLabel >Enter a message...</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)} />
        {<Button variant="contained" color="primary" disabled={!input} onClick={sendMessage} type="submit">Send Message</Button> }
      </FormControl>
        {/* <button variant="outlined" onClick={sendMessage} type="submit">Send Message</button> */}
        

      </form>

      {
        messages.map(message => (
          <Message text={message}/>
        ))
      }
      
    </div>
  );
}

export default App;
