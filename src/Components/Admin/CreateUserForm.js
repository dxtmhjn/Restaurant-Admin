import React from "react";

import { Form, Field} from "react-final-form";
import createDecorator from 'final-form-focus';
import {adduser} from './Helper';
const sleep = ms=> new Promise(resolve=> setTimeout(resolve,ms))
const showResults = async values=>{
    await sleep(500)
    window.alert(JSON.stringify(values,undefined,2))
}

const focusOnError = createDecorator()
const required =value=> (value ? undefined : "Required")

const createUser = (props)=> (
    <div className="container">
        <div className="row">
            <div className="col-sm-8 offset-2">
            <h4>Please Fill Details to Create User</h4>
        <Form onSubmit = {adduser} 
        decorators={[focusOnError]}
        subscription={{
             submitting: true,
        }}>
            {({handleSubmit, values, submitting })=>
            <form onSubmit={handleSubmit}>

            <Field 
                name="name"  placeholder="Name" validate={required}
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
                        <input {...input} placeholder={placeholder} className="form-control" />
                        {meta.error && meta.touched && <span>{meta.error}</span> }
                    </div> 
                   )}
            </Field> 
            <Field 
                name="username"  placeholder="Username" validate={required}
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


                        <label >Username</label>
                        <input {...input} placeholder={placeholder} className="form-control"  />
                        {meta.error && meta.touched && <span>{meta.error}</span> }
                    </div> 
                   )}
            </Field> 
            <Field 
                name="password"  placeholder="Password" validate={required}
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
                        <input {...input} placeholder={placeholder} className="form-control"  />
                        {meta.error && meta.touched && <span>{meta.error}</span> }
                    </div> 
                   )}
            </Field> 
            <Field 
                name="email"  placeholder="Email" validate={required}
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
                        <input {...input} placeholder={placeholder} className="form-control"  />
                        {meta.error && meta.touched && <span>{meta.error}</span> }
                    </div> 
                   )}
            </Field> 
            <Field 
                name="mobile"  placeholder="Mobile" validate={required}
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
                        <input {...input} placeholder={placeholder} className="form-control"  />
                        {meta.error && meta.touched && <span>{meta.error}</span> }
                    </div> 
                   )}
            </Field> 
            <Field 
                name="restaurent_id"  placeholder="Restaurant ID" validate={required}
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


                        <label >Restaurant ID</label>
                        <input {...input} placeholder={placeholder} className="form-control"  />
                        {meta.error && meta.touched && <span>{meta.error}</span> }
                    </div> 
                   )}
            </Field> 
            <Field 
                name="active"  placeholder="Active" validate={required}
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


                        <label >Active</label>
                        <input {...input} placeholder={placeholder} className="form-control"  />
                        {meta.error && meta.touched && <span>{meta.error}</span> }
                    </div> 
                   )}
            </Field> 
            <Field 
                name="createdDate"  placeholder="Created Date" validate={required}
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


                        <label >Created Date</label>
                        <input {...input} placeholder={placeholder} className="form-control"  />
                        {meta.error && meta.touched && <span>{meta.error}</span> }
                    </div> 
                   )}
            </Field> 
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
                        <input {...input} placeholder={placeholder} className="form-control"  />
                        {meta.error && meta.touched && <span>{meta.error}</span> }
                    </div> 
                   )}
            </Field> 
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
                    <div>


                        <label >Role</label>
                        <input {...input} placeholder={placeholder} className="form-control"  />
                        {meta.error && meta.touched && <span>{meta.error}</span> }
                    </div> 
                   )}
            </Field> 
            <Field 
                name="type"  placeholder="type" validate={required}
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
                        <input {...input} placeholder={placeholder} className="form-control"  />
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
)

export default createUser;