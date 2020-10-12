import React, { Component } from "react";
import { Table,Button } from "reactstrap";

class Product extends Component {
 
  render() {
    return (
      <div>
        <h2>
          {" "}
          {this.props.title} {this.props.currentKatagori}-
        </h2>

        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              
              <th>quantitiyperunit</th>
              <th>unitprice</th>
              <th>catagory id</th>
              <th>unit stok</th>
              <th>buttonum</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map(
                (product) => (
              <tr key={product.productID}>
                <th scope="row">{product.productID}</th>
                <td>{product.name}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitPrice}</td>
                <td>{product.categoryID}</td>
                <td>{product.unitsInStock}</td>
                <td><Button onClick={()=>this.props.addtoCard(product)} color="info">Ekle</Button></td>
              </tr>)
            )}
            <tr></tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Product;
