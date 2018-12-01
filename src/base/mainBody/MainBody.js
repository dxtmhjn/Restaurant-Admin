import React,{Component,Fragment} from 'react';
import Login from "../../Components/Login/Login";
import Header from '../header/Header';
import Footer from '../footer/Footer';
class MainBody extends Component{

   
    render(){
   
        return (
            <Fragment>
            <Header/>
                       {this.props.children}
                        
        <Footer/>
        </Fragment>
        );
    }
}
 export default MainBody;