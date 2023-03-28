import { LOAD_CART_PRODUCTS } from "../actionTypes/actionTypes";

const initialState = {
    carts: [],
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_CART_PRODUCTS:
            return {
                ...state,
                carts: action.payload
            }
        default:
            return state;
    }
}

export default cartReducer;