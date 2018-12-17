import React,{Component} from "react";

import { Form, Field} from "react-final-form";
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
    handleSubmit = (event) => {
        
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
                    <input  type='text' value="" className="form-control" name="rname"  />
           
                     
              
           
        </div>
        <div className="col-lg-12 form-group">
                    <label >Address</label>
                    <input type="text" name="address" className="form-control" />
        </div> 
              
       
        <div className="col-lg-12 form-group">


                    <label >Description</label>
                    <input type="text" name="rdesc" className="form-control" />
                  

     </div>
     <div className="col-lg-12 form-group">
       
        <Field 
            name="type"  placeholder="Chain" 
            
            subscription={{
                value: true,
                active: true,
                error: true,
                touched: true
            }}>
               {/* {fieldState =>(
                <pre>{JSON.stringify(fieldState, undefined, 2)}</pre> 
               )} */}
                 {({input, meta, placeholder}) =>(
                <div>
                    <label >Type</label>
                    <input   value="chain" defaultValue="chain" {...input} placeholder={placeholder} className="form-control" readOnly />
                    {meta.error && meta.touched && <span>{meta.error}</span> }
                </div> 
               )}
        </Field> 
        </div>
        <div className="col-lg-12 form-group">

                    <label >Restaurant</label>
                    <select name="rlist" className="form-control" >
                    <option value="0">Choose Restaurant</option>
                 
                
                     </select>

      </div>
      <div className="col-lg-12 form-group text-center">
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