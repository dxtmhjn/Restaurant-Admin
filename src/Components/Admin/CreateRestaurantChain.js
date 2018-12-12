import React from "react";

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

const Createrestaurantchain=(props)=>(
    <div className="content">
    <div className="container-fluid">
   <div className=" card m-b-30 card-body card-container">
    <Form onSubmit = {addChainresturant} 
    decorators={[focusOnError]}
    subscription={{
         submitting: true,
    }}>
        {({handleSubmit, values, submitting })=>
        <form onSubmit={handleSubmit}>
<div className="row">
<div className="col-lg-12 form-group">
        <Field 
            name="restaurantname"  placeholder="Restaurant Name" validate={required}
                  
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
                <div className={meta.active ? "active" : ""}>
                    <label >Restaurant Name</label>
                    <input  type='text'
                    value={props.editData && props.editData.length >0 ?props.editData[0].restaurantname :"estdgs"}
           
                       {...input} placeholder={placeholder} className="form-control" />
                    {meta.error && meta.touched && <span>{meta.error}</span> }
                </div> 
               )}
        </Field> 
        </div>
        <div className="col-lg-12 form-group">
        <Field 
            name="address"  placeholder="Address" validate={required}
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


                    <label >Address</label>
                    <input type="text" {...input} placeholder={placeholder} className="form-control" />
                    {meta.error && meta.touched && <span>{meta.error}</span> }
                </div> 
               )}
        </Field> 
        </div>
        <div className="col-lg-12 form-group">
        <Field 
            name="description"  placeholder="description" validate={required}
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


                    <label >Description</label>
                    <input type="text" {...input} placeholder={placeholder} className="form-control" />
                    {meta.error && meta.touched && <span>{meta.error}</span> }
                </div> 
               )}
        </Field> 
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
        <Field 
            name="parent_id"  placeholder="Restaurant" validate={required}
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


                    <label >Restaurant</label>
                    <select  {...input} placeholder={placeholder} className="form-control" >
                    <option value="0">Choose Restaurant</option>
                    { props.restaurantList && props.restaurantList.length >0
                     ? 
                    
                     props.restaurantList.map(item => {
                            return (
                                    <option
                                      key={item._id}
                                      value={item._id}>{item.restaurantname}</option>
                                    );
                        }) :  <option value="No Restaurant">No Restaurant</option>}
                     </select>
                    {meta.error && meta.touched && <span>{meta.error}</span> }
                </div> 
               )}
        </Field> 
      </div>
      <div className="col-lg-12 form-group text-center">
        <button type="submit" disabled={submitting} className="btn btn-large btn-warning" >Submit</button>
    </div>
    </div>
        </form>}
    </Form>
    </div>
        </div>
        </div>
)

export default Createrestaurantchain;