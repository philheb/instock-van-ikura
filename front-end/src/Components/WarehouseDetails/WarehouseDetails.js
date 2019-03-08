import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import WarehouseDetailsItem from '../WarehouseDetailsItem/WarehouseDetailsItem'
import backArrow from '../../Assets/Icons/Icon-back-arrow.svg'
import './WarehouseDetails.scss'

export default function WarehouseDetails() {
  return (
    <div className="locationDetails">
      <Navbar />
      <div className="locationDetails__top">
        <div className="locationDetails__header">
          <Link to="/warehouses">
            <img src={backArrow} alt="back-arrow" />
          </Link>
          <h1 className="locationDetails__title">Warehouse Name</h1>
        </div>
        <hr className="locationDetails__title--hr" />
        <div className="locationDetails__contacts">
          <div className="locationDetails__top--section">
            <h5 className="locationDetails__label">ADDRESS</h5>
            <h4 className="locationDetails__body--top">
              123 Main Street W. Suite 201
            </h4>
            <h4 className="locationDetails__body--bottom">
              Toronto, ON M65GB7 CA
            </h4>
          </div>
          <div className="locationDetails__top--section">
            <h5 className="locationDetails__label">CONTACT</h5>
            <h4>Mara Weinberg</h4>
            <h4 className="locationDetails__body--top">Warehouse Manager</h4>
            <h4>+1 416 678 2345</h4>
            <h4 className="locationDetails__body--bottom">
              weinberg@instock.com
            </h4>
          </div>
        </div>
      </div>
      <WarehouseDetailsItem />
    </div>
  )
}
