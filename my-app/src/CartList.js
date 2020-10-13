import React, { Component } from "react";
import { Button, Table } from "reactstrap";
class CartList extends Component {
  renderCart() {
    return(
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>CatagoryId</th>
            <th>Quantity</th>
            <th>UnitPrice</th>
            <th>UnitInStock</th>
          </tr>
        </thead>
        <tbody>
          {this.props.cart.map((gelenKart) => (
            <tr key={gelenKart.product.productID}>
              <td>{gelenKart.product.productID}</td>
              <td>{gelenKart.product.name}</td>
              <td>{gelenKart.product.categoryID}</td>
              <td>{gelenKart.quantity}</td>
              <td>{gelenKart.product.unitPrice}</td>
              <td>{gelenKart.product.unitsInStock}</td>
              <Button color="danger"
              onClick={()=>this.props.removeFromCart(gelenKart.product)}>Remove

              </Button>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
  render() {
    return <div>{this.renderCart()}</div>;
  }
}

export default CartList;
