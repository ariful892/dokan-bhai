import { FETCHING_START, FOR_YOU_PRODUCTS, PRODUCT_DISPLAY_IMAGE, SINGLE_PRODUCT } from "../actionTypes/actionTypes";

const initialState = {
    products: [],
    singleProduct: {},
    displayImage: '',
    cartProducts: [],
    loading: false,
};

export const forProductsReducer = (state = initialState, action) => {
    // console.log(action)
    switch (action.type) {
        case FOR_YOU_PRODUCTS:
            return {
                ...state,
                products: action.payload,
                loading: false,
            }
        case FETCHING_START:
            return {
                ...state,
                loading: true,
            }
        case SINGLE_PRODUCT:
            // console.log(action.payload.image.split(',')[0])
            let product;
            if (state.cartProducts.length) {
                if (state?.cartProducts.map(p => p._id === action.payload._id)) {
                    product = {};
                }
                else {
                    product = action.payload;
                }
            }
            if (!state.cartProducts.length) {
                product = action.payload;
            }
            // const product = state.cartProducts.filter(p => p._id === action.payload._id);
            // console.log(product)
            return {
                ...state,
                singleProduct: action.payload,
                displayImage: `https://brandatoz.com${action.payload.image.split(',')[0]}`,
                // cartProducts: state.cartProducts.length ? state?.cartProducts.map(p => p._id === action.payload._id) ? state : [...state.cartProducts, action.payload] : [...state.cartProducts, action.payload],
                cartProducts: [...state.cartProducts, product],
                loading: false,
            }
        case PRODUCT_DISPLAY_IMAGE:
            // console.log(action.payload)
            return {
                ...state,
                displayImage: action.payload,
                loading: false,
            }
        default:
            return state;
    }
}


