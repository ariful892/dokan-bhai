import React from 'react';
import './SingleCart.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import loadSingleProductData from '../../../redux/thunk/products/fetchSingleProduct';

const SingleCart = (cart) => {

    const dispatch = useDispatch();
    const products = useSelector((state) => state.forYouProducts.cartProducts);

    console.log(cart)
    // console.log(cart.cart.productID)

    useEffect(() => {
        dispatch(loadSingleProductData(cart.cart.productID))
    }, [dispatch, cart.cart.productID])

    const product = products.filter(p => p._id === cart.cart.productID);
    console.log(product)

    return (
        <div className="single-cart-container shadow-lg ">
            <div className="w-28 ">
                <img className='rounded-lg' src={cart.cart.img} alt="" />
            </div>


            <div className="ml-3 lg:ml-5 md:ml-5">
                <h2 className='text-xl font-bold mb-.5 w-48 lg:w-full md:w-full'>{cart.cart.name}</h2>
                {/* <p className='s-products-type'>{product.category}</p> */}

                <p className='text-md '>Color: {cart.cart.color}</p>
                <p className='text-md '>Size: {cart.cart.size}</p>

                <p className='text-md '>Quantity: {cart.cart.quantity}</p>

                <p className='text-md mb-1'>Price:</p>

                <button className=" font-bold bg-red-600 text-md text-white h-6 px-2 pb-1 rounded-md hover:bg-white hover:text-red-600 hover:border hover:border-red-600 ">Proceed to checkout</button>

                {/* <p className='s-products-price'>BDT {product.price}</p> */}
            </div>
            {/* <div className='text-center'>
                <button className='s-add-cart-btn'>Buy Now</button>
            </div> */}

        </div >
    );
};

export default SingleCart;