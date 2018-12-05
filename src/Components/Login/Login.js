import React from "react";

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

    <div className="login-container">
      <div id="login" className="login">
        <div className="login-icon-field">
          <img src="assets/images/cooking.svg" />
        </div>
        <Form
          onSubmit={this.authenticateUser}
          decorators={[focusOnError]}
          subscription={{
            submitting: true
          }}
        >
          {({ handleSubmit, values, submitting }) => (
            <form onSubmit={handleSubmit}>
              <div className="login-form">
                <div className="username-row row">
                  <label for="username_input">
                    
                  </label>
                  <Field
                    name="id"
                    className="username-input"
                    placeholder="ID"
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
                        <label>User Id</label>
                        <input
                          className="username-input"
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
                <div className="password-row row">
                  <label for="password_input">
                    Password
                  </label>
                  <Field
                    name="password"
                    className="password-input"
                    placeholder="password"
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
                        <label>Password</label>
                        <input
                          className="password-input"
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
              <div className="call-to-action">
                
                <button type="submit" disabled={submitting}>
                  Log In
                </button>
                
              </div>
            </form>
          )}
        </Form>
      </div>
    </div>);

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
