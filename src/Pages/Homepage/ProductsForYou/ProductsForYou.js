import React, { useEffect, useState } from 'react';
import './ProductsForYou.css';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import SingleForYouProduct from './SingleForYouProduct/SingleForYouProduct';
import { useDispatch, useSelector } from 'react-redux';
import loadProductsForYouData from '../../../redux/thunk/products/fetchProductsForYouData';

const ProductsForYou = () => {


    // const dispatch = useDispatch();
    // const allProducts = useSelector((state) => state.products);

    // console.log(allProducts)

    // useEffect(() => {
    // dispatch(loadProductsForYouData())
    // }, [dispatch])

    const { isLoading, error, data: allProducts } = useQuery('products', () =>
        fetch('https://backend.dokanbhai.dokanbhai.com:3002/api/products/all_products').then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <Loading></Loading>
    }


    // console.log(allProducts.products)
    const forYouProducts = allProducts.products.slice(0, 16);
    // console.log(forYouProducts)

    return (
        <div className='products-for-container'>
            <h2 className='section-title'>Products For You</h2>

            <div className="for-you-products">
                {
                    allProducts.products.slice(0, 16).map(product => <SingleForYouProduct
                        key={product._id}
                        product={product}
                    ></SingleForYouProduct>)
                }


            </div>
        </div>
    );
};

export default ProductsForYou;