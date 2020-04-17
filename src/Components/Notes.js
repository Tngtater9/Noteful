import React from 'react'
import {Link} from 'react-router-dom'

function Notes (props) {
    let notes = props.files.notes;
    if (props.folder !== null){
        notes = notes.filter(note => note.folderId === props.folder)
    }
    notes = notes.map(note => {
        return(
            <div className="noteList" key={note.id} id={note.id} 
                folder={note.folderId}>
                <Link to={`notes/${note.id}`} onClick={() => props.history.push('')}>
                    <h2>{note.name}</h2>
                </Link>
                <p>{note.modified}</p>
                <button>Delete Note</button>
            </div> 
        )
    })
    return (
        <div>
            {notes}
            <button>Add Note</button>
        </div>
    )


}

export default Notes