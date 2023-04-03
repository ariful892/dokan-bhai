import { loadSingleProduct } from "../../actionCreators/productsForYouActions";
import { loadingAction } from "../../actionCreators/shoppingmallActions";

const loadSingleProductData = (id) => {
    return async (dispatch, getState) => {
        const res = await fetch(`https://backend.dokanbhai.dokanbhai.com:3002/api/products/${id}`);
        const data = await res.json();
        console.log(data)
        if (data) {
            dispatch(loadSingleProduct(data));
        }
    }
}

export default loadSingleProductData;