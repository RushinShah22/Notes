import 'bulma/css/bulma.css'

function NewNoteView(){
   return (
    <div style={{"margin": "2rem"}}>
        <div className="box title is-4"><strong>WHATS ON YOUR MIND!!!</strong></div>
        <div className="field">
            <div className="control">
                <input className="input is-medium" type="text" placeholder="Title" />
            </div>
        </div>
        <div className="field">
            <textarea className="textarea" placeholder="Your Note..."></textarea>
        </div>
        <div className="field is-grouped">
            <div className="control">
                <button className="button is-link">Create</button>
            </div>
        </div>

    </div>
        
   )
}

export default NewNoteView