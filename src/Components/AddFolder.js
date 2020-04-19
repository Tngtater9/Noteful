import React from 'react'
import {withRouter} from 'react-router-dom'
import AppContext from '../AppContext'

class AddFolder extends React.Component {
    static contextType = AppContext

    handleSubmit = (e) => {
        e.preventDefault();
        const {folderName} = e.target;
        const folderId = folderName.value + Math.floor(Math.random() * 10000);
        const folder = {
            id: folderId,
            name: folderName.value            
        }

        fetch('http://localhost:9090/folders', {
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
            .then(() => {
                folderName.value = '';
                this.context.openFolder(folderId);
                this.props.history.push(`/folder/${folderId}`);
                         
            })
            .catch(err=> console.log(err.message))

    }

    render() {
        return (
            <section className="addFolder">
                <h2>Create Folder</h2>
                <form className="addFolder_form"
                    onSubmit={(e) => this.handleSubmit(e)}>
                        <div>
                            <label htmlFor='folderName'>
                            Folder Name
                            </label>
                            <input
                            type='text'
                            name='folderName'
                            id='folderName'
                            placeholder='Enter new folder name'
                            required
                            />
                        </div>
                        <button type="submit">Add Folder</button>
                        <button type="reset" onClick={() => {this.props.history.push('/')}}>Cancel</button>
                </form>
            </section>
        )
    }
}

export default withRouter(AddFolder)