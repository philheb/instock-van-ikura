import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
class Navbar extends Component {
    render() {
        let inventory = ''
        let warehouses = ''
        if (this.props.routeProps) {
            if (this.props.routeProps.path === '/inventory') {
                inventory = "white__underline"
            }
            if (this.props.routeProps.path === '/warehouses') {
                warehouses = "white__underline"
            }
        }
        return (
            <header className="tablet desktop">
                <div className="logo__container" >
                    <Link to="/inventory"><img src='/Assets/Logo/Logo-instock.svg' alt='logo' className="logo" /></Link>
                </div>

                <nav className="nav__wrapper">
                    <Link to="/inventory" className={inventory}>Inventory </Link>
                    <Link to="/warehouses" className={warehouses}>Locations </Link>
                </nav>

            </header>
        )
    }
}



export default Navbar;
