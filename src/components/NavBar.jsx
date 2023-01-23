import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { getValue } from "@testing-library/user-event/dist/utils";

import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar expand={"xl"} className="header">
        <NavbarBrand className="headerTitle">Juicebox</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar></Nav>
          <NavItem>
            <NavLink className="navLinks" to="/">
              HOME
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="navLinks" to="/posts">
              POSTS
            </NavLink>
          </NavItem>

          <UncontrolledDropdown nav inNavbar className="profileNav">
            <DropdownToggle nav caret>
              PROFILE
            </DropdownToggle>
            <DropdownMenu start={getValue.toString()}>
              <>
                <DropdownItem>
                  <NavLink to="/account">Account</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink to="/login">Log In</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink to="/register">Sign Up</NavLink>
                </DropdownItem>
              </>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
