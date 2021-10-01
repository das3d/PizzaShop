import axios, {AxiosResponse} from "axios";
import {TProduct} from "../redux/reducers/productReducer";
export const productAPI = {
    getPizzas: () => {
        return axios.get('http://localhost:5000/products').then((resp: AxiosResponse<TProduct[]>) => {
            console.log(resp.data)
            return resp.data
        })},
    getFilterProducts: (payload:string) => {
        return axios.get(`http://localhost:5000/products/filterProducts/${payload}`).then((resp: AxiosResponse<TProduct[]>) => {
            return resp.data
        })
    }

}

