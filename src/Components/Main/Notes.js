import React from 'react'
import {Link, withRouter } from 'react-router-dom'
import moment from 'moment'
import Delete from './deleteNote'
import AppContext from '../../AppContext'

class Notes extends React.Component {

    static contextType = AppContext

   render () { 
    let notes = this.context.notes;
    if (this.context.isOpen !== null){
        notes = notes.filter(note => note.folder === this.context.isOpen)
    }
    notes = notes.map(note => {
        return(
            <article className="note" key={note.id} id={note.id} 
                folder={note.folder}>
                <Link to={`notes/${note.id}`} onClick={() => this.props.history.push('')}>
                    <h2>{note.title}</h2>
                </Link>
                <p>{moment(note.modified).format('MMMM Do YYYY, h:mm a')}</p>
                <Delete />
            </article> 
        )
    })
    return (
        <section className="noteList">
            {notes}
            <Link to='/add-note'>
                <button>Add Note</button>
            </Link>
        </section>
    )}


}

export default withRouter(Notes)