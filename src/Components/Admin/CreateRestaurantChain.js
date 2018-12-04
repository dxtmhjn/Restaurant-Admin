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
    <main>
    <div className="main-part">
    <section className="home-icon bg-skeen">
    <div className="container">
    <div className="row">
    <div class="col-md-7 col-sm-7 col-xs-12 wow fadeInDown animated" >
   
   <div className="card-container">
    <Form onSubmit = {addChainresturant} 
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
                    <input  type='text'
                    value={props.editData && props.editData.length >0 ?props.editData[0].restaurantname :"estdgs"}
           
                       {...input} placeholder={placeholder} className="form-control" />
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
      
                    <br/>
        <button type="submit" disabled={submitting} className="btn btn-primary" >Submit</button>

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

export default Createrestaurantchain;