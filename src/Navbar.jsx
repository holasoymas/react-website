import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 max-auto">

                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="container-fluid">
                                <NavLink activeClassName="menu_active" to="/" className="navbar-brand" href="#">MAHESH
                                </NavLink>

                                <button className="navbar-toggler"
                                    type="button" data-toggle="collapse"
                                    data-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation" >

                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse"
                                    id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink activeClassName="menu_active" to="/" className="nav-link"
                                            >Home</NavLink>
                                            {/* aria-current="page" */}
                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeClassName="menu_active" to="/services" className="nav-link" href="#">Services</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeClassName="menu_active" to="/about" className="nav-link" href="#">About</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeClassName="menu_active" to="/contact" className="nav-link" href="#">Contact</NavLink>
                                        </li>
                                        {/* <li className="nav-item">
                                            <NavLink className="nav-link" href="#">Link</NavLink>
                                        </li> */}
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navbar;
