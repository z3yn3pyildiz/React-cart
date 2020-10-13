import React, { Component } from 'react';

class FormDemo extends Component {
    state={UserName:'',City:''}
    onChangeHandler=(event)=>{
        let name=event.target.name
        let value=event.target.value
        this.setState({[name]:value})
    }
    onSubmitChange=(event)=>{
        
        event.preventDefault();
     
        alert(this.state.UserName+" "+this.state.City)

    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitChange}>
                    <h3>User Name</h3>
                    <input name="UserName" type="text" onChange={this.onChangeHandler}></input>
                    <h4>user name {this.state.UserName}</h4>

                    <h3>City Name</h3>
                    <input name="City" type="text" onChange={this.onChangeHandler}></input>
                    <h4>city name {this.state.City}</h4>

                    <input type="submit" value="save"></input>
                </form>
                
            </div>
        );
    }
}

export default FormDemo;