import 'bulma/css/bulma.css'
import axios from 'axios'

import { useNavigate } from 'react-router-dom';
import { useMyNotesContext } from '../NotesContext';


function NoteCardView({data}){
    const navigate = useNavigate();

    const {notes, user, setNotes} = useMyNotesContext();
    

    
    async function onDelete(){
        
        async function deleteNote(){
            try{
              if(user.loggedIn){
                
                await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/notes/${data._id}`, {
                  withCredentials: true
                  })
                  
              }
              
              setNotes(notes.filter((el) => el._id !== data._id));      
              navigate("/");
            }catch(err){
                navigate("/")
              console.log(err);
            }
          }
          navigate("/loader");
          await deleteNote();

    }

    function handleEditBtn(){
        
        navigate(`/notes/${data._id}`);
    }
    return (
        <div className="cell">
            <div className="card">
                <header className="card-header">
                    <p className="card-header-title">{data.title}</p>
                </header>
                <div className="card-content">
                    <div className="content" style={{"wordWrap": "break-word", "whiteSpace" : "pre-wrap"}}>
                    {data.note}
                    </div>
                    <br />
                    <time dateTime={`${new Date(data.createdAt).toLocaleDateString}`}>{new Date(data.createdAt).toLocaleString()}</time>
                    
                </div>
                <footer className="card-footer">
                    <button onClick={handleEditBtn} className="card-footer-item">Edit</button>
                    <button onClick={onDelete} className="card-footer-item">Delete</button>
                </footer>
            </div>
        </div>
       

    )
}

export default NoteCardView