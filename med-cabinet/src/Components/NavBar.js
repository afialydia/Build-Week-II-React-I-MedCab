import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import './navbar-reactstrap-modifications.css'
import { Link } from 'react-router-dom';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar className="navbar-sticky" color="light" light expand="md">
          <NavbarBrand href="/">The Med Cab</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink><Link className="restyled-nav-link" to="/getmeds">Get Meds </Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link className="restyled-nav-link" to="/search">Search Strains</Link></NavLink>
              </NavItem>
              <NavItem>
              <NavLink><Link className="restyled-nav-link" to="/profile">My Profile</Link></NavLink>
              </NavItem>
              {/* <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="/profile">
                    My Profile
                  </DropdownItem>
                  <DropdownItem>
                    FAQs
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Careers
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}