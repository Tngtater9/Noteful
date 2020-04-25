import React from 'react'
import moment from 'moment'
import Delete from './deleteNote'
import AppContext from '../../AppContext'

class Note extends React.Component {
    static contextType = AppContext
    
    render () {
        const note = this.context.notes.find(note =>
        note.id === this.props.match.params.noteId
      )
    return (
        <section className="noteDetails" key={note.id} id={note.id} 
            folder={note.folderId}>
            <h2>{note.name}</h2>
            <p>{moment(note.modified).format('MMMM Do YYYY, h:mm a')}</p>
            <hr/>
            <p className="content">{note.content}</p>
            <Delete />
        </section>
    )}
}

export default Note