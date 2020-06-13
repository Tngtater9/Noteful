import React from 'react'
import {withRouter} from 'react-router-dom'
import AppContext from '../../AppContext'

class AddNote extends React.Component {
    static contextType = AppContext
    
    validateNote = (newNote) => {
        if(newNote.title.length > 1) {            
            const doesNoteExist = this.context.notes.filter(note => note.title === newNote.title);

            if(doesNoteExist){
                const alreadyInTheFolder = doesNoteExist.find(note => note.folder === newNote.folder);
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
        const note = {
            title: newNote,
            folder: folderId.value,
            content: content.value
        }

        const isNoteValid = this.validateNote(note);

        if (isNoteValid) {
            fetch('https://dry-plateau-41724.herokuapp.com/api/notes', {
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
                    <option value={folder.id} selected>{folder.folder_name}</option>
                )
            }
            return (
                <option value={folder.id}>{folder.folder_name}</option>
            )
        });

        return (
            <section className="AddNote">
                <h2>Create Note</h2>
                <form className="AddNote_form"
                    onSubmit={(e) => this.handleSubmit(e)}>
                        <section>
                            <label htmlFor='noteName'>
                            Note Name
                            </label>
                            <input
                                type='text'
                                name='noteName'
                                id='noteName'
                                placeholder='Title'
                                required
                                aria-label="New note name" 
                                aria-required="true"
                            />
                        </section>
                        <section>
                            <label htmlFor='folderId'>
                            Folder
                            </label>
                            <select
                                name='folderId'
                                id='folderId'
                                required
                                aria-label="The folder the note will be in" 
                                aria-required="true">
                                {folderOptions}
                            </select>
                        </section>
                        <section>
                            <label htmlFor='content'>
                            Notes
                            </label>
                            <textarea rows="10" cols="50"
                            name='content'
                            id='content'
                            placeholder='Add notes here.'
                            required
                            aria-label="The contents of the note" 
                            aria-required="true"
                            />
                        </section>
                        <button type="submit">Add Note</button>
                        <button type="reset" onClick={() => {this.props.history.push('/')}}>Cancel</button>
                </form>
            </section>
        )
    }
}

export default withRouter(AddNote)