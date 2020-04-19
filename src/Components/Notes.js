import React from 'react'
import {Link, withRouter } from 'react-router-dom'
import Delete from './deleteNote'
import AppContext from '../AppContext'

class Notes extends React.Component {

    static contextType = AppContext

   render () { 
    let notes = this.context.notes;
    if (this.context.isOpen !== null){
        notes = notes.filter(note => note.folderId === this.context.isOpen)
    }
    notes = notes.map(note => {
        return(
            <div className="noteList" key={note.id} id={note.id} 
                folder={note.folderId}>
                <Link to={`notes/${note.id}`} onClick={() => this.props.history.push('')}>
                    <h2>{note.name}</h2>
                </Link>
                <p>{note.modified}</p>
                <Delete />
            </div> 
        )
    })
    return (
        <div>
            {notes}
            <Link to='/add-note'>
                <button>Add Note</button>
            </Link>
        </div>
    )}


}

export default withRouter(Notes)