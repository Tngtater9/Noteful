import React from 'react'
import {Route} from 'react-router-dom'
import Notes from './Notes'
import Note from './Note'
import AddFolder from '../Forms/AddFolder'
import AddNote from '../Forms/AddNote'
import MainError from '../../ErrorPages/MainError'
import FormError from '../../ErrorPages/FormError'

function Main () {
    return (
        <div className="main">
            <MainError>
                <Route exact path="/" 
                component={Notes} />
                <Route path="/notes/:noteId" 
                component={Note} />
                <Route path="/folder/:folderId" 
                component={Notes} />
            </MainError>
            <FormError>
                <Route path="/add-folder"
                component={AddFolder} />
                <Route path="/add-note"
                component={AddNote} />
            </FormError>
        </div>
    )
}

export default Main