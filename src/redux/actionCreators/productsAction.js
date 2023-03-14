import { LOADPRODUCTS } from "../actionTypes/actionTypes";


export const getProducts = (id) => async (dispatch, getState) => {

    const res = await fetch(`https://backend.dokanbhai.dokanbhai.com:3002/api/products?pageNumber=1&seller=${id}&name=&category=&min=0&max=0&rating=0&order=&flash_sale=&fbclid=IwAR2OXpFN_6eWaWPcCIajymv_spQ4VQm16MFIcenQOEx3yK4nJ82Ystu6mEA`)
    const data = await res.json()
    console.log(data);

    if (data) {
        dispatch({ type: LOADPRODUCTS, payload: data })

    }

}