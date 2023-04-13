const postOrderData = (order) => {
    console.log(order);
    return async (dispatch, getState) => {
        const res = await fetch("https://backend.dokanbhai.dokanbhai.com:3002/api/orders", {
            method: "POST",
            body: JSON.stringify(order),
            headers: {
                "content-type": "application/json",
            },
        });
        const data = await res.json();

        // console.log(data.acknowledged)
        if (data.acknowledged) {
            console.log('posted');
            // dispatch(loadCartProducts(data));
        }
    }
}

export default postOrderData;