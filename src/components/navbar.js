import {
    Navbar,
    Container,
    Nav,
    NavDropdown,
  } from "react-bootstrap";
  import { Link } from "react-router-dom";
  import "./navbar.css";
  import instagramLogo from "../icons/instagram.png"
  import facebookLogo from "../icons/facebook.png"

function MyNavbar() {

    let scrollToTop = function() {
        window.scrollTo(0, 0);
    };

    return(

        <Navbar className="navbar py-2 mb-3" expand="lg" variant="light" sticky="top"  >
            <Container fluid>
                <Navbar.Brand onClick={scrollToTop} className="navbar-brand" as={Link} to="">
                    <img src="https://res.cloudinary.com/dhxs9jryg/image/upload/v1652722123/Fultz%20house/white-logo_pgjtu0.png" ></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="the-nav me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                    >
                    <NavDropdown className="dropdown" menuVariant="light" title="About" id="navbarScrollingDropdown">
                        <NavDropdown.Item className="nav-drop-item" onClick={scrollToTop} as={Link} to="">About Us</NavDropdown.Item>
                        <NavDropdown.Item className="nav-drop-item" onClick={scrollToTop} as={Link} to="/facility">Facility</NavDropdown.Item>
                        <NavDropdown.Item className="nav-drop-item" onClick={scrollToTop} as={Link} to="/governance">Governance</NavDropdown.Item>
                        <NavDropdown.Item className="nav-drop-item" onClick={scrollToTop} as={Link} to="/careers">Careers</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown menuVariant="light" title="Archives & Collections" id="navbarScrollingDropdown">
                        <NavDropdown.Item className="nav-drop-item" onClick={scrollToTop} as={Link} to="/history" >Our Community History</NavDropdown.Item>
                        <NavDropdown.Item className="nav-drop-item" onClick={scrollToTop} as={Link} to="/artifacts" >Artifacts</NavDropdown.Item>
                        <NavDropdown.Item className="nav-drop-item" onClick={scrollToTop} as={Link} to="/notablepeople" >Notable People</NavDropdown.Item>
                        <NavDropdown.Item className="nav-drop-item" onClick={scrollToTop} as={Link} to="/geneology">Geneology</NavDropdown.Item>
                        <NavDropdown.Item className="nav-drop-item" onClick={scrollToTop} as={Link} to="brochures">Brochures</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown menuVariant="light" title="Media" id="navbarScrollingDropdown">
                        <NavDropdown.Item className="nav-drop-item" onClick={scrollToTop} as={Link} to="/photo">Photos</NavDropdown.Item>
                        <NavDropdown.Item className="nav-drop-item" onClick={scrollToTop} as={Link} to="/videos">Videos</NavDropdown.Item>
                        <NavDropdown.Item className="nav-drop-item" onClick={scrollToTop} as={Link} to="/presentations">Presentations</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown menuVariant="light" title="Events" id="navbarScrollingDropdown">
                        <NavDropdown.Item className="nav-drop-item" onClick={scrollToTop} as={Link} to="/events" >Upcoming Events</NavDropdown.Item>
                        <NavDropdown.Item className="nav-drop-item" onClick={scrollToTop} as={Link} to="/rentals">Rentals</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown menuVariant="light" title="Programming" id="navbarScrollingDropdown">
                        <NavDropdown.Item className="nav-drop-item" onClick={scrollToTop} as={Link} to="/programming">Programming</NavDropdown.Item>
                        <NavDropdown.Item className="nav-drop-item" onClick={scrollToTop} as={Link} to="/kids">Kids Page</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown menuVariant="light" title="Contribute" id="navbarScrollingDropdown">
                        <NavDropdown.Item className="nav-drop-item" onClick={scrollToTop} as={Link} to="/volunteer">Volunteers</NavDropdown.Item>
                        <NavDropdown.Item className="nav-drop-item" onClick={scrollToTop} as={Link} to="/donations">Donate</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link as={Link} to="" className="nav-links">
                            Shop
                    </Nav.Link>
                    <NavDropdown menuVariant="light" title="Contact" id="navbarScrollingDropdown">
                        <NavDropdown.Item className="nav-drop-item" onClick={scrollToTop} as={Link} to="/contact">Contact Us</NavDropdown.Item>
                        <NavDropdown.Item className="nav-drop-item" onClick={scrollToTop} as={Link} to="/links">Community Links</NavDropdown.Item>
                    </NavDropdown>
                    <article>
                        <a href="https://www.instagram.com/fultzhouse/?hl=en">
                        <img src={instagramLogo} width="30px" ></img>
                        </a>
                        <a href="https://www.facebook.com/FultzHouse/"margin-right="30px" margin-left="30px">
                        <img src={facebookLogo} width="30px"></img>
                        </a>
                    </article>
                    
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
          )
      }

export default MyNavbar;