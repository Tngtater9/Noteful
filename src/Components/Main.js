import React from 'react'
import {Route} from 'react-router-dom'
import Notes from './Notes'
import Note from './Note'
import AddFolder from './AddFolder'
import AddNote from './AddNote'

function Main () {
    return (
        <div className="main">
                <Route exact path="/" 
                component={Notes} />
                <Route path="/notes/:noteId" 
                component={Note} />
                <Route path="/folder/:folderId" 
                component={Notes} />
                <Route path="/add-folder"
                component={AddFolder} />
                <Route path="/add-note"
                component={AddNote} />
        </div>
    )
}

export default Main