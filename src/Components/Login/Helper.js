import HttpClient from "../../service/api";
import {apiURL} from '../../constants/constant';

export const CheckUserAuthenticated = (bodyParams) => {
 
    const httpClient = new HttpClient();
    let url = 'user/authentication';
    return httpClient.post(url, bodyParams)
        .then(response => {

              if (response.data && response.data && response.data.status === 'success') {
                    //alert("Restaurant Saved Successfully");
                    localStorage.setItem("usertoken",bodyParams)
                    return true;
                }else{
                    //alert("Error while saving Restaurant");
                    return false;
                }
            
        })
        .catch(error => {
            console.log(error);
        });
}