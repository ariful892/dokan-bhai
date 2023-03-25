import { FOR_YOU_PRODUCTS, PRODUCT_DISPLAY_IMAGE, SINGLE_PRODUCT } from "../actionTypes/actionTypes"

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

export const productDisplayImage = (img) => {
    return {
        type: PRODUCT_DISPLAY_IMAGE,
        payload: img,
    }
}