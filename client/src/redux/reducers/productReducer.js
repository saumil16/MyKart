import * as actionType from '../constants/productConstants';

export const getProductsReducer = (state = {products: []},action) =>{
    switch(action.type){
        case actionType.get_product_success:
            return { products: action.payload}
        case actionType.get_product_fail:
            return { error: action.payload}

        default:
            return state;
    }
}