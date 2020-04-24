import React from 'react'
import {withRouter} from 'react-router-dom'
import AppContext from '../../AppContext'

class AddNote extends React.Component {
    static contextType = AppContext
    
    validateNote = (newNote) => {
        if(newNote.name.length > 1) {            
            const doesNoteExist = this.context.notes.filter(note => note.name === newNote.name);

            if(doesNoteExist){
                const alreadyInTheFolder = doesNoteExist.find(note => note.folderId === newNote.folderId);
                if (alreadyInTheFolder){
                    return false;
                } else {
                    return true;
                }
                
            } else {
                return true;
            }
        } else {
            return false
        } 
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {noteName, folderId, content} = e.target
        const newNote = noteName.value.trim();
        const noteId = noteName.value + Math.floor(Math.random() * 10000);
        const note = {
            id: noteId,
            name: newNote,
            modified: new Date(),
            folderId: folderId.value,
            content: content.value
        }

        const isNoteValid = this.validateNote(note);

        if (isNoteValid) {
            fetch('http://localhost:9090/notes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(note)
        })
            .then(res => {
                if (!res.ok) {
                    return res.json().then(error => {
                        throw error
                    })
                }
                return res.json()
            })
            .then(() => {
                noteName.value = '';
                folderId.value = '';
                content.value = ''; 
                this.context.update(); 
                this.props.history.push(`/`);              
            })
            .catch(err=> console.log(err.message))
        } else {
            alert('This name is already taken or cannot be used.')
            noteName.value = '';
        }

    }

    render() {
        const folderOptions = this.context.folders.map(folder => {
            if(folder.id === this.context.isOpen){
                return (
                    <option value={folder.id} selected>{folder.name}</option>
                )
            }
            return (
                <option value={folder.id}>{folder.name}</option>
            )
        });

        return (
            <section className="AddNote">
                <h2>Create Note</h2>
                <form className="AddNote_form"
                    onSubmit={(e) => this.handleSubmit(e)}>
                        <div>
                            <label htmlFor='noteName'>
                            Note Name
                            </label>
                            <input
                                type='text'
                                name='noteName'
                                id='noteName'
                                placeholder='Title'
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor='folderId'>
                            Folder
                            </label>
                            <select
                                name='folderId'
                                id='folderId'
                                required>
                                {folderOptions}
                            </select>
                        </div>
                        <div>
                            <label htmlFor='content'>
                            Notes
                            </label>
                            <textarea rows="10" cols="50"
                            name='content'
                            id='content'
                            placeholder='Add notes here.'
                            required
                            />
                        </div>
                        <button type="submit">Add Note</button>
                        <button type="reset" onClick={() => {this.props.history.push('/')}}>Cancel</button>
                </form>
            </section>
        )
    }
}

export default withRouter(AddNote)