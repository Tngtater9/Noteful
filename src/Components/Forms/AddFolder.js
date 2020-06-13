import React from 'react'
import {withRouter} from 'react-router-dom'
import AppContext from '../../AppContext'

class AddFolder extends React.Component {
    static contextType = AppContext

    validateFolder = (newFolder) => {
        const doesFolderExist = this.context.folders.find(folder => folder.folder_name === newFolder.folder_name);
        if(newFolder.folder_name.length > 1){
            if(doesFolderExist){
                return false;
            } else {
                return true;
            }
        } else {
            return false;
        }
        
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {folderName} = e.target;
        const newFolder = folderName.value.trim();
        const folder = {
            "folder_name": newFolder            
        }

        const isFolderValid = this.validateFolder(folder);

        if (isFolderValid) {
            fetch('https://dry-plateau-41724.herokuapp.com/api/folders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(folder)
            })
            .then(res => {
                if (!res.ok) {
                    return res.json().then(error => {
                        throw error
                    })
                }
                return res.json()
            })
            .then(folder => {
                folderName.value = '';
                this.context.openFolder(folder.id);
                this.props.history.push(`/folder/${folder.id}`);
                        
            })
            .catch(err=> console.log(err.message))
        } else {
            alert('Folder name taken or cannot be used.');
            folderName.value = '';
        }

    }

    render() {
        return (
            <section className="addFolder">
                <h2>Create Folder</h2>
                <form className="addFolder_form"
                    onSubmit={(e) => this.handleSubmit(e)}>
                        <section>
                            <label htmlFor='folderName'>
                            Folder Name
                            </label>
                            <input
                            type='text'
                            name='folderName'
                            id='folderName'
                            placeholder='Enter new folder name'
                            required
                            aria-label="New folder name" 
                            aria-required="true"
                            />
                        </section>
                        <button type="submit">Add Folder</button>
                        <button type="reset" onClick={() => {this.props.history.push('/')}}>Cancel</button>
                </form>
            </section>
        )
    }
}

export default withRouter(AddFolder)