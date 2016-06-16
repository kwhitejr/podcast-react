import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Tooltip, OverlayTrigger } from 'react-bootstrap';

const tooltip = (
  <Tooltip id="tooltip">Coming Soon!</Tooltip>
);

export default React.createClass {
  render() {
    return (
      <div>
        <Navbar fixedTop={true} inverse>
          <Navbar.Header>
            <Navbar.Brand>
              <a class="page-scroll" href="#">The Grind</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <OverlayTrigger placement="right" overlay={tooltip}>
                <NavItem eventKey={1} href="#">SoundCloud Player</NavItem>
              </OverlayTrigger>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="https://www.twitter.com/thegrindwithkev" target="_blank" className=""><span className="fa fa-2x fa-twitter"></span></NavItem>
              <NavItem eventKey={2} href="https://instagram.com/thegrindwithkevin" target="_blank" className=""><span className="fa fa-2x fa-instagram"></span></NavItem>
              <NavItem eventKey={3} href="https://www.facebook.com/thegrindwithkevin" target="_blank" className=""><span className="fa fa-2x fa-facebook"></span></NavItem>
              <NavItem eventKey={4} class="page-scroll" href="#episodes">Episodes</NavItem>
              <NavItem eventKey={6} class="page-scroll" href="#about">About</NavItem>
            </Nav>
          </Navbar.Collapse>

        </Navbar>
      </div>
    );
  }
}