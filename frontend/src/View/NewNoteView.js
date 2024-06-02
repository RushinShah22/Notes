import 'bulma/css/bulma.css'
import { useState } from 'react';

function NewNoteView( { onSubmit }){
    const [title, setTitle] = useState('');
    const [note, setNote] = useState('');
    function handleCreateClick(e){
        const data = {
            title,
            note
        }
        onSubmit(data);
        setTitle('');
        setNote('');
    }
   return (
    <div style={{"margin": "2rem"}}>
        <div className="box title is-4"><strong>WHATS ON YOUR MIND!!!</strong></div>
        <div className="field">
            <div className="control">
                <input className="input is-medium" type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
            </div>
        </div>
        <div className="field">
            <div className='control'>
                <textarea className="textarea" value={note} onChange={(e) => setNote(e.target.value)}placeholder="Your Note..." />
            </div>
        </div>
        <div className="field is-grouped">
            <div className="control">
                <button className="button is-link" onClick={handleCreateClick}>Create</button>
            </div>
        </div>

    </div>
        
   )
}

export default NewNoteView