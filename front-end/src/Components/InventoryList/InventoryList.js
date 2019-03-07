import React from 'react'
import InventoryItem from '../InventoryItem/InventoryItem'
import './InventoryList.scss'
import axios from 'axios'

class InventoryList extends React.Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    axios.get("http://localhost:8080/inventory/")
      .then(response => {
        this.setState({
          data: response.data
        })
        console.log(this.state.data)
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
        />
      )
    })

    return (
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
    )
  }
}

export default InventoryList
