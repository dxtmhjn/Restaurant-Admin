import React from "react";

import { Form, Field} from "react-final-form";
import createDecorator from 'final-form-focus';
import {adduser} from './Helper';
// import { emitKeypressEvents } from "readline";

// toaster
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const sleep = ms=> new Promise(resolve=> setTimeout(resolve,ms))
const showResults = async values=>{
    await sleep(500)
    window.alert(JSON.stringify(values,undefined,2))
}

const focusOnError = createDecorator()
const required =value=> (value ? undefined : "Required")

const notify = (rvalue) => {
    if(rvalue=="success"){
      toast.success("success Notification")
    }
   else if(rvalue=="error"){
      toast.error("Error Notification !")
    }
    else if(rvalue=="warning"){
      toast.warn("Warning Notification !")
    }
    else if(rvalue=="info"){
      toast.info("Info Notification !")
    }
    else{
      toast("Wow so easy !")
    }
  
  }

const createUser = (props)=> (
    <main>
        <div className="main-part">
        <section className="home-icon bg-skeen">
        <div className="container">
        <div className="row">
        <div class="col-md-7 col-sm-7 col-xs-12 wow fadeInDown animated" >
       
       <div className="card-container">
      
       <h6> Please Fill Details to Create User</h6>
            
           
        <Form onSubmit = {adduser} 
        decorators={[focusOnError]}
        subscription={{
             submitting: true,
        }}>
            {({handleSubmit, values, submitting })=>
            <form onSubmit={handleSubmit}>

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
            <Field 
                name="username" type="text"  placeholder="Username" validate={required}
               
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
                        <input {...input} placeholder={placeholder}  type="text" />
                        {meta.error && meta.touched && <span>{meta.error}</span> }
                    </div> 
                   )}
            </Field> 
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
                        <input {...input} placeholder={placeholder} type="password" className="form-control"  />
                        {meta.error && meta.touched && <span>{meta.error}</span> }
                    </div> 
                   )}
            </Field> 
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
            <Field 
                name="restaurent_id" type="text"placeholder="Restaurant ID" validate={required}
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
                        <label >Restaurant Name</label>
                        <select  {...input} placeholder={placeholder}  >
                        <option value="r1">Restaurant 1</option>
                        <option value="r2">Restaurant 2</option>
                        </select>
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
                        <select  {...input} placeholder={placeholder}  >
                        <option value="c1">Id 1</option>
                        <option value="c2">Id 2</option>
                        </select>
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
                        <select  {...input} placeholder={placeholder} >
                        <option value="c1">Super Admin</option>
                        <option value="c2">Admin</option>
                        <option value="c2">Manager</option>
                        <option value="c2">Assistance</option>

                        </select>
                        {meta.error && meta.touched && <span>{meta.error}</span> }
                    </div> 
                   )}
            </Field> 
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
                        <input type="text" {...input} placeholder={placeholder} value="Restaurant" readOnly />
                        {meta.error && meta.touched && <span>{meta.error}</span> }
                    </div> 
                   )}
            </Field> 
          <br/>
            <button type="submit" disabled={submitting} 
            className="button-default btn-large btn-primary-gold" 
            onClick={()=>notify("error")}>Submit</button>

            </form>}
        </Form>
            </div>
        </div>
        </div>
        </div>
            </section>
        </div>
    </main>
)

export default createUser;