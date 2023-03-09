import { LOAD_SHOPPING_MALLS, LOAD_SHOPS, SIDE_NAVBAR } from "../actionTypes/actionTypes"

export const sideNavbar = () => {
    return {
        type: SIDE_NAVBAR,
    }
}

export const loadShoppingMalls = (data) => {
    return {
        type: LOAD_SHOPPING_MALLS,
        payload: data,
    }
}

export const loadShops = (data) => {
    return {
        type: LOAD_SHOPS,
        payload: data,
    }
}

