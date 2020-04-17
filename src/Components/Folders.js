import React from 'react'
import {Link} from 'react-router-dom'

class Folders extends React.Component {
    render () {
        const folders = this.props.folders.map(folder =>
            {
             return (
            <Link to={`/folder/${folder.id}`} key={folder.id} id={folder.id} 
                onClick={(e) => {this.props.setFolder(folder.id)
                    this.props.select(e.target)}}
            >
                <h4 className={folder.id === this.props.openFolder ? "folder selected" : "folder"}>{folder.name}</h4>
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