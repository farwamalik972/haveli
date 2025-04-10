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
                            {/* Dining Experience Dropdown */}
                            <NavDropdown title={<Link to="/dining-experience" className='dropdown-title'>Dining Area</Link>} id="navbar-dropdown" className="dropdown-custom mb-1">
                                <NavDropdown.Item href="/open-sky" className="dropdown-item-custom">Open to Sky</NavDropdown.Item>
                                <NavDropdown.Item href="/haveligarden" className="dropdown-item-custom">Haveli Garden</NavDropdown.Item>
                                <NavDropdown.Item href="/verandha" className="dropdown-item-custom">Verandah </NavDropdown.Item>
                                <NavDropdown.Item href="/baroodkhana" className="dropdown-item-custom">Barood khana</NavDropdown.Item>
                                <NavDropdown.Item href="/musem" className="dropdown-item-custom">Museum</NavDropdown.Item>
                            </NavDropdown>
                            {/* Club & Events Dropdown */}
                            <NavDropdown title={<Link to="/club" className='dropdown-title'> Haveli Club</Link>} id="navbar-dropdown" className="dropdown-custom">
                                <NavDropdown.Item href="/sultanroom" className="dropdown-item-custom">Sultanate Room</NavDropdown.Item>
                                <NavDropdown.Item href="khalsaroom" className="dropdown-item-custom">Khalsa Room</NavDropdown.Item>
                                <NavDropdown.Item href="/mughal" className="dropdown-item-custom">Mughal Room</NavDropdown.Item>
                                <NavDropdown.Item href="/raj" className="dropdown-item-custom">Raj Room </NavDropdown.Item>
                                <NavDropdown.Item href="/sammr" className="dropdown-item-custom">Sammar Palace</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={Link} to="/gellary" className="nav-link-custom">Gallery</Nav.Link>
                             {/* galry tabs Dropdown */}
                             <NavDropdown title={<Link to="/event" className='dropdown-title'>Event Decor</Link>} id="navbar-dropdown" className="dropdown-custom mb-1">
                                <NavDropdown.Item href="/birthday" className="dropdown-item-custom">Birthday Celebration</NavDropdown.Item>
                                <NavDropdown.Item href="/nikha" className="dropdown-item-custom">Nikkah Ceremony</NavDropdown.Item>
                                <NavDropdown.Item href="/corporateevent" className="dropdown-item-custom">Corporate Events </NavDropdown.Item>
                                <NavDropdown.Item href="/offpremises" className="dropdown-item-custom">Off Premises Catering</NavDropdown.Item>
                                <NavDropdown.Item href="/citytours" className="dropdown-item-custom">Walled City of Lahore Tours</NavDropdown.Item>
                                <NavDropdown.Item href="/catering" className="dropdown-item-custom">Events and Buffet Information</NavDropdown.Item>

                            </NavDropdown>

                            {/* About Us: Main Link + Dropdown */}
                            <NavDropdown title={<Link to="/about" className="dropdown-title">About Us</Link>} id="navbar-dropdown" className="dropdown-custom">
                                <NavDropdown.Item as={Link} to="/our-history" className="dropdown-item-custom">Our History</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/mission-vision" className="dropdown-item-custom">Mission & Vision</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/our-team" className="dropdown-item-custom">Meet the Team</NavDropdown.Item>
                            </NavDropdown>





                            <Nav.Link href="/menu" className="nav-link-custom">Menu</Nav.Link>
                            {/* <Nav.Link href="#news" className="nav-link-custom">News & Projects</Nav.Link> */}
                            <Nav.Link href="/contact" className="nav-link-custom">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default MainNav;
