import { LOAD_SHOPPING_MALLS, LOAD_SHOPS } from "../actionTypes/actionTypes";

const initialState = {
    shoppingMalls: [],
    shops: [],
};

const shoppingMallReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_SHOPPING_MALLS:
            return {
                ...state,
                shoppingMalls: action.payload,
            }
        case LOAD_SHOPS:
            return {
                ...state,
                shops: action.payload,
            }
        default:
            return state;
    }
}

export default shoppingMallReducer;