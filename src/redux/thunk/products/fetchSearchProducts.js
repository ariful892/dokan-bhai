import { useState } from "react";
import Loading from "../../../Pages/Shared/Loading/Loading";
import { searchProducts } from "../../actionCreators/searchAction";

const loadSearchProducts = (input) => {

    return async (dispatch, getState) => {
        // const [isLoading, setIsLoading] = useState(true);
        const res = await fetch(`https://backend.dokanbhai.dokanbhai.com:3002/api/products?pageNumber=1&seller=&name=${input}&category=&min=0&max=0&rating=0&order=newest&flash_sale=`);
        const data = await res.json();

        // if (isLoading) {
        //     return <Loading></Loading>
        // }
        // console.log(data.products)

        if (data.products.length) {
            // setIsLoading(false)
            dispatch(searchProducts(data.products));
        }
        else {
            dispatch(searchProducts([]));
        }
    }
}

export default loadSearchProducts;