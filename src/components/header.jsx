import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Tooltip, OverlayTrigger } from 'react-bootstrap';

const tooltip = (
  <Tooltip id="tooltip">Coming Soon!</Tooltip>
);

export default React.createClass({
  render() {
    return (
      <div>
        <Navbar fixedTop={true} inverse>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">The Grind</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={2} id="rss" href="http://feeds.soundcloud.com/users/soundcloud:users:168783376/sounds.rss" target="_blank">RSS</NavItem>
              <NavItem eventKey={3} id="itunes" href="https://itunes.apple.com/us/podcast/the-grind-with-kevin/id1031095224?mt=2" target="_blank">iTunes</NavItem>
              <NavItem eventKey={4} href="#episodes">Episodes</NavItem>
              <NavItem eventKey={6} href="#about">About</NavItem>
            </Nav>
          </Navbar.Collapse>

        </Navbar>
      </div>
    );
  }
});

// <NavItem eventKey={1} href="https://www.twitter.com/thegrindwithkev" target="_blank" className=""><span className="fa fa-2x fa-twitter"></span></NavItem>
//               <NavItem eventKey={2} href="https://instagram.com/thegrindwithkevin" target="_blank" className=""><span className="fa fa-2x fa-instagram"></span></NavItem>
//               <NavItem eventKey={3} href="https://www.facebook.com/thegrindwithkevin" target="_blank" className=""><span className="fa fa-2x fa-facebook"></span></NavItem>