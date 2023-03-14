import { loadShops } from "../../actionCreators/shoppingmallActions";

const loadShopData = (mallName) => {
    return async (dispatch, getState) => {
        const res = await fetch("https://backend.dokanbhai.dokanbhai.com:3002/api/users/all-sellers");
        const data = await res.json();

        const filteredData = data.filter(seller => seller.seller.marketName === mallName);
        // console.log(filteredData)

        if (data.length) {
            dispatch(loadShops(filteredData));
        }
    }
}

export default loadShopData;