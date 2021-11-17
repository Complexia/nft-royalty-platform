import { Nav, Navbar, NavDropdown } from 'react-bootstrap';


import { Link } from 'react-router-dom';
import '../stylesheets/navbar.css';

const NavBar = () => {
    

    return (
        <Navbar className="navbar-transparent">
            <Navbar.Brand href="/"><h1 className="brand">nftplus</h1></Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">

            <NavDropdown title="Technology" id="basic-nav-dropdown">
                <NavDropdown.Item><Link to="#">Item 1</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="#">Item 1</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="#">Item 1</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="#">Item 1</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="#">Item 1</Link></NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Blog</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Developers" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Documentation</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Tutorials</NavDropdown.Item> 
                <NavDropdown.Item href="#action/3.2">Whitepaper</NavDropdown.Item>               
            </NavDropdown>

            <Nav.Link href="#blog">Github</Nav.Link>

            <Nav.Link href="#blog">Blog</Nav.Link>

                <Navbar.Text className="buttons">
                    
                    
                    
                </Navbar.Text>

            </Navbar.Collapse>
        </Navbar>
        
        
    )
}

export default NavBar;