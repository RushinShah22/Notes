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
                    <time dateTime={`${new Date(data.createdAt).toLocaleDateString()}`}>{new Date(data.createdAt).toLocaleString()}</time>
                    </div>
                </div>
                <footer className="card-footer">
                    <button className="card-footer-item">Save</button>
                    <button className="card-footer-item">Edit</button>
                    <button className="card-footer-item">Delete</button>
                </footer>
            </div>
        </div>
       

    )
}

export default NoteCardView