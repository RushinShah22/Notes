import NewNoteView from "./NewNoteView";
import NavBarView from "./NavBarView";
import NotesContext from "../NotesContext";
import { useContext } from "react";

function HomePage( {handleNewNote}) {
    const notes = useContext(NotesContext)
    return (
    <div>
        <div><NavBarView/></div>
        <section className='section'><NewNoteView onSubmit={handleNewNote}/></section>
        <section className='section'>
        <div className='grid is-gap-4.5 is-col-min-12'>
        {notes}
        </div>
        </section>    
    </div>
    )
}

export default HomePage;