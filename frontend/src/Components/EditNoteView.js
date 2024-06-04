import 'bulma/css/bulma.css'
import { useState } from 'react';
import axios from 'axios'
import { Link,useNavigate, useParams } from 'react-router-dom'
import { useMyNotesContext } from '../NotesContext';






function EditNoteView(){

    let {id} = useParams();
   
    const {notes, user, setNotes} = useMyNotesContext();
    const navigate = useNavigate();
    
    const [curNote] = notes.filter(el => el._id === id);
    
    
    const [title, setTitle] = useState(curNote.title);
    const [note, setNote] = useState(curNote.note);
    
    
   
   
    
    async function handleSubmit(){
       
        async function editNote(){
            try{
              if(user.loggedIn){
                await axios.patch(`http://localhost:4000/notes/${id}`, {title, note}, {
                  withCredentials:true
                });
              }else{
                setNotes(notes.map(n => {
                  if(n._id === id) return {_id: id, title, note, createdAt: new Date()};
                  else return n;
                }))
              }

              
          }catch(err){
              console.log(err);
          }
          }
          
          await editNote();
          navigate("/");
          
        
    }
   

    return(
        <div className="modal is-active">
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                <p className="modal-card-title">Edit Note</p>
                    <Link to="/"><button className="delete is-large" aria-label="close"></button></Link>
                </header>
                <section className="modal-card-body">
                    <div style={{"marginBottom" : "20px"}}>
                        
                        <input className="input is-large" type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
                    </div>
                    <div >
                        <textarea className="textarea" value={note} onChange={(e) => setNote(e.target.value)}placeholder="Your Note..." />
                    </div>
                    
                </section>
                       
               
                <footer className="modal-card-foot">
                <div className="buttons">
                    <button onClick={handleSubmit} className="button is-success">Save changes</button>
                </div>
                </footer>
            </div>
        </div>
    )

}

export default EditNoteView