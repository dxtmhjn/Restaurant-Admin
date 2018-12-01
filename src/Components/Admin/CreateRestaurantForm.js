import React from "react";

import { Form, Field} from "react-final-form";
import createDecorator from 'final-form-focus';
import {addresturant} from './Helper';
const sleep = ms=> new Promise(resolve=> setTimeout(resolve,ms))
const showResults = async values=>{
    await sleep(500)
    window.alert(JSON.stringify(values,undefined,2))
}

const focusOnError = createDecorator()
const required =value=> (value ? undefined : "Required")

const createRestaurant=(props)=>(
    <div className="wrapper">
    <div className="card-container">
    <div className="card">
    <div className="card-header">Please Fill Details to Create Restaurant</div>
        <div className="card-body">
        <Form onSubmit = {addresturant} 
        decorators={[focusOnError]}
        subscription={{
             submitting: true,
        }}>
            {({handleSubmit, values, submitting })=>
            <form onSubmit={handleSubmit}>

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
                        <input {...input} placeholder={placeholder} className="form-control" />
                        {meta.error && meta.touched && <span>{meta.error}</span> }
                    </div> 
                   )}
            </Field> 
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
                        <input {...input} placeholder={placeholder} className="form-control" />
                        {meta.error && meta.touched && <span>{meta.error}</span> }
                    </div> 
                   )}
            </Field> 
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
                        <input {...input} placeholder={placeholder} className="form-control" />
                        {meta.error && meta.touched && <span>{meta.error}</span> }
                    </div> 
                   )}
            </Field> 
           

            <Field 
                name="type"  placeholder="Restaurant " 
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
                        <input  defaultValue="restaurant" {...input} placeholder={placeholder} className="form-control" readOnly/>
                        {meta.error && meta.touched && <span>{meta.error}</span> }
                    </div> 
                   )}
            </Field> 
          
          <br/>
            <button type="submit" disabled={submitting} className="btn btn-primary" >Submit</button>

            </form>}
        </Form>
        </div>
        </div>
    </div>
    </div>
)

export default createRestaurant;