import React from 'react'

function Note (props) {
    const note = props.files.notes.find(note =>
        note.id === props.match.params.noteId
      )
    return (
        <div>
            <div className="note" key={note.id} id={note.id} 
                folder={note.folderId}>
                    <h2>{note.name}</h2>
                <p>{note.modified}</p>
                <button>Delete Note</button>
            </div>
            <p className="content">{note.content}</p>
        </div>
    )
}

export default Note