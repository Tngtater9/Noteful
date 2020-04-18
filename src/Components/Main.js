import React from 'react'
import {Route} from 'react-router-dom'
import Notes from './Notes'
import Note from './Note'

function Main (props) {
    return (
        <div className="main">
                <Route exact path="/" 
                component={Notes} />
                <Route path="/notes/:noteId" 
                component={Note} />
                <Route path="/folder/:folderId" 
                component={Notes} />
        </div>
    )
}

export default Main