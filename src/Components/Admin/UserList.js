import React from "react";
import {removeUser} from "./Helper";

// Router
import {NavLink,Redirect } from 'react-router-dom';

const removeUserHandler=()=>{
    console.log("user removed")
}

const UserList = (props) =>  {
    return(
        <div className="wrapper">
        <div className="card-container">
        <div className="card">
        <div className="card-header">All Registered List</div>
        <table className="table table-striped food-menu">
    <tr>
        <th>User Id</th>
        <th>Details</th>
        <th>Access</th>
    </tr>
    <tbody>
        
            { props.users && props.users.length >0 ?
                props.users.map(item=>{
               
                return ( <tr>
                <td>{item.name}</td>
            <td>{item.role}</td>
            <td>
            <span><NavLink className="btn btn-success" to="/createuser">Edit</NavLink></span> &nbsp;
            <span><a href="#" className="btn btn-danger" onClick={removeUserHandler()}>Delete</a></span>
            </td></tr>)
            ;
            })
            : <span>No User Currently Present</span>}
            
    </tbody>
</table>
       </div>
       </div>
       </div>
    )

    }


export default UserList;