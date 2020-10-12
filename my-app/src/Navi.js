import React, { Component } from 'react';
import CartSummery from './CartSummery'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  
  NavbarText} from 'reactstrap';

  
 


class Navi extends Component {
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

        <Navbar expand="md" className="stick-nav">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
              <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>

              
              <CartSummery removeFromCart={this.props.removeFromCart} cart={this.props.cart}></CartSummery>
            </Nav>
            <NavbarText>Simple Text</NavbarText>
           

          </Collapse>
        </Navbar>

    );
  }
}



export default Navi;