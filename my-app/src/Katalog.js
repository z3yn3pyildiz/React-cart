import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

class katalog extends Component {
  
   
    state = {
      prodyct: []
      
    };
   componentDidMount(){
     this.getCatagories()
   }
    getCatagories=()=>{
fetch("http://localhost:3000/catagory")
.then(response=>response.json())
.then(data=>this.setState({prodyct:data}));
    }
  
 
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <ListGroup >
          {this.state.prodyct.map((katagoritem) => (
            <ListGroupItem 
            active={katagoritem.catagoryName===this.props.currentKatagori}
            onClick={()=>this.props.changeCatagory(katagoritem)} key={katagoritem.categoryID}>
              {katagoritem.catagoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
          <h4>{this.props.currentKatagori}</h4>
      </div>
    );
  }
}

export default katalog;
