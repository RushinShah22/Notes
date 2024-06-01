import 'bulma/css/bulma.css'
import NavBarView  from './View/NavBarView'
import NoteCardView from './View/NoteCardView'
import LogInView  from './View/LogInView'
import NewNoteView from './View/NewNoteView'

const App = () => {
  return (
    <div>
       <NavBarView /> 
      <section className="section"> <NewNoteView /> </section>
      <section className='section'><h1 class="title box is-4">YOUR THOUGHTS!!!</h1></section>
      <section className='section grid is-col-min-12 is-gap-2.5 is-column-gap-6.5'>
        
        <div className="cell"><NoteCardView data={{title:"Test", note: "This is a test Note"}}/></div>
        <div className="cell"><NoteCardView data={{title:"Test", note: "This is a test Note"}}/></div>
        <div className="cell"><NoteCardView data={{title:"Test", note: "This is a test Note"}}/></div>
        <div className="cell"><NoteCardView data={{title:"Test", note: "This is a test Note"}}/></div>
        <div className="cell"><NoteCardView data={{title:"Test", note: "This is a test Note"}}/></div>
        <div className="cell"><NoteCardView data={{title:"Test", note: "This is a test Note"}}/></div>
        <div className="cell"><NoteCardView data={{title:"Test", note: "This is a test Note"}}/></div>
        <div className="cell"><NoteCardView data={{title:"Test", note: "This is a test Note"}}/></div>

        <div className="cell"><NoteCardView data={{title:"Test", note: "This is a test Note"}}/></div>
      
      </section>
    </div>

  )
}

export default App