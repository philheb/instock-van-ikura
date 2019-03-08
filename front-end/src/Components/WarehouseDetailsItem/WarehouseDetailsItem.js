import React from 'react'
import kebab from '../../Assets/Icons/Icon-kebab-default.svg'

export default function WarehouseDetailsItem() {
  return (
    <div>
      <div className="locationDetails__inventory--container">
        <div className="locationDetails__inventory">
          <div className="locationDetails__inventory--section">
            <h5>ITEM</h5>
            <h4 id="locationDetails__productName">Product Name Here</h4>
            <h4>
              Here is a very brief description of the product in the inventory…
            </h4>
          </div>
          <div className="locationDetails__inventory--section">
            <h5>LAST ORDERED</h5>
            <h4>05/24/2018</h4>
          </div>
          <div className="locationDetails__inventory--section">
            <h5>LOCATION</h5>
            <h4>Toronto, CAN</h4>
          </div>
          <div className="locationDetails__inventory--section">
            <h5>QUANTITY</h5>
            <h4>12,000</h4>
          </div>
          <div className="locationDetails__inventory--section">
            <h5>STATUS</h5>
            <h4>In Stock</h4>
          </div>
          <div>
            <img id="locationDetails__kebab" src={kebab} alt="kebab" />
          </div>
        </div>
        <hr className="locationDetails__item--hr" />
        <div className="locationDetails__inventory">
          <div className="locationDetails__inventory--section">
            <h5>ITEM</h5>
            <h4 id="locationDetails__productName">Product Name Here</h4>
            <h4>
              Here is a very brief description of the product in the inventory…
            </h4>
          </div>
          <div className="locationDetails__inventory--section">
            <h5>LAST ORDERED</h5>
            <h4>05/24/2018</h4>
          </div>
          <div className="locationDetails__inventory--section">
            <h5>LOCATION</h5>
            <h4>Toronto, CAN</h4>
          </div>
          <div className="locationDetails__inventory--section">
            <h5>QUANTITY</h5>
            <h4>12,000</h4>
          </div>
          <div className="locationDetails__inventory--section">
            <h5>STATUS</h5>
            <h4>In Stock</h4>
          </div>
          <div>
            <img id="locationDetails__kebab" src={kebab} alt="kebab" />
          </div>
        </div>
        <hr className="locationDetails__item--hr" />
        <div className="locationDetails__inventory">
          <div className="locationDetails__inventory--section">
            <h5>ITEM</h5>
            <h4 id="locationDetails__productName">Product Name Here</h4>
            <h4>
              Here is a very brief description of the product in the inventory…
            </h4>
          </div>
          <div className="locationDetails__inventory--section">
            <h5>LAST ORDERED</h5>
            <h4>05/24/2018</h4>
          </div>
          <div className="locationDetails__inventory--section">
            <h5>LOCATION</h5>
            <h4>Toronto, CAN</h4>
          </div>
          <div className="locationDetails__inventory--section">
            <h5>QUANTITY</h5>
            <h4>12,000</h4>
          </div>
          <div className="locationDetails__inventory--section">
            <h5>STATUS</h5>
            <h4>In Stock</h4>
          </div>
          <div>
            <img id="locationDetails__kebab" src={kebab} alt="kebab" />
          </div>
        </div>
        <hr className="locationDetails__item--hr" />
      </div>
    </div>
  )
}
