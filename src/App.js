import React from 'react';
import './App.css';
import Header from './Components/Header'
import Sidebar from './Components/Sidebar/Sidebar'
import Main from './Components/Main/Main'
import AppContext from './AppContext'

class App extends React.Component {
constructor(props){
  super(props)
  this.state = {
    folders: [],
    notes: [],
    openFolder: null
  } 
} 

updateFiles = () =>{
fetch('https://dry-plateau-41724.herokuapp.com/api/folders')
  .then(res => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error(res.statusText);
    }
  })
  .then(data => {
    this.setState({
      ...this.state,
      folders: data
    })
  })
  .catch(err=>console.log(err.message))
fetch('https://dry-plateau-41724.herokuapp.com/api/notes')
  .then(res => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error(res.statusText);
    }
  })
  .then(data => {
    this.setState({
      ...this.state,
      notes: data
    })
  })
  .catch(err=>console.log(err.message))
}

componentWillMount () {
  this.updateFiles();
  }
  
deleteNote = (noteId) => {
  this.setState({
    ...this.state,
    notes: this.state.notes.filter(note => note.id !== noteId)
  })


}
 
setOpenFolder = (folderId) => {
  this.setState({...this.state,
    openFolder: folderId})
}

resetFolders = () => {
  this.setState({...this.state,
  openFolder: null})
}

render (){
  console.log('At App render', this.state)
  const contextValue = {
  openFolder: this.setOpenFolder,
  isOpen: this.state.openFolder,
  folders: this.state.folders,
  notes: this.state.notes,
  delete: this.deleteNote,
  update: this.updateFiles
};
  
  return (
  <AppContext.Provider value={contextValue}>
    <div className="App">
      <Header reset={this.resetFolders} />
      <section className="mainContainer">
        <Sidebar />
        <Main />
      </section>
    </div>
  </AppContext.Provider>)
  
};
}

export default App;
