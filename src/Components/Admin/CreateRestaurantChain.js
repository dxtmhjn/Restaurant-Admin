import React,{Component} from "react";


import createDecorator from 'final-form-focus';
import {addChainresturant} from './Helper';

const sleep = ms=> new Promise(resolve=> setTimeout(resolve,ms))
const showResults = async values=>{
    await sleep(500)
    window.alert(JSON.stringify(values,undefined,2))
}

const focusOnError = createDecorator()
const required =value=> (value ? undefined : "Required")

class Createrestaurantchain extends Component{
    state = {
        restaurantname: '',
        address: '',
        description: '',
        ParentID:'',
        type: '',
        isSubmitDisabled: true
    }
    handleSubmit = (event) => {
        addChainresturant(this.state)
    }

    handleChange = (event) => {
        let currentName = event.target.name;
        this.setState({
            // use dynamic name value to set our state object property
            [event.target.name]: event.target.value
        }, function () {
            if (currentName === 'restaurantid') {
                this.props.handleRestaurantChangeSelection(this.state.restaurantid);
            }
            //  this.canSubmit()

        })
        //
    }
render(){
    return(
<div className="content">
    <div className="container-fluid">
   <div className=" card m-b-30 card-body card-container">
   
        <form onSubmit={this.handleSubmit}>
<div className="row">
<div className="col-lg-12 form-group">
            
                    <label >Restaurant Name</label>
                    <input required type='text' className="form-control" name="restaurantName" id="restaurantName" placeholder="restaurantName"
                                        value={this.state.restaurantName}
                                        onChange={this.handleChange}  />
           
        </div>
        <div className="col-lg-12 form-group">
                    <label >Address</label>
                    <input required type="text" name="address" className="form-control" id="address" placeholder="Address"
                                        value={this.state.address}
                                        onChange={this.handleChange} />
        </div> 
              
       
        <div className="col-lg-12 form-group">
             <label >Description</label>
                    <input required type="text" className="form-control"  name="description" id="description" placeholder="description"
                                        value={this.state.description}
                                        onChange={this.handleChange} />
     </div>
     <div className="col-lg-12 form-group">
       
                    <label >Type</label>
                    <input required type="text" className="form-control" name="type" id="type" placeholder="type"
                                        value={this.state.type}
                                        onChange={this.handleChange} readOnly />            
        </div>
        <div className="col-lg-12 form-group">

                    <label >Restaurant</label>
                    <select  className="form-control" id="ChainRestaurantControlSelect"
                                        name="restaurantChainid" onChange={this.handleChange}>
                    <option value="0">Choose Restaurant</option>
                    {
                        this.props.restaurantList && this.props.restaurantList.length > 0
                                     ?
                                         this.props.restaurantList.map(item => {
                                             return (
                                                  <option
                                                     key={item._id}
                                                     value={item._id}>{item.restaurantname}</option>
                                                );
                                            }) : <option value="No  Restaurant">No Restaurant</option>
                    }
                
                     </select>

      </div>
      <div className="col-lg-12 form-group text-right">
        <button type="submit"  className="btn btn-large btn-warning" >Submit</button>
    </div>
    </div>
        </form>
    
    </div>
        </div>
        </div>
    );
}
}

export default Createrestaurantchain;