import React, { Component } from "react";
import CartSummery from "./CartSummery";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Form,
} from "reactstrap";
import { Link } from "react-router-dom";

class Navi extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <Navbar expand="md" className="stick-nav">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink>  <Link to="/form1">Go Form</Link></NavLink>
            
            </NavItem>
            <NavItem>
            <NavLink><Link to="/form1-2">Go Form2</Link></NavLink>
              
            </NavItem>

            <CartSummery
              removeFromCart={this.props.removeFromCart}
              cart={this.props.cart}
            ></CartSummery>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    );
  }
}

export default Navi;
