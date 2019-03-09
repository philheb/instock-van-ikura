import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import backArrow from '../../Assets/Icons/Icon-back-arrow.svg'
import './InventoryItemDetail.scss'
import axios from 'axios'

const inventoryItemURL = `http://localhost:8080/inventory/`
const inventoryItemDetailURL = id => `http://localhost:8080/inventory/${id}`

class InventoryItemDetails extends React.Component {

  state = {
    data: []
  }

  componentDidMount() {
    axios.get(inventoryItemURL)
      .then(response => {
        this.setState({
          data: response.data
        })
      }).then(response => {
        axios.get(inventoryItemDetailURL(this.props.match.params.id))
          .then(response => {
            const { description, name, id, item, lastOrdered,
              location, quantity, status, referenceNumber } = response.data
            this.setState({
              description: description,
              id: id,
              item: item,
              lastOrdered: lastOrdered,
              location: location,
              quantity: quantity,
              status: status,
              name: name,
              referenceNumber: referenceNumber
            });
          });
      });
  }

  render() {
    if(this.state.status === "Out of Stock"){
      this.stockStatus.id ="outstock__button"
    }

    return (
      <div className="locationDetails">
        <Navbar />
        <div className="inventoryDetail__container">
          <div className="inventoryDetail__font--wrapper">
            <Link to="/inventory">
              <img src={backArrow} alt="back-arrow" />
            </Link>
            <h1 className="inventoryDetail__font">
              {this.state.item}
            </h1>
            <button id="instock__button" ref ={self => this.stockStatus = self}>
              {this.state.status}
            </button>
          </div>
          <div className="inventoryDetail__wrapper">
            <div className="inventoryDetail__top--section">
              <h5 className="locationDetails__label">ITEM DESCRIPTION</h5>
              <h4 className="locationDetails__body--top">
                {this.state.description}
              </h4>
            </div>
            <div className="inventoryDetail__section--wrapper">
              <div className="inventoryDetail__top--section">
                <h5 className="inventoryDetails__label">ORDERED BY</h5>
                <h4 className="inventoryDetails__body--top">
                  {this.state.name}
                </h4>
                <h5 className="inventoryDetails__label">LAST ORDERED</h5>
                <h4 className="inventoryDetails__body--top">
                  {this.state.lastOrdered}
                </h4>
                <h5 className="inventoryDetails__label">QUANTITY</h5>
                <h4 className="inventoryDetails__body--top">
                  {this.state.quantity}
                </h4>
                <h5 className="inventoryDetails__label">CATEGORIES</h5>
                <h4 className="inventoryDetails__body--top">
                  Industrial, Automotive, Heavy, Mechanical, 
                  Engineering, Transportation, Sales
            </h4>
              </div>
              <div className="inventoryDetail__top--section">
                <h5 className="inventoryDetails__label">REFERENCE NUMBER</h5>
                <h4 className="inventoryDetails__body--top">
                  {this.state.referenceNumber}
                </h4>
                <h5 className="inventoryDetails__label">LOCATION</h5>
                <h4>{this.state.location}</h4>
              </div>
            </div>
          </div>
          <div className="inventoryDetail__wrapper--edit">
            <button id="inventoryDetail__edit--button">EDIT</button>
          </div>
        </div>
      </div>
    )
  }
}

export default InventoryItemDetails;