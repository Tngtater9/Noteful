import React from 'react'
import {Route} from 'react-router-dom'
import Notes from './Notes'
import Note from './Note'

function Main (props) {
    const files = props.files
    const folder = props.folder
    return (
        <div className="main">
                <Route exact path="/" 
                render={props => (<Notes {...props} files={files} folder={folder}/>)} />
                <Route path="/notes/:noteId" 
                render={props => {return <Note {...props} files={files} folder={folder}/>}} />
                <Route path="/folder/:folderId" 
                render={props => (<Notes {...props} files={files} folder={folder}/>)} />
        </div>
    )
}

export default Main