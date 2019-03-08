import React from 'react'
import dot from '../../Assets/Icons/Icon-kebab-default.svg'
import { Link } from 'react-router-dom'
import "./inventoryItem.css"

class InventoryItem extends React.Component {

  toggleClass = () => {
    if (this.hide.className === "hide") {
      this.hide.className = 'show'
    } else {
      this.hide.className = "hide"
    }
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
          <div className="dropdown">
          <img src={dot} alt="" onClick={this.toggleClass} className="pointer"/>
            <div className='hide' ref={self => this.hide = self}>Remove</div>
          </div>

        </td>

      </tr>
    )
  }
}


export default InventoryItem

