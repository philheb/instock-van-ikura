import React from 'react'
import dot from '../../Assets/Icons/Icon-kebab-default.svg'
import { Link } from 'react-router-dom'
import "./InventoryItem.css"
import axios from "axios"
import onClickOutside from "react-onclickoutside"

class InventoryItem extends React.Component {
  state = {
    className: "hide",
  }
  toggleClass = () => {
    if (this.hide.className === "hide") {
      this.setState({ className: 'show' })
    } else {
      this.setState({ className: 'hide' })
    }
  }

  deleteItem = (id) => {
    axios.delete(`${this.props.inventoryURL}${id}`)
      .then(this.props.reloadData)
  }

  handleClickOutside = () => {
    this.setState({ className: 'hide' })
  }

  render() {
    return (
      <tr>
        <td data-label="ITEM">
          <Link id="link__color--black" to={`/inventory/${this.props.data.id}`}>
            {this.props.data.item}
            <br />
            <p className="description__font">{this.props.data.description}</p>
          </Link>
        </td>
        <td data-label="LAST ORDERED">{this.props.data.lastOrdered}</td>
        <td data-label="LOCATION">{this.props.data.location}</td>
        <td data-label="QUANTITY">{this.props.data.quantity}</td>
        <td data-label="STATUS">{this.props.data.status}</td>
        <td data-label="DOT">
          <div className="dropdown" onClick={this.toggleClass}>
            <img src={dot} alt="" className="pointer" />
            <div className={this.state.className} ref={self => this.hide = self} 
            onClick={() => this.deleteItem(this.props.data.id)}>
            Remove</div>
          </div>
        </td>
      </tr>
    )
  }
}


export default onClickOutside(InventoryItem)

