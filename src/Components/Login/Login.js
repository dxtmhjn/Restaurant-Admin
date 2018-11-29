import React from "react";

import { Form, Field} from "react-final-form";
import createDecorator from 'final-form-focus';
import {CheckUserAuthenticated} from './Helper';
import {Redirect } from 'react-router-dom';
const sleep = ms=> new Promise(resolve=> setTimeout(resolve,ms))

const focusOnError = createDecorator()
const required =value=> (value ? undefined : "Required")


class Login extends React.Component {

    state={
        isloginSuccess :false
    }
 authenticateUser = (values)=>{
        if(values){
            var obj ={
                email :values.id,
                password :values.password
            }
            CheckUserAuthenticated(obj).then(res=>{
                if(res && res.status)
                    {this.setState({isloginSuccess:true});}
            })
        }
     }
     
   render(){
    if (this.state.isloginSuccess === true) {
        return <Redirect to='/' />
      }
    return <div className="container">
        <div className="row">
        <div className="col-sm-4 offset-4">
        <h1>Please Login</h1>
        <Form onSubmit = {this.authenticateUser} 
        decorators={[focusOnError]}
        subscription={{
             submitting: true,
        }}>
            {({handleSubmit, values, submitting })=>
            <form onSubmit={handleSubmit}>

            <Field 
                name="id"  placeholder="ID" validate={required}
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
    

                        <label >User Id</label>
                        <input {...input} placeholder={placeholder} className="form-control"/>
                        {meta.error && meta.touched && <span>{meta.error}</span> }
                    </div> 
                   )}
            </Field> 
            <Field 
                name="password"  placeholder="password" validate={required}
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
                        <input type="password" {...input} placeholder={placeholder} className="form-control" />
                        {meta.error && meta.touched && <span>{meta.error}</span> }
                    </div> 
                   )}
            </Field> 
          <br/>
            <button type="submit" disabled={submitting} className="btn btn-primary"  >Submit</button>
            </form>}
        </Form>
        </div>
        </div>
    </div>
   }
}

export default Login;