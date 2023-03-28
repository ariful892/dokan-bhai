// use local storage to manage cart data

import { toast } from "react-toastify";

// use local storage to manage cart data
const addToDb = cart => {

    console.log(cart)



    // console.log(newCart)

    //get the shopping cart from local storage
    // const storedCart = localStorage.getItem('shopping-cart');
    // if (storedCart) {
    //     shoppingCart = JSON.parse(storedCart);
    // }


    localStorage.setItem('shopping-cart', JSON.stringify(cart));
    toast.success('Product is added');

}


// const addToDb = id => {

//     console.log(id)

//     let shoppingCart = {};

//     //get the shopping cart from local storage
//     const storedCart = localStorage.getItem('shopping-cart');
//     if (storedCart) {
//         shoppingCart = JSON.parse(storedCart);
//     }

//     // add quantity
//     const quantity = shoppingCart[id];
//     if (quantity) {
//         const newQuantity = quantity + 1;
//         shoppingCart[id] = newQuantity;
//     }
//     else {
//         shoppingCart[id] = 1;
//     }
//     localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
// }

const getStoredCart = () => {
    let shoppingCart = [];

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }

    return shoppingCart;
}

const removeFromDb = id => {
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart);
        if (id in shoppingCart) {
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
}

const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
}

export {
    addToDb,
    getStoredCart,
    removeFromDb,
    deleteShoppingCart
}