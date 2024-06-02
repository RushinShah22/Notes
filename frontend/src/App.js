import 'bulma/css/bulma.css'
import { useState, useEffect} from 'react';
import axios from 'axios';
import NavBarView  from './View/NavBarView'
import NoteCardView from './View/NoteCardView'
import NewNoteView from './View/NewNoteView'



const App = () => {
  const [notes, setNotes] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  function makeUserLoggedIn(){
    console.log("YESSSS");
    setIsLoggedIn(true);
  }

  function makeUserLogout(){
    setIsLoggedIn(false);
    setNotes([])
  }

  const getNotes = async () => {
    try{
      const notes = await axios.get("http://localhost:4000/notes",{
        withCredentials: true
      });
    
      setNotes(notes.data.notes.map(note => <NoteCardView key={note._id} data={note}/>));
      if(!isLoggedIn)setIsLoggedIn(true);
      
    }catch(err){
      console.log(err.message);
    }
    

  }
  async function handleNewNote(data){
    try{
      let note = {...data, createdAt: Date.now(), _id: setNotes.length + 1};
      if(isLoggedIn){
          const newNote = (await axios.post("http://localhost:4000/notes", data, {
          headers:{
            "Content-Type" : "application/json"
          },
          withCredentials:true
        }))
        note = newNote.data.note
        
      }
      setNotes([<NoteCardView key={note._id} data={note}/>, ...notes]);
    }catch(err){
      console.log(err.message);
    }
    
  }

  useEffect(() => {
    getNotes()
    return () => {}
  }, [isLoggedIn]);
  // getNotes();

  return (
    <div>
       <div><NavBarView userLogIn={makeUserLoggedIn} userLogout={makeUserLogout} isSignedIn={isLoggedIn}/></div>
       <section className='section'><NewNoteView onSubmit={handleNewNote}/></section>
       <section className='section'>
        <div className='grid is-gap-4.5'>
          {notes}
        </div>
       </section>
    </div>

  )
}

export default App