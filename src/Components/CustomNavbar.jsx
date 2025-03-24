import { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../Images/haveli-logo.png";

const CustomNavbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <Navbar expand="lg" className={`custom-navbar ${scrolled ? "scrolled" : ""}`} fixed="top">
            <div className="container d-flex flex-column align-items-center">
                <Navbar.Brand as={Link} to="/" className={`logo ${scrolled ? "scrolled-logo" : ""}`}>
                    <img src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                    <Nav className="nav-links">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        {/* Dining Experience Dropdown */}
                        <NavDropdown title={<Link to="/dining-experience" className='dropdown-title'>Dining Area</Link>} id="navbar-dropdown" className="dropdown-custom">
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
                        {/* galry tabs Dropdown */}
                        <NavDropdown title={<Link to="/gellary" className='dropdown-title'>Gallery</Link>} id="navbar-dropdown" className="dropdown-custom">
                            <NavDropdown.Item href="/birthday" className="dropdown-item-custom">Birthday Celebration</NavDropdown.Item>
                            <NavDropdown.Item href="/nikha" className="dropdown-item-custom">Nikkah Ceremony</NavDropdown.Item>
                            {/* <NavDropdown.Item href="#" className="dropdown-item-custom">Corporate Events </NavDropdown.Item>
                            <NavDropdown.Item href="#" className="dropdown-item-custom">Off Premises Catering</NavDropdown.Item>
                            <NavDropdown.Item href="#" className="dropdown-item-custom">Walled City of Lahore Tours</NavDropdown.Item> */}
                            <NavDropdown.Item href="/catering" className="dropdown-item-custom">Events and Buffet Information</NavDropdown.Item>

                        </NavDropdown>

                        {/* About Us: Main Link + Dropdown */}
                        <NavDropdown title={<Link to="/about" className="dropdown-title">About Us</Link>} id="navbar-dropdown" className="dropdown-custom">
                            <NavDropdown.Item as={Link} to="/our-history" className="dropdown-item-custom">Our History</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/mission-vision" className="dropdown-item-custom">Mission & Vision</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/our-team" className="dropdown-item-custom">Meet the Team</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to="/menu">Menu</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
};

export default CustomNavbar;