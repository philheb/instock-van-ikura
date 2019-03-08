import React, { Component } from 'react'
import Switch from 'react-switch'
import './AddInventory.scss'

export default class AddWarehouse extends Component {
  state = {
    product: '',
    lastOrdered: '',
    city: '',
    country: '',
    quantity: 0,
    inStock: false,
    description: '',
  }

  handleSubmit = () => {
    // console.log(this.state)
    this.props.handleNewInventory(this.state)
  }

  handleChange = inStock => {
    this.setState({ inStock })
  }

  render() {
    return (
      <div className="AddInventory">
        <h1 className="addInventory__title">Create New</h1>

        <div className="addInventory__row">
          <div className="addInventory__product">
            <h5>PRODUCT</h5>
            <input
              className="input"
              type="text"
              placeholder="Item Name"
              onChange={event => this.setState({ product: event.target.value })}
            />
          </div>
          <div className="addInventory__last">
            <h5>LAST ORDERED</h5>
            <input
              className="input"
              type="text"
              placeholder="yyyy-mm-dd"
              onChange={event =>
                this.setState({ lastOrdered: event.target.value })
              }
            />
          </div>
        </div>

        <div className="addInventory__row">
          <div className="addInventory__city">
            <h5>CITY</h5>
            <input
              className="input"
              type="text"
              placeholder="City"
              onChange={event => this.setState({ city: event.target.value })}
            />
          </div>
          <div className="addInventory__city">
            <h5>COUNTRY</h5>
            <input
              className="input"
              type="text"
              placeholder="Country"
              onChange={event => this.setState({ country: event.target.value })}
            />
          </div>
        </div>

        <div className="addInventory__row">
          <div>
            <h5>QUANTITY</h5>
            <input
              className="input"
              type="number"
              placeholder="0"
              onChange={event =>
                this.setState({ quantity: event.target.value })
              }
            />
          </div>
          <div>
            <h5>STATUS</h5>
            <div className="addInventory__instock">
              <h4>In Stock</h4>
              <Switch
                onChange={this.handleChange}
                checked={this.state.inStock}
                uncheckedIcon={false}
                checkedIcon={false}
                width={40}
                height={24}
              />
            </div>
          </div>
        </div>

        <div>
          <h5>ITEM DESCRIPTION</h5>
          <textarea
            className="input description"
            placeholder="(Optinal)"
            onChange={event =>
              this.setState({ description: event.target.value })
            }
          />
        </div>

        <div className="add__actionButton">
          <button className="btn-action btn-save" onClick={this.handleSubmit}>
            SAVE
          </button>
          <button
            className="btn-action btn-cancel"
            onClick={this.props.closeModal}
          >
            CANCEL
          </button>
        </div>
      </div>
    )
  }
}
