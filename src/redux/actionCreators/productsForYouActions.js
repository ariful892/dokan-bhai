import { FOR_YOU_PRODUCTS } from "../actionTypes/actionTypes"

export const loadForProducts = (products) => {
    console.log(products)
    return {
        type: FOR_YOU_PRODUCTS,
        payload: products,
    }
}