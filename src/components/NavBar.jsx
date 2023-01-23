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
import AddPost from "./AddPost";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar expand={"xl"} className="header mx-5">
        <NavbarBrand className="headerTitle text-white">Juicebox</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto " navbar></Nav>
          <NavItem>
            <NavLink className="navLinks" to="/">
              <span class="material-symbols-outlined">home</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="navLinks" to="/posts">
              POSTS
            </NavLink>
          </NavItem>

          <UncontrolledDropdown nav inNavbar className="profileNav mx-5">
            <DropdownToggle nav caret>
              <span class="material-symbols-outlined">person</span>
            </DropdownToggle>
            <DropdownMenu start={getValue.toString()}>
              <>
                <DropdownItem className=".bg-secondary">
                  <NavLink to="/account">Account</NavLink>
                  <span className="mx-1">Log Out</span>
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
          <div className="mx-4">

          < AddPost />
          </div>
        </Collapse>
      </Navbar>
      <hr></hr>
    </div>
  );
};

export default NavBar;
