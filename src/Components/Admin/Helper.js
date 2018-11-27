import HttpClient from "../../service/api";
import {apiURL} from '../../constants/constant';

export const addresturant = (bodyParams) => {
 
    const httpClient = new HttpClient();
    let url = 'restaurant/addrestaurant';
    return httpClient.post(url, bodyParams)
        .then(response => {

              if (response.data && response.data.ok) {
                    alert("Restaurant Saved Successfully");
                    return true;
                }else{
                    alert("Error while saving Restaurant");
                    return false;
                }
            
        })
        .catch(error => {
            console.log(error);
        });
}

export const adduser = (bodyParams) => {
 
    const httpClient = new HttpClient();
    let url = 'user/add';
    return httpClient.post(url, bodyParams)
        .then(response => {

              if (response.data && response.data.ok) {
                    return response.data;
                }else{
                    console.log("fail");
                }
            
        })
        .catch(error => {
            console.log(error);
        });
}
