import { loadShoppingMalls } from "../../actionCreators/shoppingmallActions";

const loadShoppingMallData = () => {
    return async (dispatch, getState) => {
        const res = await fetch("https://backend.dokanbhai.dokanbhai.com:3002/api/newshop");
        const data = await res.json();

        if (data.length) {
            dispatch(loadShoppingMalls(data));
        }
    }
}

export default loadShoppingMallData;