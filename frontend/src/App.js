import 'bulma/css/bulma.css'
import { useState, useEffect} from 'react';

import axios from 'axios';
import NoteCardView from './Components/NoteCardView'
import UserContext from './userContext';
import NotesContext from './NotesContext';
import HomePage from './Components/HomePage';




const App = () => {
  const [notes, setNotes] = useState([]);
  const [userDetails, setUserDetails] = useState({});
    
  async function handleNewNote(data){
    try{
      let note = {...data, createdAt: Date.now(), _id: notes.length + 1};
      if(userDetails.loggedIn){
          const newNote = (await axios.post("http://localhost:4000/notes", data, {
          headers:{
            "Content-Type" : "application/json"
          },
          withCredentials:true
        }))
        note = newNote.data.note
        
      }
      setNotes([<NoteCardView deleteNote={deleteNote} key={note._id} data={note}/>, ...notes]);
    }catch(err){
      console.log(err.message);
    }
    
  }


  async function editNote(id){
    try{

    }catch(err){

    }
  }


  async function deleteNote(id){
    try{
      if(userDetails.loggedIn){

        await axios.delete(`http://localhost:4000/notes/${id}`, {
          withCredentials: true
          })
          
      }
      setNotes(notes.filter((el) => el.key !== id));      

    }catch(err){
      console.log(err);
    }
  }

  const getNotes = async () => {
    
    try{
  
      const notes = await axios.get("http://localhost:4000/notes",{
        withCredentials: true
      });
      

      setNotes(notes.data.notes.map(note => <NoteCardView deleteNote={deleteNote} key={note._id} data={note}/>));
      
    }catch(err){
      console.log(err.message);

    }
    

  }
  async function initUserLogin(){
    try{
      
      const user = await axios.get("http://localhost:4000/user", {withCredentials: true});

      if(user){
        
        setUserDetails({loggedIn: true, ...user.data.user});
        getNotes();
        
      }
    }catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    
    
    initUserLogin();

  }, [])


  

  return (
    <UserContext.Provider value={{userDetails, setUserDetails}}>
        <NotesContext.Provider value={notes}>
          <HomePage handleNewNote={handleNewNote}/>
        </NotesContext.Provider>
    </UserContext.Provider>
  )
}

export default App