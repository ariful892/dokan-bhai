import { LOAD_FILTERED_SHOPS, LOAD_SHOPPING_MALLS, LOAD_SHOPS, SHOP_FILTER } from "../actionTypes/actionTypes";

const initialState = {
    shoppingMalls: [],
    shops: [],
    filteredShops: []
};

const shoppingMallReducer = (state = initialState, action) => {
    console.log(action.payload)
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
                filteredShops: action.payload,
            }
        case LOAD_FILTERED_SHOPS:
            return {
                ...state,
                filteredShops: action.payload,
            }
        case SHOP_FILTER:
            console.log(state)

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