import React from 'react';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import loadCartProductsData from '../../redux/thunk/cartProducts/fetchCartProducts';
import Loading from '../Shared/Loading/Loading';
import SingleCart from './SingleCart/SingleCart';
import './Carts.css'
import { getStoredCart } from '../../utilities/cartStorage';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { loadCartProducts } from '../../redux/actionCreators/cartActions';
import { loadingAction } from '../../redux/actionCreators/shoppingmallActions';

const Carts = () => {

    // const [carts, setCarts] = useState([]);
    const dispatch = useDispatch();
    const carts = useSelector((state) => state.cartProduct.carts);
    const loading = useSelector((state) => state.forYouProducts.loading);

    console.log('carts');
    console.log(carts);

    const cartProduct = getStoredCart();
    console.log('cartProduct')
    console.log(cartProduct)
    let cartContent;
    useEffect(() => {
        // dispatch(loadingAction())
        dispatch(loadCartProducts(cartProduct))
    }, [dispatch])

    // if (loading) {
    //     return <Loading></Loading>
    // }


    if (carts.length) {
        cartContent = <div>
            <h2 className='text-2xl text-center mb-5'>Your added Product </h2>
            <div className=' w-full'>
                {
                    carts.map(cart => <SingleCart
                        key={cart._id}
                        cart={cart}
                    // carts={carts}
                    // setCarts={setCarts}
                    ></SingleCart>
                    )
                }
            </div>
        </div>
    }


    if (!cartProduct.length) {
        cartContent = <div className='flex justify-center items-center'>
            <h2 className='text-2xl text-center text-red-500 mb-5'>You have no product in the cart! <Link to={'/'} className='text-sm text-blue-500'>Buy Now</Link></h2>
        </div>
    }


    return (
        <div className='carts-container min-h-screen '>

            {cartContent}

            {/* <div>
            <h2 className='text-2xl text-center mb-5'>Products that you chose to purchase </h2>
            <div className='flex justify-center'>
                <div className="s-products">
                    {
                        cartProduct.map(cart => <SingleCart
                            key={cart._id}
                            cart={cart}
                        ></SingleCart>
                        )
                    }
                </div>
            </div>
        </div> */}
        </div>

    );
};

export default Carts;