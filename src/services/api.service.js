import axios from "axios";
const http=axios.create({baseURL: 'https://restcountries.com/v3.1'});

export class ApiService{
    getHttpAPI(){
        return http.get('/name/peru')
            .then((response)=>response.data)

    }
}