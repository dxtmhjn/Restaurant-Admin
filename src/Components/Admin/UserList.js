import React from "react";
import {removeUser} from "./Helper";

// Router
import {NavLink,Redirect } from 'react-router-dom';

const removeUserHandler=(id)=>{
    removeUser(id);
}

const UserList = (props) =>  {
    return(
        
        <div className="content">
        <div className=" card m-b-30 card-body container-fluid">
<div className="card-container">
        <table className="table table-striped food-menu">
    <tr>
        <th>User Name</th>
        <th>Details</th>
        <th style={{textAlign:'right'}}>Access</th>
    </tr>
    <tbody>
        
            { props.users && props.users.length >0 ?
                props.users.map(item=>{
               
                return ( <tr>
                <td>{item.name}</td>
            <td>{item.role}</td>
            <td style={{textAlign:'right'}}>
            <span><NavLink className="btn btn-success btn-sm" to="/createuser">Edit</NavLink></span> &nbsp;
            <span><a href="#" className="btn btn-danger btn-sm" onClick={removeUserHandler(item.id)}>Delete</a></span>
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