import { SEARCH_INPUT, SEARCH_PRODUCTS } from "../actionTypes/actionTypes";

const initialState = {
    input: '',
    searchProducts: [],
};

const searchInputReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_INPUT:
            return {
                ...state,
                input: action.payload,
            }
        case SEARCH_PRODUCTS:
            // if()
            return {
                ...state,
                searchProducts: action.payload,
            }

        default:
            return state;
    }
}

export default searchInputReducer;