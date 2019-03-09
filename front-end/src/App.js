import React, { Component } from 'react'
import './styles/styles.scss'
import { Switch, Route } from 'react-router-dom'
import Inventory from './Components/Inventory/Inventory'
import Warehouses from './Components/Warehouses/Warehouses'
import WarehouseDetails from './Components/WarehouseDetails/WarehouseDetails'
import InventoryItemDetail from './Components/InventoryItemDetail/InventoryItemDetail'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Inventory} />
          <Route
            exact
            path="/warehouses"
            render={routeProps => {
              return <Warehouses routeProps={routeProps.match} />
            }}
          />
          <Route path="/warehouses/:id" component={WarehouseDetails} />
          <Route
            exact
            path="/inventory"
            render={routeProps => {
              return <Inventory routeProps={routeProps.match} />
            }}
          />
          <Route path="/inventory/:id" component={InventoryItemDetail} />
        </Switch>
      </div>
    )
  }
}

export default App
