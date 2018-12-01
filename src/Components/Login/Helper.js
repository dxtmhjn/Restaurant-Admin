import HttpClient from "../../service/api";
import {apiURL} from '../../constants/constant';

export const CheckUserAuthenticated = (bodyParams) => {
 
    const httpClient = new HttpClient();
    let url = 'user/authentication';
    return httpClient.post(url, bodyParams)
        .then(response => {

              if (response.data && response.data && response.data.status === 'success') {
                    //alert("Restaurant Saved Successfully");
                    localStorage.setItem("usertoken",response.data)
                    return {status :true ,data :response.data};
                }else{
                    //alert("Error while saving Restaurant");
                    return {status :false ,data :null};
                }
            
        })
        .catch(error => {
            console.log(error);
        });
}


export const fetchRestaurant = () => {
 
    const httpClient = new HttpClient();
    let url = 'restaurant/getRestaurant';
    return httpClient.get(url)
        .then(response => {

              if (response.data && response.data && response.data.status === 'success') {
                    
                    return {status :true ,data :response.data.data};
                }else{
                    //alert("Error while saving Restaurant");
                    return {status :false ,data :null};
                }
            
        })
        .catch(error => {
            console.log(error);
        });
}