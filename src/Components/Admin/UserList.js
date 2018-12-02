import React from "react";



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
            <span><a href="#" className="btn btn-success">Edit</a></span> &nbsp;
            <span><a href="#" className="btn btn-danger">Delete</a></span>
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