import React,{Component,Fragment} from 'react';
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
                <Login changeLogin={this.props.loginHandler} />
            )
        }
        return (
            <Fragment>
                        {body}
                        </Fragment>
        
        );
    }
}
 export default MainBody;