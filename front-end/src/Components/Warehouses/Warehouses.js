import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import Warehouse from '../Warehouse/Warehouse'
import axios from 'axios'
import AddWarehouse from '../AddWarehouse/AddWarehouse'
import Modal from '../UI/Modal/Modal'
import addIcon from '../../Assets/Icons/Icon-add.svg'
import './Warehouses.scss'

const locationURL = 'http://localhost:8080/locations/'
class Warehouses extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
      adding: false,
    }
  }

  componentDidMount() {
    axios.get(locationURL).then(response => {
      this.setState({
        data: response.data,
      })
    })
  }

  handleAddingLocation = () => {
    this.setState({ adding: true })
  }

  handleCancelAddingLocation = () => {
    this.setState({ adding: false })
  }

  handleNewLocation = newLocation => {
    axios
      .post(locationURL, newLocation)
      .then(response => {
        this.setState({
          data: response.data,
        })
      })
      .then(this.setState({ adding: false }))
      .catch(err => console.log(err))
  }

  render() {
    let rows = this.state.data.map((warehouse, i) => {
      return (
        <Warehouse
          key={i}
          name={warehouse.name}
          address={warehouse.address}
          managerName={warehouse.managerName}
          managerTitle={warehouse.managerTitle}
          phone={warehouse.phone}
          email={warehouse.email}
          categories={warehouse.categories}
        />
      )
    })
    return (
      <>
        <Modal
          show={this.state.adding}
          closeModal={this.handleCancelAddingLocation}
        >
          <AddWarehouse
            closeModal={this.handleCancelAddingLocation}
            handleNewLocation={this.handleNewLocation}
          />
        </Modal>
        <Navbar
          routeProps={this.props.routeProps}
          className="location__navbar"
        />
        <div className="location__container">
          <div className="location__header">
            <h1 className="location__title">Locations</h1>
            <input
              type="text"
              placeholder="Search"
              className="location__search"
            />
          </div>
          <div className="locations">{rows}</div>
          <div className="location__add btn-add">
            <img
              className="location__add--btn"
              src={addIcon}
              alt="add-button"
              onClick={this.handleAddingLocation}
            />
          </div>
        </div>
      </>
    )
  }
}

export default Warehouses
