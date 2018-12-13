import React,{Fragment} from "react";

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



const CreateUser = (props)=> (
    <div className="content">
                <div className=" card m-b-30 card-body container-fluid">
       <div className="card-container">
        <Form onSubmit = {adduser} 
        decorators={[focusOnError]}
        subscription={{
             submitting: true,
        }}>
            {({handleSubmit, values, submitting })=>
            <form onSubmit={handleSubmit}>
<div className="row">
<div className="col-lg-12 form-group">
            <Field 
                name="name" type="text"  placeholder="Name" validate={required}
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
    

                        <label >Full Name</label>
                        <input {...input} placeholder={placeholder} type="text" className="form-control" />
                        {meta.error && meta.touched && <span>{meta.error}</span> }
                    </div> 
                   )}
            </Field> 
        </div>
        <div className="col-lg-12 form-group">
            <Field 
                name="password" type="password" placeholder="Password" validate={required}
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


                        <label >Password</label>
                        <input type="password" {...input} placeholder={placeholder} className="form-control"  />
                        {meta.error && meta.touched && <span>{meta.error}</span> }
                    </div> 
                   )}
            </Field> 
           </div>
           <div className="col-lg-12 form-group">
            <Field 
                name="email" type="email"  plaeholder="Email" validate={required}
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


                        <label >Email</label>
                        <input type="email" {...input} placeholder={placeholder} className="form-control"  />
                        {meta.error && meta.touched && <span>{meta.error}</span> }
                    </div> 
                   )}
            </Field> 
          </div>
          <div className="col-lg-12 form-group">
            <Field 
                name="mobile"  placeholder="Mobile"  type="text" validate={required}
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


                        <label >Mobile</label>
                        <input type="text" {...input} placeholder={placeholder} className="form-control"  />
                        {meta.error && meta.touched && <span>{meta.error}</span> }
                    </div> 
                   )}
            </Field> 
            </div>
            <div className="col-lg-12 form-group">
           
        
         
            <Field 
                name="restaurent_id" type="text"placeholder="Restaurant ID" validate={required}
                subscription={{
                    value: true,
                    active: true,
                    error: true,
                    touched: true
                }}>
                   
                     {({input, meta, placeholder}) =>(
                    <div>
                        <label >Restaurant Name</label>
                     
                        <select {...input} placeholder={placeholder} className="form-control" onChange={(e)=> props.handleRestaurantChangeSelection(e)} >
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
            <div className="col-lg-12 form-group">
            <Field 
                name="chain_id"  placeholder="Chain Id" validate={required}
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


                        <label >Chain Id</label>
                        <select  {...input} placeholder={placeholder} className="form-control" >
                        <option value="0">Choose Chain Restaurant</option>
                        { props.restaurantChainList && props.restaurantChainList.length >0
                     ? 
                    
                       props.restaurantChainList.map(item => {
                            return (
                                    <option
                                      key={item._id}
                                      value={item._id}>{item.restaurantname}</option>
                                    );
                        }) :  <option value="No Chain Restaurant">No Restaurant</option>}
                        </select>
                        {meta.error && meta.touched && <span>{meta.error}</span> }
                    </div> 
                   )}
            </Field> 
          </div>
          <div className="col-lg-12 form-group">
            <Field 
                name="role"  placeholder="Role" validate={required}
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
                    <Fragment>


                        <label >Role</label>
                        <select  {...input} placeholder={placeholder} className="form-control" >
                        <option value="c1">Super Admin</option>
                        <option value="c2">Admin</option>
                        <option value="c2">Manager</option>
                        <option value="c2">Assistance</option>

                        </select>
                        {meta.error && meta.touched && <span>{meta.error}</span> }
                        </Fragment>
                   )}
            </Field> 
           </div>
           <div className="col-lg-12 form-group">
            <Field 
                name="type"  placeholder="type" 
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
                        <input className="form-control" type="text" {...input} placeholder={placeholder} value="Restaurant" readOnly />
                        {meta.error && meta.touched && <span>{meta.error}</span> }
                    </div> 
                   )}
            </Field> 
            </div>
            <div className="col-lg-12 form-group text-center">
            <button type="submit" disabled={submitting} 
            className="btn btn-large btn-warning" 
            >Submit</button>
        </div>
        </div>
            </form>}
        </Form>
        </div>
        </div>
        </div>
)

export default CreateUser;