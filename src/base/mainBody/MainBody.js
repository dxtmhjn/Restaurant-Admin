import React,{Component} from 'react';
import Login from "../../Components/Login/Login";

class MainBody extends Component{

   
    render(){
        const islogged = this.props.isLogged;
        let body;
        if(islogged){
             body =(
             <div></div>
                
             )
        }
        else{
            body =(
                <Login />
            )
        }
        return (
            <div className="wrapper">
            <div className="container-fluid">

                <div className="row">
                    <div className="col-sm-12">
                        {body}
                    </div>
                </div>
               

            </div> 
        </div>
        
        );
    }
}
 export default MainBody;