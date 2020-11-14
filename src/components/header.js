import React, { Component }  from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    render() {
        return (
            <React.Fragment>
                <Jumbotron className="jumbotron mb-0 " fluid>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1>Delite</h1>
                                <h2>Shop With Us Now</h2>
                            </div>
                        </div>
                    </div>
                </Jumbotron>

                <Navbar className="navbar-site" dark sticky="top" expand="md">
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="#">Delite</NavbarBrand>
                        <NavbarToggler />
                        <Collapse navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                         Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/products">
                                         Products
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/blog">
                                        Blog
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus">
                                         About
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        Contact Us
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;