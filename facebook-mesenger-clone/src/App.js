import React, {useState, useEffect} from 'react';
import  Button from '@material-ui/core/Button';
import FormControl  from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel'
import Message from './Message'
import './App.css';


function App() {
  const [input, setInput]=useState('');
  const [messages, setMessages] =useState([
    {username: 'malik' , text: 'hey guys'},
    {username:'ehtish', text: 'whats up'}
  ]);
  const [username, setUsername] = useState('');

  //useState = temporary memory which dissapper when page refreshes
  //userEffect= run a snippet of code when condition met in REACT

  useEffect(() => {
    // run code her
      // if its blank inside [], this code runs once when app components loads
     setUsername (prompt('Please enter your name....'))
     
  }, [])  // condition

  //console.log(input);
  //console.log(messages);
  const sendMessage=(event) => {
    event.preventDefault();
    setMessages([...messages, {username: username, text: input }]);
    setInput('');
  }
  return (
    <div className="App">
      <h1>Hellow programmers</h1>
      <h2>Welcome {username}</h2>
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
          <Message username={username} message={message}/>
        ))
      }
      
    </div>
  );
}

export default App;
