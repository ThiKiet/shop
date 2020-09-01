import React from "react";
import PropTypes from "prop-types";
import {
  Container,
  Image,
  Nav,
  Navbar,
  DropdownButton,
  ButtonGroup,
  Dropdown,
  Row,
  Col,
} from "react-bootstrap";
import Logo from "../../assets/icon/logo.png";
import CartIcon from "../../assets/icon/cart.png";
import UserIcon from "../../assets/icon/user.png";
import { LINKS } from "../../constants/header";
import "./index.css";

const Header = ({ basketNumber }) => {
  return (
    <Container>
      <Navbar expand="lg">
        <Row className="d-flex justify-content-between">
          <Col>
            <Navbar.Brand href="/home">
              <Image src={Logo} alt="Logo" />
            </Navbar.Brand>
          </Col>
          <Col>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </Col>
        </Row>

        <Navbar.Collapse className="nav-menu">
          <Nav>
            {LINKS.map((link, index) => (
              <Nav.Link key={index} bsPrefix="element-menu" href={link.href}>
                {link.name}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>

        <Navbar.Collapse className="nav-menu">
          <Nav>
            <Nav.Link href="/cart">
              <Image src={CartIcon} alt="Cart icon" />
              {!!basketNumber && basketNumber > 0 && (
                <span className="basket-number">{basketNumber}</span>
              )}
            </Nav.Link>
          </Nav>
          <Nav className="d-flex align-items-start">
            <DropdownButton
              as={ButtonGroup}
              key="right"
              id="dropdown-button-drop-right"
              drop="right"
              variant="user-option"
              title={<Image src={UserIcon} alt="User icon" />}
            >
              <Dropdown.Item>SignOut</Dropdown.Item>
              <Dropdown.Item>SignUp</Dropdown.Item>
            </DropdownButton>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

Header.propTypes = {
  basketNumber: PropTypes.number,
};

Header.defaultProps = {
  basketNumber: 0,
};

export default Header;
