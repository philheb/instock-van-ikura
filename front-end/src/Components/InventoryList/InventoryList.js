import React from 'react'
import InventoryItem from '../InventoryItem/InventoryItem'
import './InventoryList.scss'
import axios from 'axios'
import addIcon from '../../Assets/Icons/Icon-add.svg'
import AddInventory from '../AddInventory/AddInventory'
import Modal from '../UI/Modal/Modal'

const inventoryURL = 'http://localhost:8080/inventory/'

class InventoryList extends React.Component {
  constructor() {
    super()
    this.state = {
      data: [],
      adding: false,
    }
  }

  componentDidMount() {
    axios.get(inventoryURL).then(response => {
      this.setState({
        data: response.data,
      })
    })
  }

  handleAddingInventory = () => {
    this.setState({ adding: true })
  }

  handleCancelAddingInventory = () => {
    this.setState({ adding: false })
  }

  handleNewInventory = newInventory => {
    const inStock = newInventory.inStock
    let status = inStock ? 'In Stock' : 'Out of Stock'

    const addedInventory = {
      item: newInventory.product,
      description: newInventory.description,
      lastOrdered: newInventory.lastOrdered,
      city: newInventory.city,
      country: newInventory.country,
      quantity: newInventory.quantity,
      status: status,
    }

    axios.post(inventoryURL, addedInventory).then(response => {
      this.setState({
        data: response.data,
        adding: false,
      })
    })
  }

  reloadData = () => {
    axios.get(inventoryURL).then(response => {
      this.setState({
        data: response.data,
      })
    })
  }
  render() {
    let rows = this.state.data.map((item, i) => {
      return (
        <InventoryItem
          item={item.item}
          description={item.description}
          lastOrdered={item.lastOrdered}
          location={item.location}
          quantity={item.quantity}
          status={item.status}
          key={i}
          data={item}
          reloadData={this.reloadData}
          inventoryURL={inventoryURL}
          eventTypes="click"
        />
      )
    })

    return (
      <>
        <Modal
          show={this.state.adding}
          closeModal={this.handleCancelAddingInventory}
        >
          <AddInventory
            closeModal={this.handleCancelAddingInventory}
            handleNewInventory={this.handleNewInventory}
          />
        </Modal>
        <table className="Inventorytable">
          <tbody>
            <tr>
              <th>ITEM</th>
              <th>LAST ORDERED</th>
              <th>LOCATION</th>
              <th>QUANTITY</th>
              <th>STATUS</th>
            </tr>
          </tbody>

          <tbody>{rows}</tbody>
        </table>
        <div className="location__add btn-add">
          <img
            className="location__add--btn"
            src={addIcon}
            alt="add-button"
            onClick={this.handleAddingInventory}
          />
        </div>
      </>
    )
  }
}

export default InventoryList
