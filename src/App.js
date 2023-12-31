import Axios from 'axios';
import {useEffect, useState} from 'react';
import './App.css';
import ContactDataGrid from './ContactDataGrid.tsx';
import BASE_URL from './global-variables.tsx';
import Popup from "reactjs-popup";

function App() {

    const [name, setName] = useState("");
    const [id, setID] = useState("");
    const [error, setError] = useState("");

    const getContacts = () => {
        Axios.get(BASE_URL + '/api/Contacts')
            .then(resp => setContacts([...resp.data]))
            .catch(error => {

                let message = "Could not retrieve contacts: " + error.message + ", is the API running?";
                console.error(message);
                setError(message);
            });
    }

    const addContact = () => {
        Axios.post(BASE_URL + '/api/Contacts', {
            name: name
        });
        //todo: the reason why the table does not immediately update is because database does not instantly write it!
        //todo: a automation testing framework would have to wait for data to populate the rows
        //todo: what would be even better is to show a loading spinner on the table/for the cursor
        getContacts();
    }

    const deleteById = () => {
        Axios.delete(BASE_URL + '/api/Contacts/' + id);
        getContacts();
    }

    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        getContacts();
    }, []);

    return (
        <div className="App">
            {error &&
                <Popup defaultOpen={true} closeOnDocumentClick={false}>
                    <div>{error}</div>
                </Popup>
            }
            <ContactDataGrid contacts={contacts}/>

            <label>Name:</label>
            <input type="text"
                   onChange={(event) => {
                       setName(event.target.value);
                   }}
                   id="name-input"/>
            <button
                onClick={addContact}
                id="add-candidate-button">Add
            </button>

            <p></p>
            <label>ID:</label>
            <input type="text"
                   onChange={(event) => {
                       setID(event.target.value);
                   }}
                   id="id-input"/>
            <button
                onClick={deleteById}
                id="delete-candidate-button">
                Delete
            </button>
        </div>
    );
}

export default App;
