import 'bulma/css/bulma.css'
import { useState, useEffect} from 'react';
import axios from 'axios';
import NavBarView  from './View/NavBarView'
import NoteCardView from './View/NoteCardView'
import NewNoteView from './View/NewNoteView'



const App = () => {
  const [notes, setNotes] = useState([]);

  async function getNotes(){
    const notes = await axios.get("http://localhost:4000/notes",{
      withCredentials: true
    });
    // setNotes(notes.notes);

  }
  function handleNewNote(data){
    setNotes([<NoteCardView data={data}/>, ...notes]);
  }
  

  return (
    <div>
       <div><NavBarView /></div>
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