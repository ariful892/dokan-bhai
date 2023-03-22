import { FOR_YOU_PRODUCTS, SINGLE_PRODUCT } from "../actionTypes/actionTypes";

const initialState = {
    products: [],
    singleProduct: {},
};

export const forProductsReducer = (state = initialState, action) => {
    // console.log(action)
    switch (action.type) {
        case FOR_YOU_PRODUCTS:
            return {
                ...state,
                products: action.payload,
            }
        case SINGLE_PRODUCT:
            return {
                ...state,
                singleProduct: action.payload,
            }
        default:
            return state;
    }
}


