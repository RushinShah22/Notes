import NewNoteView from "./NewNoteView";
import NavBarView from "./NavBarView";

import  { useMyNotesContext } from "../NotesContext";
import NoteCardView from "./NoteCardView";
import { Link } from "react-router-dom";


function HomePage( {handleNewNote}) {
   const {notes}= useMyNotesContext();
   
    return (
    <div>
        <div><NavBarView/></div>
        <section className='section'><NewNoteView onSubmit={handleNewNote}/></section>
        <section className='section'>
        <div className='grid is-gap-4.5 is-col-min-12'>
        {notes.map(el =>  <NoteCardView key={el._id} data={el}/>)}
        
        </div>
        </section>    
    </div>
    )
}

export default HomePage;