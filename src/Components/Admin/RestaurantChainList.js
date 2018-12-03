import React from "react";
import {removeUser} from "./Helper";

// Router
import {NavLink,Redirect } from 'react-router-dom';

const removeUserHandler=()=>{
    console.log("user removed")
}

const RestaurantChainList = (props) =>  {
    return(
        
        <main>
        <div className="main-part">
        <section className="home-icon bg-skeen">
        <div className="container">
        <div className="row">
        <div class="col-md-7 col-sm-7 col-xs-12 wow fadeInDown animated" >
       
       <div className="card-container">
      
        <table className="table table-striped food-menu">
    <tr>
        <th>Chain Name</th>
        <th>Description</th>
        <th>Address</th>
        <th>Status</th>
        
    </tr>
    <tbody>
        
            { props.restaurantChainList && props.restaurantChainList.length >0 ?
                props.restaurantChainList.map(item=>{
               
                return ( <tr>
                <td>{item.restaurantname}</td>
            <td>{item.description}</td>
            <td>{item.address}</td>
            <td>{item.active}</td>
            <td>
            <span><NavLink className="btn btn-success"  to={`${"/createrestaurantchain/" + item._id }`}>Edit</NavLink></span> &nbsp;
            <span><a href="#" className="btn btn-danger" onClick={removeUserHandler()}>Delete</a></span>
            </td></tr>)
            ;
            })
            : <span>No Restaurant Chain Present</span>}
            
    </tbody>
</table>
</div>
        </div>
        </div>
        </div>
            </section>
        </div>
    </main>
    )

    }


export default RestaurantChainList;