import React from 'react'
import {withRouter} from 'react-router-dom'
import AppContext from '../../AppContext'

class deleteNote extends React.Component{
    static contextType = AppContext

    removeNote = (e) => {
        const noteId = e.parentNode.id;

        const url = 'http://localhost:8000/api/notes/' + noteId;
        fetch(url,
            {method: 'DELETE'})
            .then(()=>{
                this.context.delete(noteId);
            }
        )     
    }

    render () {
        return (
            <button 
            onClick={(e)=>{
                this.removeNote(e.target); 
                this.props.history.push('/');
            }}>Delete Note</button>
        )
    }
}

export default withRouter(deleteNote)