import { FETCHING_START, SEARCH_INPUT, SEARCH_PRODUCTS } from "../actionTypes/actionTypes";

const initialState = {
    input: '',
    searchProducts: [],
    loading: false,
};

const searchInputReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_INPUT:
            return {
                ...state,
                input: action.payload,
                loading: false,
            }
        case SEARCH_PRODUCTS:
            return {
                ...state,
                searchProducts: action.payload,
                loading: false,
            }
        case FETCHING_START:
            return {
                ...state,
                loading: true,
            }

        default:
            return state;
    }
}

export default searchInputReducer;