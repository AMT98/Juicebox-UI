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
  const [token, setToken] = useState(localStorage.getItem("token"));

  const toggle = () => setIsOpen(!isOpen);

  const handleLogOut = () => {
    localStorage.removeItem('token')
    window.location.reload()
  }
  return (
    <div>
      <Navbar expand={"xl"} className="header mx-5">
        <NavbarBrand className="headerTitle">
          <NavLink className="navLinks"  to= {token? "./posts" : "./"}>
            Juicebox
          </NavLink>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        {token ? (
          <Collapse isOpen={isOpen} navbar>
            <Nav className="me-auto " navbar></Nav>
            <NavItem>
              <NavLink className="navLinks" to="/">
                <span className="material-symbols-outlined">home</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="navLinks" to="/posts">
                <span className="material-symbols-outlined">explore</span>
              </NavLink>
            </NavItem>

            <UncontrolledDropdown nav inNavbar className="profileNav mx-5">
              <DropdownToggle nav caret>
                <span className="material-symbols-outlined">person</span>
              </DropdownToggle>
              <DropdownMenu start={getValue.toString()}>
                <>
                  <DropdownItem className="bg-secondary">
                    <NavLink to="/account">Account</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <span className="material-symbols-outlined">favorite</span>
                    <span className="mx-2">Likes</span>
                  </DropdownItem>
                  <DropdownItem>
                    <span className="material-symbols-outlined">
                      person_add
                    </span>
                    <span className="mx-2">Following</span>
                  </DropdownItem>
                  <DropdownItem>
                    <span className="material-symbols-outlined">help</span>
                    <span className="mx-2">Help</span>
                  </DropdownItem>
                  <DropdownItem>
                    <span onClick={handleLogOut} >Log Out</span>
                  </DropdownItem>
                </>
              </DropdownMenu>
            </UncontrolledDropdown>
            <div className="mx-4">
              <AddPost />
            </div>
          </Collapse>
        ) : (
          <div>
            <NavLink className="loginBtn navLinks" to="/login">Log in</NavLink>
            <NavLink className="signupBtn navLinks" to="/register">Sign up</NavLink>
          </div>
        )}
      </Navbar>
      <hr></hr>
    </div>
  );
};

export default NavBar;
