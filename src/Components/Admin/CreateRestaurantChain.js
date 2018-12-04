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

const createrestaurantchain=(props)=>(
    <main>
    <div className="main-part">
    <section className="home-icon bg-skeen">
    <div className="container">
    <div className="row">
    <div class="col-md-7 col-sm-7 col-xs-12 wow fadeInDown animated" >
   
   <div className="card-container">
  
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
                    <input type="text"{...input} placeholder={placeholder} className="form-control" />
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
                    <input type="text" {...input} placeholder={placeholder} className="form-control" />
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
                    <input type="text" {...input} placeholder={placeholder} className="form-control" />
                    {meta.error && meta.touched && <span>{meta.error}</span> }
                </div> 
               )}
        </Field> 
     
       
        <Field 
            name="type"  placeholder="Restaurant " validate={required}
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
                    <input type="text" {...input} placeholder={placeholder} className="form-control" readOnly />
                    {meta.error && meta.touched && <span>{meta.error}</span> }
                </div> 
               )}
        </Field> 
        <Field 
            name="parent_id"  placeholder="Parent Id " validate={required}
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


                    <label >Parent Id</label>
                    <select   {...input} placeholder={placeholder}  >
                    <option value="p1">Parent 1</option>
                    <option value="p2">Parent 2</option>
                     </select>
                    {meta.error && meta.touched && <span>{meta.error}</span> }
                </div> 
               )}
        </Field> 
      
                    <br/>
        <button type="submit" disabled={submitting} className="button-default btn-large btn-primary-gold" >Submit</button>

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

export default createrestaurantchain;