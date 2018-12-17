import React, { Component } from "react";

import { Form, Field } from "react-final-form";
import createDecorator from 'final-form-focus';
import { adduser } from './Helper';


// import { emitKeypressEvents } from "readline";


const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
const showResults = async values => {
    await sleep(500)
    window.alert(JSON.stringify(values, undefined, 2))
}

const focusOnError = createDecorator()
const required = value => (value ? undefined : "Required")
class createRestaurant extends Component {

    state = {
        restaurantName: '',
        address: '',
        description: '',
        type: '',
        isSubmitDisabled: true
    }

    handleSubmit = (event) => {
        adduser(this.state);
    }
    canSubmit() {
        const { email, name, password } = this.state
        // TODO: add valid email format validation in this condition
        if (email.length > 0 && name.length > 0 && password.length >= 5) {
            this.setState({
                isSubmitDisabled: false
            })
        }
        else {
            this.setState({
                isSubmitDisabled: true
            })
        }
    }
    handleChange = (event) => {
        let currentName = event.target.name;
        this.setState({
            // use dynamic name value to set our state object property
            [event.target.name]: event.target.value
        }, function () {
            if (currentName === 'restaurantid') {
                this.props.handleRestaurantChangeSelection(this.state.restaurantid);
            }
            this.canSubmit()
//  this.canSubmit()

        })
        //
    }

    render() {
        return (
            <div className="content">
                <div className="container-fluid">
                    <div className="card m-b-30 card-body  card-container">
                        <form onSubmit={this.handleSubmit}>
                            <div className="row">
                                <div className="col-lg-12 form-group">
                                </div>
                                <div className="col-lg-12 form-group">
                                    <label for="exampleFormControlInput1">Restaurant Name</label>
                                    <input required type="text" className="form-control" name="restaurantName" id="restaurantName" placeholder="restaurantName"
                                        value={this.state.restaurantName}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="col-lg-12 form-group">
                                    <label for="exampleFormControlInput1">Address</label>
                                    <input required type="text" className="form-control" name="address" id="address" placeholder="Address"
                                        value={this.state.address}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="col-lg-12 form-group">
                                    <label for="exampleFormControlInput1">Description</label>
                                    <input required type="text" className="form-control" name="description" id="description" placeholder="description"
                                        value={this.state.description}
                                        onChange={this.handleChange}
                                    />

                                </div>
                                <div className="col-lg-12 form-group">
                                    <label for="exampleFormControlInput1">Type</label>
                                    <input required type="text" className="form-control" name="type" id="type" placeholder="type"
                                        value={this.state.type}
                                        onChange={this.handleChange}
                                    />

                                </div>
                                <div className="col-lg-12 form-group text-center">
                                    <button type="submit" disabled={this.submitting} className="btn btn-large btn-warning text-center" >Submit</button>

                                </div>
                            </div>
                        </form>}
                    </div>
                </div>
            </div>
        )

    }
}

export default createRestaurant;