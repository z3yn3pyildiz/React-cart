import alertify from 'alertifyjs';
import React, { Component } from 'react';
import {Button,Form,FormGroup,Label,Input} from "reactstrap"

class FormDemo2 extends Component {
    state={email:"",password:"",city:"",description:""}
    onHandleChange=event=>{
        let name=event.target.name
        let value=event.target.value
        this.setState({[name]:value})
    }
    onSubmitChange=event=>{
        event.preventDefault();
        alertify.success(this.state.email+" added to db")
    }
    render() {
        return (
            <div>
                 <Form onSubmit={this.onSubmitChange}>
                <FormGroup>
                   
                    <Label for="email">Email! </Label>
                    <Input type="email" name="email" id="eail" placeholder="Enter Email" onChange={this.onHandleChange}></Input>

                
                </FormGroup>

                <FormGroup>
                    <Form onSubmit={this.onSubmitChange}>
                    <Label for="password">Password! </Label>
                    <Input type="password" name="password" id="password" placeholder="Enter Password" onChange={this.onHandleChange}></Input>

                    </Form>
                </FormGroup>

                <FormGroup>
                    <Form onSubmit={this.onSubmitChange}>
                    <Label for="description">Description! </Label>
                    <Input type="dtextarea" name="description" id="description" placeholder="Enter description" onChange={this.onHandleChange}></Input>

                    </Form>
                </FormGroup>

                <FormGroup>
                    <label for="city">City</label>
                    <Input onChange={this.onHandleChange} name="city" type="select" id="city">
                        <option>ankara</option>
                        <option>istanbul</option>
                        <option>izmir</option>
                        <option>konya</option>
                        <option>aydın</option>
                        <option>antalya</option>


                    </Input>
                </FormGroup>
                <Button type="submit" >Send</Button>
                </Form>


                
            </div>
        );
    }
}

export default FormDemo2;