import axios from "axios";

import * as actionTypes from '../constants/productConstants';

const URL = 'http://localhost:8000';

export const getProducts = () => async (dispatch) =>{
    try{
        const { data } = await axios.get(`${URL}/products`);
        //console.log(response);
        dispatch({type: actionTypes.get_product_success ,payload:data});
    }
    catch(error){
        dispatch({type: actionTypes.get_product_fail, payload: error.message});
        //console.log('Error while calling getProducts API : ',error.message);
    }
}   