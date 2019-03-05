<<<<<<< HEAD
import React, { Component } from "react";
import "./App.css";
=======
import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Inventory from './Components/Inventory'
import Home from './Components/Home'
import Warehouses from './Components/Warehouses'
>>>>>>> 6d029faf8a9d9ea1a193a5f053aadd93dba9580b

class App extends Component {
  render() {
    return (
      <div className="App">
<<<<<<< HEAD
        <header className="App-header" />
=======
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/warehouses" component={Warehouses} />
          <Route path="/warehouses/:id" component={Warehouses} />
          <Route path="/inventory" component={Inventory} />
          <Route path="/inventory/:id" component={Inventory} />
        </Switch>
>>>>>>> 6d029faf8a9d9ea1a193a5f053aadd93dba9580b
      </div>
    );
  }
}

export default App;
