import 'bulma/css/bulma.css'

function NoteCardView({ data }){
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
                    <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                    </div>
                </div>
                <footer className="card-footer">
                    <a href={`/notes/${data._id}`} className="card-footer-item">Save</a>
                    <a href="#" className="card-footer-item">Edit</a>
                    <a href="#" className="card-footer-item">Delete</a>
                </footer>
            </div>
        </div>
       

    )
}

export default NoteCardView