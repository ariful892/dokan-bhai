import { searchProducts } from "../../actionCreators/searchAction";

const loadSearchProducts = (input) => {
    return async (dispatch, getState) => {
        const res = await fetch(`https://backend.dokanbhai.dokanbhai.com:3002/api/products?pageNumber=1&seller=&name=${input}&category=&min=0&max=0&rating=0&order=newest&flash_sale=`);
        const data = await res.json();


        // console.log(data.products)

        if (data.products.length) {
            dispatch(searchProducts(data.products));
        }
        else {
            dispatch(searchProducts([]));
        }
    }
}

export default loadSearchProducts;