import 'bulma/css/bulma.css'
import { useState } from 'react';
import axios from 'axios'
import { useMyNotesContext } from '../NotesContext';
import { useNavigate } from 'react-router-dom';

function NewNoteView(){
    const {user, setNotes, notes} = useMyNotesContext();
    const [title, setTitle] = useState('');
    const [note, setNote] = useState('');
    const navigate = useNavigate();

    
    function handleCreateClick(e){
        const data = {
            title,
            note
        }
        async function handleNewNote(data){
            try{
                navigate("/loader");
              let note = {...data, createdAt: Date.now(), _id: notes.length + 1 + ''};
              if(user.loggedIn){
                  const newNote = (await axios.post(`${process.env.REACT_APP_BACKEND_URL}/notes`, data, {
                  headers:{
                    "Content-Type" : "application/json"
                  },
                  withCredentials:true
                }))
                note = newNote.data.note
                
              }
              setNotes([note, ...notes]);
              navigate("/")
            }catch(err){
                navigate("/")
              console.log(err.message);
            }
            
          }
        setTitle('');
        setNote('');
        handleNewNote(data);
        
    }

    
   return (
    <div style={{"margin": "2rem"}}>
        <div className="box title is-4"><strong>WHATS ON YOUR MIND!!!</strong></div>
        <div className="field">
            <div className="control">
                <input className="input is-medium" type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
            </div>
        </div>
        <div className="field">
            <div className='control'>
                <textarea className="textarea" value={note} onChange={(e) => setNote(e.target.value)}placeholder="Your Note..." />
            </div>
        </div>
        <div className="field is-grouped">
            <div className="control">
                <button className="button is-link" onClick={handleCreateClick}>Create</button>
            </div>
        </div>

    </div>
        
   )
}

export default NewNoteView