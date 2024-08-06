import React, { useState } from "react";
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
  DropdownItem,
  NavbarText,
  Container
} from "reactstrap";
import logo from "./../../images/welcome/logo.png";
import "./header.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Header(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Container fluid className="fluid main-bar" >
        <Navbar {...args} expand="md" data-aos="fade-down" data-aos-duration="1000">
          <NavbarBrand href="/" data-aos="fade-right" data-aos-duration="1500">
            <img src={logo} alt="logo" className="logo-header" />
          </NavbarBrand>

          <NavbarToggler onClick={toggle} data-aos="fade-left" data-aos-duration="2000" />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink href="/components/" data-aos="zoom-in" data-aos-duration="1500">
                  Home
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ms-1 mb-1"
                    aria-label="Home Icon"
                  >
                    <path
                      d="M6 0L7.90919 4.09081L12 6L7.90919 7.90919L6 12L4.09081 7.90919L0 6L4.09081 4.09081L6 0Z"
                      fill="black"
                    />
                  </svg>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap" data-aos="zoom-in" data-aos-duration="1500">
                  GitHub
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ms-1 mb-1"
                    aria-label="GitHub Icon"
                  >
                    <path
                      d="M6 0L7.90919 4.09081L12 6L7.90919 7.90919L6 12L4.09081 7.90919L0 6L4.09081 4.09081L6 0Z"
                      fill="black"
                    />
                  </svg>
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret data-aos="fade-up" data-aos-duration="2000">
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <NavbarText data-aos="fade-left" data-aos-duration="2000">
              <a className="nav-link" href="login.html">
                Login / Register
              </a>
            </NavbarText>
            <NavbarText data-aos="fade-left" data-aos-duration="2000">
              <a
                className="nav-link"
                href="javascript:void(0);"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasTop"
                aria-controls="offcanvasTop"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Offcanvas Top Icon"
                >
                  <path
                    d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.5 17.5L13.875 13.875"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </NavbarText>
            <NavbarText data-aos="fade-left" data-aos-duration="2000">
              <a
                className="nav-link"
                href="javascript:void(0);"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Offcanvas Right Icon"
                >
                  <path
                    d="M17.3667 3.84172C16.9411 3.41589 16.4357 3.0781 15.8795 2.84763C15.3233 2.61716 14.7271 2.49854 14.1251 2.49854C13.523 2.49854 12.9268 2.61716 12.3706 2.84763C11.8144 3.0781 11.309 3.41589 10.8834 3.84172L10.0001 4.72506L9.11672 3.84172C8.25698 2.98198 7.09092 2.49898 5.87506 2.49898C4.6592 2.49898 3.49313 2.98198 2.63339 3.84172C1.77365 4.70147 1.29065 5.86753 1.29065 7.08339C1.29065 8.29925 1.77365 9.46531 2.63339 10.3251L3.51672 11.2084L10.0001 17.6917L16.4834 11.2084L17.3667 10.3251C17.7926 9.89943 18.1303 9.39407 18.3608 8.83785C18.5913 8.28164 18.7099 7.68546 18.7099 7.08339C18.7099 6.48132 18.5913 5.88514 18.3608 5.32893C18.1303 4.77271 17.7926 4.26735 17.3667 3.84172Z"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </NavbarText>
            <NavbarText data-aos="fade-up" data-aos-duration="1500">
              <a href="javascript:void(0);">
                <svg
                  width="30"
                  height="13"
                  viewBox="0 0 30 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-1 active"
                  aria-label="Menu Toggle Icon"
                >
                  <rect y="11" width="30" height="2" fill="black"></rect>
                  <rect width="30" height="2" fill="black"></rect>
                </svg>
              </a>
            </NavbarText>
          </Collapse>
        </Navbar>
      </Container>
    </div>
  );
}
