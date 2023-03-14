import { SHOPHOMEPAGEUSER, SHOPID } from "../actionTypes/actionTypes";


export const createShopHomePAge = (id) => async (dispatch, getState) => {
    const res = await fetch(`https://backend.dokanbhai.dokanbhai.com:3002/api/users/${id}?fbclid=IwAR1z4vbhywBoil6KOg6Zhnrh6rhd1KqxCfER15ibnyqBAx0aTstD-byqmk4`)
    const data = await res.json()
    console.log(data);

    if (data) {

        // dispatch({ type: SHOPHOMEPAGEUSER, payload: data })
        dispatch({ type: SHOPHOMEPAGEUSER, payload: { data: data, id: id } })

    }

}

