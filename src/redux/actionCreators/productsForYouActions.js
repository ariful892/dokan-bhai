import { LOAD_PRODUCTS_FOR_YOU } from "../actionTypes/actionTypes"

export const loadProducts = (products) => {
    console.log(products)
    return {
        type: LOAD_PRODUCTS_FOR_YOU,
        payload: products,
    }
}