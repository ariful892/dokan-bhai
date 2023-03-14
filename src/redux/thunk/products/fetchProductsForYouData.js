import { loadForProducts } from "../../actionCreators/productsForYouActions";

const loadProductsForYouData = () => {
    return async (dispatch, getState) => {
        const res = await fetch("https://backend.dokanbhai.dokanbhai.com:3002/api/products/all_products");
        const data = await res.json();

        // console.log(data.products)
        if (data.length) {
            dispatch(loadForProducts(data.products));
        }
    }
}

export default loadProductsForYouData;