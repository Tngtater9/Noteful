import React from 'react'
import {Link} from 'react-router-dom'
import AppContext from '../../AppContext'

class Folders extends React.Component {
    static contextType = AppContext

    componentWillMount () {
        this.context.update();
    }

    render () {
        const folders = this.context.folders.map(folder =>
            {
             return (

            <Link to={`/folder/${folder.id}`} key={folder.id} id={folder.id} 
                onClick={() => this.context.openFolder(folder.id)}
            >
                <h4 className={folder.id === this.context.isOpen ? "folder selected" : "folder"}>{folder.folder_name}</h4>
            </Link>
                )
            }
        )

    return (<aside className="folders">
            {folders}
            <Link to='/add-folder'>
            <button>Add Folder</button>
            </Link>
        </aside>)}
}

export default Folders