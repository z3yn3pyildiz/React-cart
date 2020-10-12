
import Katalog from "./Katalog";
import Navi from "./Navi"
import Product from "./Product";
import React, { Component } from "react";
import { Container, Row,Col } from "reactstrap";

class App extends Component{
  state={currentKatagori:"selam",products:[],cart:[]}
  componentDidMount(){
    this.getProducts()
  }
  removefromcart=(product)=>{
    let newCart=this.state.cart.filter(c=>c.product.productID!==product.productID)
    this.setState({cart:newCart})


  }
  addtoCard=(product)=>{
    let newCart=this.state.cart
    var addedItem=newCart.find(c=>c.product.productID===product.productID)
    if(addedItem){
      addedItem.quantity+=1
    }else{
      newCart.push({product:product,quantity:1})
    }
    
    this.setState({cart:newCart});
   
    
        }

  changeCatagory=(gelenKatagori)=>{
    this.setState({currentKatagori:gelenKatagori.catagoryName})
    this.getProducts(gelenKatagori.categoryID)
  }

  getProducts=(categoryID)=>{
    let url="http://localhost:3000/product"
    if(categoryID){
      url+="?categoryID="+categoryID
    }
    fetch(url)
    .then(response=>response.json())
    .then(data=>this.setState({products:data}));
        }
  render(){

    
    return (
      <div className="App">
        <div>
          <Container>
          
              <Navi cart={this.state.cart}  removeFromCart={this.removefromcart}
               
              />
           
           
            <Row>
             
           <Col xs="3"><Katalog currentKatagori={this.state.currentKatagori} changeCatagory={this.changeCatagory} title="catagory list"></Katalog></Col>
           <Col xs="9"> 
           <Product 
           removeFromCart={this.removefromcart}
           addtoCard={this.addtoCard}
           products={this.state.products}
           currentKatagori={this.state.currentKatagori}
            title="product "></Product>
            </Col>
              
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}


export default App;
