import React, { Component } from 'react'
import './AddWarehouse.scss'

export default class AddWarehouse extends Component {
  state = {
    name: '',
    address: '',
    managerName: '',
    managerTitle: '',
    phone: '',
    email: '',
    categories: '',
    inventory: [],
  }

  handleSubmit = () => {
    this.props.handleNewLocation(this.state)
  }

  render() {
    return (
      <div className="AddWarehouse">
        <h1 className="addwarehouse__title">Add New</h1>
        <div className="add__name">
          <h5>WAREHOUSE</h5>
          <input
            className="input"
            type="text"
            placeholder="Name & ID"
            onChange={event => this.setState({ name: event.target.value })}
          />
        </div>
        <div className="add__address">
          <div>
            <h5>ADDRESS</h5>
            <input
              className="input"
              type="text"
              placeholder="Enter Address"
              onChange={event => this.setState({ address: event.target.value })}
            />
          </div>
          <div>
            <h5>LOCATION</h5>
            <select
              className="input"
              onChange={event =>
                this.setState({ location: event.target.value })
              }
            >
              <option value="" />
              <option value="Toronto, ON">Toronto, CAN</option>
            </select>
          </div>
        </div>
        <div className="add__contact--name">
          <div>
            <h5>CONTACT NAME</h5>
            <input
              className="input"
              type="text"
              placeholder="Enter Name"
              onChange={event =>
                this.setState({ managerName: event.target.value })
              }
            />
          </div>
          <div>
            <h5>POSITION</h5>
            <input
              className="input"
              type="text"
              placeholder="Enter Position"
              onChange={event =>
                this.setState({ managerTitle: event.target.value })
              }
            />
          </div>
        </div>
        <div className="add__contact--info">
          <div>
            <h5>PHONE NUMBER</h5>
            <input
              className="input"
              type="text"
              placeholder="(000) - 000 - 0000"
              onChange={event => this.setState({ phone: event.target.value })}
            />
          </div>
          <div>
            <h5>EMAIL</h5>
            <input
              className="input"
              type="text"
              placeholder="email@instock.com"
              onChange={event => this.setState({ email: event.target.value })}
            />
          </div>
        </div>
        <div>
          <h5>ITEM DESCRIPTION</h5>
          <textarea
            className="input description"
            placeholder="Use commas to separate each category"
            onChange={event =>
              this.setState({ categories: event.target.value })
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
