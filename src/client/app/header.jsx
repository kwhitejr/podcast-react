import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class Header extends React.Component {
  render() {
    return (
      <div>
        <Navbar inverse>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">The Grind</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">SoundCloud API</NavItem>

            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">Social Media</NavItem>
              <NavItem eventKey={2} href="#about">About</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
// <NavItem eventKey={1} href="#">Link</NavItem>


// <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
//   <MenuItem eventKey={3.1}>Action</MenuItem>
//   <MenuItem eventKey={3.2}>Another action</MenuItem>
//   <MenuItem eventKey={3.3}>Something else here</MenuItem>
//   <MenuItem divider />
//   <MenuItem eventKey={3.3}>Separated link</MenuItem>
// </NavDropdown>