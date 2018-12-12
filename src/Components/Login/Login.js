import React,{Fragment} from "react";

import { Form, Field } from "react-final-form";
import createDecorator from "final-form-focus";
import { CheckUserAuthenticated } from "./Helper";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Authenticate } from "./actions";
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const focusOnError = createDecorator();
const required = value => (value ? undefined : "Required");

class Login extends React.Component {
  state = {
    isloginSuccess: false
  };

  componentDidUpdate(nextProps, nextState) {
    if (nextProps.usertoken !== this.props.usertoken) {
      this.setState({ isloginSuccess: true });
    }
  }
  authenticateUser = values => {
    if (values) {
      var obj = {
        email: values.id,
        password: values.password
      };
      this.props.checkCredentails(obj);
    }
  };

  render() {
    if (this.state.isloginSuccess === true) {
      return <Redirect to="/createuser" />;
    }
    return(

<Fragment>
    
      <div className="accountbg login-bg" style={{backgroundImage: "url(" + "assets/images/kitchen.jpg" + ")"}}></div>

      <div className="wrapper-page account-page-full">

          <div className="card">
              <div className="card-block">

                  <div className="account-box">

                      <div className="card-box p-5">
                          <h2 className="text-uppercase text-center pb-4 mt-5">
                              <a href="index.html" className="text-success">
                                  <span><img src="assets/images/restaurant-logo.png" alt="" height="70"/></span>
                              </a>
                          </h2>

                          <Form
          onSubmit={this.authenticateUser}
          decorators={[focusOnError]}
          subscription={{
            submitting: true
          }}
        >
          {({ handleSubmit, values, submitting }) => (
            <form onSubmit={handleSubmit}>

                              <div className="form-group m-b-20 row">
                                  <div className="col-12">
                                      <label for="emailaddress">Username</label>


                                       <Field
                    name="id"
                    className="form-control"
                    placeholder="Username"
                    validate={required}
                    subscription={{
                      value: true,
                      active: true,
                      error: true,
                      touched: true
                    }}
                  >
                    {({ input, meta, placeholder }) => (
                      <div className={meta.active ? "active" : ""}>
                      
                        <input type="text"
                          className="form-control"
                          {...input}
                          placeholder={placeholder}
                        />
                        {meta.error && meta.touched && (
                          <span>{meta.error}</span>
                        )}
                      </div>
                    )}
                  </Field>
                                      
                                  </div>
                              </div>

                              <div className="form-group row m-b-20">
                                  <div className="col-12">
                                     
                                      <label for="password">Password</label>
                                      
                                      <Field
                    name="password"
                    className="form-control"
                    placeholder="Password"
                    validate={required}
                    subscription={{
                      value: true,
                      active: true,
                      error: true,
                      touched: true
                    }}
                  >
                    {/* {fieldState =>(
                    <pre>{JSON.stringify(fieldState, undefined, 2)}</pre> 
                   )} */}
                    {({ input, meta, placeholder }) => (
                      <div>
                    
                        <input
                          className="form-control"
                          type="password"
                          {...input}
                          placeholder={placeholder}
                        />
                        {meta.error && meta.touched && (
                          <span>{meta.error}</span>
                        )}
                      </div>
                    )}
                  </Field>
                                       </div>
                              </div>

                              

                              <div className="form-group row text-center m-t-10 mt-5">
                                  <div className="col-12">
                                  <button type="submit"  className="btn btn-block btn-custom waves-effect waves-light" disabled={submitting}>
                  Sign In
                </button>
                
                                      
                                  </div>
                              </div>

                           </form>
          )}
        </Form>


                      </div>
                  </div>

              </div>
          </div>

          <div className="m-t-40 text-center">
              <p className="account-copyright">2018 © Restaurant</p>
          </div>

      </div>

</Fragment>


);

    //     <main>
    //     <div className="main-part">
    //     <section className="home-icon bg-skeen">
    //     <div className="container">
    //     <div className="row">

    //     <div class="col-md-7 col-sm-7 col-xs-12 wow fadeInDown animated" >

    //    <div className="card-container">
    //         <h1>Please Login</h1>
    //         <Form onSubmit = {this.authenticateUser}
    //         decorators={[focusOnError]}
    //         subscription={{
    //              submitting: true,
    //         }}>
    //             {({handleSubmit, values, submitting })=>
    //             <form onSubmit={handleSubmit}>

    //             <Field
    //                 name="id"  placeholder="ID" validate={required}
    //                     subscription={{
    //                     value: true,
    //                     active: true,
    //                     error: true,
    //                     touched: true
    //                 }}>
    //                    {/* {fieldState =>(
    //                     <pre>{JSON.stringify(fieldState, undefined, 2)}</pre>
    //                    )} */}
    //                      {({input, meta, placeholder}) =>(
    //                     <div className={meta.active ? "active" : ""}>

    //                         <label >User Id</label>
    //                         <input {...input} placeholder={placeholder} className="form-control"/>
    //                         {meta.error && meta.touched && <span>{meta.error}</span> }
    //                     </div>
    //                    )}
    //             </Field>
    //             <Field
    //                 name="password"  placeholder="password" validate={required}
    //                 subscription={{
    //                     value: true,
    //                     active: true,
    //                     error: true,
    //                     touched: true
    //                 }}>
    //                    {/* {fieldState =>(
    //                     <pre>{JSON.stringify(fieldState, undefined, 2)}</pre>
    //                    )} */}
    //                      {({input, meta, placeholder}) =>(
    //                     <div>

    //                         <label >Password</label>
    //                         <input type="password" {...input} placeholder={placeholder} className="form-control" />
    //                         {meta.error && meta.touched && <span>{meta.error}</span> }
    //                     </div>
    //                    )}
    //             </Field>
    //           <br/>
    //             <button type="submit" disabled={submitting} className="btn btn-primary"  >Submit</button>
    //             </form>}
    //         </Form>
    //         </div>
    //         </div>
    //         </div>
    //         </div>
    //             </section>
    //         </div>
    //     </main>
  }
}
function mapStateToProps(state, ownProps) {
  return {
    usertoken: state.AuthenticationReducer.usertoken
  };
}
const mapDispatchToProps = dispatch => {
  return {
    checkCredentails: obj => {
      dispatch(Authenticate(obj));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
