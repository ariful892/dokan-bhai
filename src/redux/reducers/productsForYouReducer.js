import { FOR_YOU_PRODUCTS, PRODUCT_DISPLAY_IMAGE, SINGLE_PRODUCT } from "../actionTypes/actionTypes";

const initialState = {
    products: [],
    singleProduct: {},
    displayImage: '',
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
            // console.log(action.payload.image.split(',')[0])
            return {
                ...state,
                singleProduct: action.payload,
                displayImage: `https://brandatoz.com${action.payload.image.split(',')[0]}`
            }
        case PRODUCT_DISPLAY_IMAGE:
            console.log(action.payload)
            return {
                ...state,
                displayImage: action.payload,
            }
        default:
            return state;
    }
}


