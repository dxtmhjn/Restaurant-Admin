import React from "react";


const singleUser =(
    <table className="table table-striped food-menu">
    <tr>
        <th>User Id</th>
        <th>Details</th>
        <th>Access</th>
    </tr>
    <tbody>
        <tr>
            <td>1232344</td>
            <td>yogesh,Restaurant admin</td>
            <td>
            <span><a href="#" className="btn btn-success">Edit</a></span> &nbsp;
            <span><a href="#" className="btn btn-danger">Delete</a></span>
            </td>
        </tr>
    </tbody>
</table>
)
const userList = () =>  {
    return(
        <div className="wrapper">
        <div className="card-container">
        <div className="card">
        <div className="card-header">All Registered List</div>
      
            {singleUser}
       </div>
       </div>
       </div>
    )

    }


export default userList;