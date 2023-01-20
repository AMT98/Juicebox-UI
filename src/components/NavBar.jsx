import React, { useState } from 'react';
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

import { NavLink} from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
    <Navbar expand={"xl"}>
      <NavbarBrand className="headerTitle">
        JuiceBox
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="me-auto" navbar></Nav>
        <NavItem>
          <NavLink
          >
            HOME
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
          >
            POSTS
          </NavLink>
        </NavItem>

        <UncontrolledDropdown nav inNavbar className="profileNav">
          <DropdownToggle nav caret>
            PROFILE
          </DropdownToggle>
          <DropdownMenu start={getValue.toString()}>
            <>
              <DropdownItem>Log In</DropdownItem>
              <DropdownItem>Sign Up</DropdownItem>
            </>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Collapse>
    </Navbar>
  </div>
  );
}

export default NavBar;