import { FETCHING_START, LOAD_FILTERED_SHOPS, LOAD_SHOPPING_MALLS, LOAD_SHOPS, SHOP_FILTER } from "../actionTypes/actionTypes";

const initialState = {
    shoppingMalls: [],
    shops: [],
    filteredShops: [],
    loading: false,
};

const shoppingMallReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_SHOPPING_MALLS:
            return {
                ...state,
                shoppingMalls: action.payload,
                loading: false,
            }
        case LOAD_SHOPS:
            return {
                ...state,
                shops: action.payload,
                filteredShops: action.payload,
                loading: false,
            }
        case FETCHING_START:
            return {
                ...state,
                loading: true,
            }
        case LOAD_FILTERED_SHOPS:
            return {
                ...state,
                filteredShops: action.payload,
                loading: false,
            }
        case SHOP_FILTER:

            if (action.payload.floor === 'all') {
                return {
                    ...state,
                    filteredShops: state.shops,
                }
            }
            return {
                ...state,
                filteredShops: state.shops.filter(shop => shop.seller.floorNo === action.payload.floor),
            }
        default:
            return state;
    }
}

export default shoppingMallReducer;