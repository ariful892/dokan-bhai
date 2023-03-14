import { FOR_YOU_PRODUCTS } from "../actionTypes/actionTypes";

const initialState = {
    products: [],
};

export const forProductsReducer = (state = initialState, action) => {
    // console.log(action)
    switch (action.type) {
        case FOR_YOU_PRODUCTS:
            return {
                products: action.payload,
            }
        default:
            return state;
    }
}
