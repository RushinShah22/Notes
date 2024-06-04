import 'bulma/css/bulma.css'
import { Link } from 'react-router-dom';

function NoteCardView({deleteNote, data }){
    async function onDelete(){
        await deleteNote(data._id);
    }
    return (
        <div className="cell">
            <div className="card">
                <header className="card-header">
                    <p className="card-header-title">{data.title}</p>
                </header>
                <div className="card-content">
                    <div className="content">
                    {data.note}
                    
                    <br />
                    <time dateTime={`${new Date(data.createdAt).toLocaleDateString}`}>{new Date(data.createdAt).toLocaleString()}</time>
                    </div>
                </div>
                <footer className="card-footer">
                    <Link to={`notes/${data._id}`}><button className="card-footer-item">Edit</button></Link>
                    <button onClick={onDelete} className="card-footer-item">Delete</button>
                </footer>
            </div>
        </div>
       

    )
}

export default NoteCardView