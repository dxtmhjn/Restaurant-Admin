import React from "react";



const UserList = (props) =>  {
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
        </div>
            </section>
        </div>
    </main>
    )

    }


export default UserList;