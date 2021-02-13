import {
    Navbar,
    Nav,
} from 'react-bootstrap';
import {
    Link
  } from "react-router-dom";
import styles from './CustomNavbar.module.css';

function CustomNavbar() {
    return (
        <Navbar bg="light" expand="lg" className={styles.navbar}>
            <Navbar.Brand href="#home">
                <img className={styles.marsIcon} src='/img/mars-icon.png'></img>
                Mars Exploration
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link><Link to="/">Home</Link></Nav.Link>
                    <Nav.Link><Link to="/instructions">Instructions</Link></Nav.Link>
                    <Nav.Link><Link to="/docs">Docs</Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default CustomNavbar;