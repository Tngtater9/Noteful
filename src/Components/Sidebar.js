import React from 'react'
import { Route } from 'react-router-dom'
import Folders from './Folders'
import GoBack from './GoBack'

function Sidebar (props) {

    return (
        <div className="sidebar">
            <Route exact path="/" 
            render={() => <Folders folders={props.folders} select={props.select} />} />
            <Route  path="/folder/:folderId" 
            render={() => <Folders folders={props.folders} openFolder={props.openFolder} setFolder={props.setFolder} select={props.select} />} />
            <Route path="/notes/:noteId" 
            render={({history}) => { return <GoBack onGoBack={()=>history.goBack()} />}} />
        </div>
    )
}

export default Sidebar