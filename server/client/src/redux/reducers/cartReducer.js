import * as actionType from '../constants/cartConstants';

export const cartReducer = (state = {CartItems: []}, action) => {
    switch(action.type){
        case actionType.ADD_TO_CART:
            const item = action.payload;
            const exist = state.CartItems.find(product => product.id === item.id);
            if(exist){
                return {...state, CartItems: state.CartItems.map(data => data.product === exist.product ? item:data)}
            }
            else{
                return {...state, CartItems: [...state.CartItems, item]}
            }
        case actionType.REMOVE_FROM_CART:
            return {...state,CartItems: state.CartItems.filter(product => product.id !== action.payload)}

        default: 
            return state    
    }
}