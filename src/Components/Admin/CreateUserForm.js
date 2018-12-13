import React,{Component} from "react";

import { Form, Field} from "react-final-form";
import createDecorator from 'final-form-focus';
import {adduser} from './Helper';


// import { emitKeypressEvents } from "readline";


const sleep = ms=> new Promise(resolve=> setTimeout(resolve,ms))
const showResults = async values=>{
    await sleep(500)
    window.alert(JSON.stringify(values,undefined,2))
}

const focusOnError = createDecorator()
const required =value=> (value ? undefined : "Required")
class CreateUserForm extends Component {
 
    state={
        email: '',
        name: '',
        password: '',
        restaurantid:'',
        restaurantChainid :'',
        role:'',
        type:'restaurant',
        isSubmitDisabled: true
    }  
    
    handleSubmit = (event) => {
     
       adduser(this.state);
      }
      canSubmit() {
        const { email, name, password } = this.state
        // TODO: add valid email format validation in this condition
        if (email.length > 0 && name.length > 0 && password.length >= 5) {
          this.setState({
            isSubmitDisabled: false
          })
        }
        else {
          this.setState({
            isSubmitDisabled: true
          })
        }
      }
    handleChange=(event)=> {
        let currentName =event.target.name;
        this.setState({
          // use dynamic name value to set our state object property
          [event.target.name]: event.target.value
        }, function(){ 
            if( currentName ==='restaurantid' ){
            this.props.handleRestaurantChangeSelection(this.state.restaurantid);}
            this.canSubmit()
        
        })
        //
      }

    render() {  return(
        <div className="content">
        <div className=" card m-b-30 card-body container-fluid">
<div className="card-container">
    <form  onSubmit={this.handleSubmit}>
  <div className="form-group">
    <label for="exampleFormControlInput1">Name</label>
    <input required type="text" className="form-control" name="name" id="name" placeholder="Full Name"
     value={this.state.name}
     onChange={this.handleChange}
    /></div>
    <div className="form-group">
    <label for="exampleFormControlInput1">Password</label>
    <input required type="password" className="form-control"  name="password" id="password" placeholder="Password"
     value={this.state.password}
     onChange={this.handleChange}
    /></div>
    <div className="form-group">
    <label for="exampleFormControlInput1">Email</label>
    <input required type="email" className="form-control" name="email" id="email" placeholder="Email ID"
     value={this.state.email}
     onChange={this.handleChange}
    /></div>
    <div className="form-group">
    <label for="exampleFormControlInput1">Mobile</label>
    <input required type="text" className="form-control" name="mobile" id="mobile" placeholder="Mobile"
     value={this.state.mobile}
     onChange={this.handleChange}
    /></div>
  <div className="form-group">
    <label for="exampleFormControlSelect1">Restaurant List</label>
    <select className="form-control" id="RestaurantControlSelect"
    name="restaurantid"
    onChange={this.handleChange}>
   
    <option value="0">Choose Restaurant</option>
                        { this.props.restaurantList && this.props.restaurantList.length >0
                     ? 
                    
                     this.props.restaurantList.map(item => {
                            return (
                                    <option
                                      key={item._id}
                                      value={item._id}>{item.restaurantname}</option>
                                    );
                        }) :  <option value="No Restaurant">No Restaurant</option>}
    </select>
  </div>
  <div className="form-group">
    <label for="ChainRestaurantControlSelect">Chain Restaurant List</label>
    <select className="form-control" id="ChainRestaurantControlSelect"
    name="restaurantChainid"  onChange={this.handleChange}
    >
    <option value="0">Choose Chain Restaurant</option>
                        { this.props.restaurantChainList && this.props.restaurantChainList.length >0
                     ? 
                    
                     this.props.restaurantChainList.map(item => {
                            return (
                                    <option
                                      key={item._id}
                                      value={item._id}>{item.restaurantname}</option>
                                    );
                        }) :  <option value="No Chain Restaurant">No Restaurant</option>}
    </select>
  </div>
  <div className="form-group">
    <label for="RolesControlSelect1">Roles</label>
    <select className="form-control" id="RolesControlSelect1" 
     name="role"   onChange={this.handleChange}
    >
    <option value="c1">Super Admin</option>
                        <option value="c2">Admin</option>
                        <option value="c2">Manager</option>
                        <option value="c2">Assistance</option>
    </select>
  </div>
  <div className="form-group">
    <label for="exampleFormControlInput1">Type</label>
    <input disabled type="text" className="form-control" id="type" value="restaurant"   onChange={this.handleChange}/></div>
    <button type="submit" class="btn btn-primary mb-2">Save</button>
</form>
</div></div></div>
)

}
}

export default CreateUserForm;