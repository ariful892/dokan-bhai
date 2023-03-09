import { loadShops } from "../../actionCreators/shoppingmallActions";

const loadShopData = () => {
    return async (dispatch, getState) => {
        const res = await fetch("https://backend.dokanbhai.dokanbhai.com:3002/api/users/all-sellers");
        const data = await res.json();

        if (data.length) {
            dispatch(loadShops(data));
        }
    }
}

export default loadShopData;