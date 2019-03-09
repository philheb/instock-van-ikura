import React from 'react'
import { Link } from 'react-router-dom'
import rightArrow from '../../Assets/Icons/Icon-arrow-right.svg'

const Warehouse = props => {
  return (
    <>
      <div className="location">
        <div className="location__details">
          <div className="location__warehouse location__section">
            {/* <h5>WAREHOUSE</h5> */}
            <h4 id="location__name">{props.name}</h4>
            <h4 className="location__address">{props.address}</h4>
          </div>
          <div className="location__bottom">
            <div className="location__contact location__section">
              {/* <h5>CONTACT</h5> */}
              <h4>{props.managerName}</h4>
              <h4 id="location__manager--title">{props.managerTitle}</h4>
            </div>
            <div className="location__contact--info location__section">
              {/* <h5>CONTACT INFO</h5> */}
              <h4>{props.phone}</h4>
              <h4>{props.email}</h4>
            </div>
            <div className="location__categories location__section">
              {/* <h5>CATEGORIES</h5> */}
              <h4>{props.categories}</h4>
            </div>
          </div>
        </div>
        <div className="location__arrow">
          <Link to="/warehouses/:id">
            <img src={rightArrow} alt="arrow-right" />
          </Link>
        </div>
      </div>
      <hr className="location__hr" />
    </>
  )
}

export default Warehouse
