import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Navigation extends React.Component {
    render() {
      return (
        <Navbar default collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to ="/">HomeTaste</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} componentClass ={Link} to ="/">
                Home
              </NavItem>
              <NavItem eventKey={2} componentClass = {Link} to="/">
                About
              </NavItem>
              <NavItem eventKey={3} componentClass = {Link} to="/">
                News
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      )
    }
  }
  
