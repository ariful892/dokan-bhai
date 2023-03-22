import { FOR_YOU_PRODUCTS, SINGLE_PRODUCT } from "../actionTypes/actionTypes"

export const loadForProducts = (products) => {
    // console.log(products)
    return {
        type: FOR_YOU_PRODUCTS,
        payload: products,
    }
}

export const loadSingleProduct = (product) => {
    // console.log(product)
    return {
        type: SINGLE_PRODUCT,
        payload: product,
    }
}