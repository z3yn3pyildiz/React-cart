import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import{UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem, Badge, NavItem, NavLink} from 'reactstrap'

class CartSummery extends Component {

  cartSummeryTotal(){
  return(
    
      <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                your cart-{this.props.cart.length}
              </DropdownToggle>
              <DropdownMenu right>
                  {
                      this.props.cart.map(cartItem=>(
                        <DropdownItem key={cartItem.product.productID}>
                          <Badge color="danger" onClick={()=>this.props.removeFromCart(cartItem.product)}>X</Badge>
                      
                        {cartItem.product.name}
                        <Badge color="success">{cartItem.quantity}</Badge>
                          </DropdownItem>
                      


                      ))
                  }
                
                <DropdownItem divider />
                <DropdownItem>
                 <Link to="cart">GO TO CART</Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
  
             
  );
}
cartEmtity(){
  return(<NavItem>
    <NavLink>Boş sepet</NavLink>
  </NavItem>
  );
}




    render() {
        return (
            <div>
               {this.props.cart.length>0? this.cartSummeryTotal(): this.cartEmtity()}
            </div>
        );
    }
}

export default CartSummery;