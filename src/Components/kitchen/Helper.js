import HttpClient from "../../service/api";
import {apiURL} from '../../constants/constant';

export const UpdateOrderStatus = (id,bodyParams) => {
 
    const httpClient = new HttpClient();
    let url = 'kitchen/updateOrders/' + id;
    return httpClient.post(url, bodyParams)
        .then(response => {

              if (response.data && response.data && response.data.status === 'success') {
                return {status :true ,data :response.data.data};
                }else{
                    
                    return {status :false ,data :null};
                }
            
        })
        .catch(error => {
            console.log(error);
        });
}
