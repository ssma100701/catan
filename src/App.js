import React, { Component } from 'react';
import Maps from './containers/Layout/Maps';
import Land from './components/Land';
import UserPlane from './components/Userplane/Userplane';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="col-md-8">
            <Maps />  
          </div>
          <div className="col-md-4">
            <UserPlane />
          </div>  
        </div>
                  
      </div>
    );
  }
}

export default App;
