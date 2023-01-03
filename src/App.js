import './App.css';
import { useState } from 'react';
import Axios from 'axios';

function App() {
  const baseURL = "https://localhost:7091"

  const [name, setName] = useState("");
  const [id, setID] = useState("");

  const getContacts = () => {
    console.log(name);
    Axios.get(baseURL + '/api/Contacts');
  }

  const addContact = () => {
    console.log(name);
    Axios.post(baseURL + '/api/Contacts', {
      name: name
    });
  }

  const deleteById = () => {
    console.log(id);
  }
  
  return (
    <div className="App">
      <label>Name:</label>
      <input type="text" 
      onChange={(event)=>{
        setName(event.target.value);
      }}
      id="name-input"/>
      <button 
      onClick={addContact}
      id="add-candidate-button">Add</button>

      <p></p>
      <label>ID:</label>
      <input type="text" 
      onChange={(event)=>{
        setID(event.target.value);
      }}
      id="id-input"/>
      <button 
      onClick={deleteById}
      id="delete-candidate-button">Delete</button>
    </div>
  );
}

export default App;
