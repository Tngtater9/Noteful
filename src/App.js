import React from 'react';
import './App.css';
import STORE from './dummy-store'
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import Main from './Components/Main'

class App extends React.Component {
state = {store: STORE,
  openFolder: null
}
 
setOpenFolder = (folderId) => {
  console.log('changing state')
  this.setState({...this.state,
    openFolder: folderId})
}

resetFolders = () => {
  this.setState({...this.state,
  openFolder: null})
}

render (){
  
  return (<div className="App">
    <Header reset={this.resetFolders} />
    <div className="mainContainer">
    <Sidebar folders={this.state.store.folders} openFolder={this.state.openFolder} setFolder={this.setOpenFolder} select={this.selectFolder} />
    <Main files={this.state.store} folder={this.state.openFolder} />
    </div>
  </div>)
  
};
}

export default App;
