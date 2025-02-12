import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../Images/haveli-logo.png";

function MainNav() {
    return (
        <div className='main-navbar-wraper'>
            <Navbar expand="lg" className="navbar-custom sticky-navbar">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img className='logo' src={logo} alt="Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-nav" />
                    <Navbar.Collapse id="navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link as={Link} to="/" className="nav-link-custom">Home</Nav.Link>

                            {/* About Us: Main Link + Dropdown */}
                            <NavDropdown title={<Link to="/about" className="dropdown-title">About Us</Link>} id="navbar-dropdown" className="dropdown-custom">
                                <NavDropdown.Item as={Link} to="/our-history" className="dropdown-item-custom">Our History</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/mission-vision" className="dropdown-item-custom">Mission & Vision</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/our-team" className="dropdown-item-custom">Meet the Team</NavDropdown.Item>
                            </NavDropdown>

                            {/* Dining Experience Dropdown */}
                            <NavDropdown title={<Link to="/dining-experience" className='dropdown-title'>Dining & Experience</Link>} id="navbar-dropdown" className="dropdown-custom">
                                <NavDropdown.Item href="/open-sky" className="dropdown-item-custom">Open to Sky</NavDropdown.Item>
                                <NavDropdown.Item href="#verandah" className="dropdown-item-custom">Verandah</NavDropdown.Item>
                                <NavDropdown.Item href="#club-private-dining" className="dropdown-item-custom">Club Private Dining</NavDropdown.Item>
                                <NavDropdown.Item href="#dining-area-overview" className="dropdown-item-custom">Dining Area Overview</NavDropdown.Item>
                                <NavDropdown.Item href="/gellary" className="dropdown-item-custom">Photo Gallery</NavDropdown.Item>
                            </NavDropdown>

                            {/* Club & Events Dropdown */}
                            <NavDropdown title="Club & Events" id="navbar-dropdown" className="dropdown-custom">
                                <NavDropdown.Item href="#club-info" className="dropdown-item-custom">Club Information</NavDropdown.Item>
                                <NavDropdown.Item href="#event-catering" className="dropdown-item-custom">Event & Catering Services</NavDropdown.Item>
                            </NavDropdown>

                            <Nav.Link href="/menu" className="nav-link-custom">Menu</Nav.Link>
                            <Nav.Link href="#news" className="nav-link-custom">News & Projects</Nav.Link>
                            <Nav.Link href="/contact" className="nav-link-custom">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default MainNav;
