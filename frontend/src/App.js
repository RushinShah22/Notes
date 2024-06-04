import 'bulma/css/bulma.css'
import { useEffect} from 'react';

import axios from 'axios';



import HomePage from './Components/HomePage';
import { useMyNotesContext } from './NotesContext';




const App = () => {
  
  const {notes, setNotes,user, setUser} = useMyNotesContext();
 
  
   
  async function handleNewNote(data){
    try{
      let note = {...data, createdAt: Date.now(), _id: notes.length + 1 + ''};
      if(user.loggedIn){
          const newNote = (await axios.post("http://localhost:4000/notes", data, {
          headers:{
            "Content-Type" : "application/json"
          },
          withCredentials:true
        }))
        note = newNote.data.note
        
      }
      setNotes([note, ...notes]);
    }catch(err){
      console.log(err.message);
    }
    
  }



  

  const getNotes = async () => {
    
    try{
  
      const notes = await axios.get("http://localhost:4000/notes",{
        withCredentials: true
      });
      

      setNotes(notes.data.notes.map(note => {
        return {...note, loggedIn: user.loggedIn}
      }));
      
    }catch(err){
      console.log(err.message);

    }
    

  }
  async function initUserLogin(){
    try{
      
      const user = await axios.get("http://localhost:4000/user", {withCredentials: true});

      if(user){
        setUser({loggedIn: true, ...user.data.user});
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

    <HomePage handleNewNote={handleNewNote}/>
   
  )
}

export default App