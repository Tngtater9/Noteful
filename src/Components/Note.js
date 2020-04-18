import React from 'react'
import Delete from './deleteNote'
import AppContext from '../AppContext'

class Note extends React.Component {
    static contextType = AppContext
    
    render () {
        const note = this.context.notes.find(note =>
        note.id === this.props.match.params.noteId
      )
    return (
        <div>
            <div className="note" key={note.id} id={note.id} 
                folder={note.folderId}>
                    <h2>{note.name}</h2>
                <p>{note.modified}</p>
                <Delete />
            </div>
            <p className="content">{note.content}</p>
        </div>
    )}
}

export default Note