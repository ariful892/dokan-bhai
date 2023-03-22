import { SEARCH_INPUT, SEARCH_PRODUCTS } from "../actionTypes/actionTypes"

export const searchInput = (data) => {
    return {
        type: SEARCH_INPUT,
        payload: data,
    }
}

export const searchProducts = (data) => {
    // console.log(data)
    return {
        type: SEARCH_PRODUCTS,
        payload: data,
    }
}