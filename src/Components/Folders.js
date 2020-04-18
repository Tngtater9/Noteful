import React from 'react'
import {Link} from 'react-router-dom'
import AppContext from '../AppContext'

class Folders extends React.Component {
    static contextType = AppContext

    render () {
        const folders = this.context.folders.map(folder =>
            {
             return (

            <Link to={`/folder/${folder.id}`} key={folder.id} id={folder.id} 
                onClick={() => this.context.openFolder(folder.id)}
            >
                <h4 className={folder.id === this.context.isOpen ? "folder selected" : "folder"}>{folder.name}</h4>
            </Link>
                )
            }
        )

    return (<div>
            {folders}
            <button>Add Folder</button>
        </div>)}
}

export default Folders