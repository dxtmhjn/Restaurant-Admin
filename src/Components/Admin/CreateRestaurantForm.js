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
    <div className="content">
                <div className="container-fluid">
   <div className="card m-b-30 card-body  card-container">
        <Form onSubmit = {addresturant} 
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
                        <input type="text" {...input} placeholder={placeholder} className="form-control" />
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
                        <input  type="text" {...input} placeholder={placeholder} className="form-control" />
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
                        <input   defaultValue="restaurant" {...input} placeholder={placeholder} className="form-control" readOnly/>
                        {meta.error && meta.touched && <span>{meta.error}</span> }
                    </div> 
                   )}
            </Field> 
          </div>
            <div className="col-lg-12 form-group text-center">
            <button type="submit" disabled={submitting} className="btn btn-large btn-warning text-center" >Submit</button>
</div>
</div>
            </form>}
        </Form>
        </div>
        </div>
        </div>
)

export default createRestaurant;