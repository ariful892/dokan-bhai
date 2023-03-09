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

                {/* <div className="single-product">
                    <div className='img-container'>
                        <img className='product-img' src={product2} alt="" />
                    </div>
                    <div className="product-details">
                        <p className='product-name'>Consequat facilisi dui fermentum tincidunt.</p>
                        <p className='product-type'>Sit eu</p>
                        <h2 className='product-price'>$130</h2>
                    </div>

                </div>

                <div className="single-product">
                    <div className='img-container'>
                        <img className='product-img' src={product3} alt="" />
                    </div>
                    <div className="product-details">
                        <p className='product-name'>Parturient aenean mollis tristique.</p>
                        <p className='product-type'>Urna</p>
                        <h2 className='product-price'>$130</h2>
                    </div>

                </div>

                <div className="single-product">
                    <div className='img-container'>
                        <img className='product-img' src={product4} alt="" />
                    </div>
                    <div className="product-details">
                        <p className='product-name'>Platea eget viverra nec vel et fringilla.</p>
                        <p className='product-type'>Purus</p>
                        <h2 className='product-price'>$130</h2>
                    </div>

                </div>

                <div className="single-product">
                    <div className='img-container'>
                        <img className='product-img' src={product5} alt="" />
                    </div>
                    <div className="product-details">
                        <p className='product-name'>Quam lectus nibh in.</p>
                        <p className='product-type'>Dictum</p>
                        <h2 className='product-price'>$130</h2>
                    </div>

                </div>

                <div className="single-product">
                    <div className='img-container'>
                        <img className='product-img' src={product6} alt="" />
                    </div>
                    <div className="product-details">
                        <p className='product-name'>Faucibus aliquam.</p>
                        <p className='product-type'>Integer</p>
                        <h2 className='product-price'>$130</h2>
                    </div>

                </div>
                <div className="single-product">
                    <div className='img-container'>
                        <img className='product-img' src={product7} alt="" />
                    </div>
                    <div className="product-details">
                        <p className='product-name'>Sit velit justo in pharetra feugiat amet.</p>
                        <p className='product-type'>Cursus mi</p>
                        <h2 className='product-price'>$130</h2>
                    </div>

                </div>
                <div className="single-product">
                    <div className='img-container'>
                        <img className='product-img' src={product8} alt="" />
                    </div>
                    <div className="product-details">
                        <p className='product-name'>Et tristique aliquam nullam nulla sed risus.</p>
                        <p className='product-type'>Chair</p>
                        <h2 className='product-price'>$130</h2>
                    </div>

                </div>
                <div className="single-product">
                    <div className='img-container'>
                        <img className='product-img' src={product9} alt="" />
                    </div>
                    <div className="product-details">
                        <p className='product-name'>Duis egestas nunc volutpat nullam.</p>
                        <p className='product-type'>Viverra</p>
                        <h2 className='product-price'>$130</h2>
                    </div>

                </div>
                <div className="single-product">
                    <div className='img-container'>
                        <img className='product-img' src={product10} alt="" />
                    </div>
                    <div className="product-details">
                        <p className='product-name'>Sed interdum mauris.</p>
                        <p className='product-type'>Sed</p>
                        <h2 className='product-price'>$130</h2>
                    </div>

                </div> */}

            </div>
        </div>
    );
};

export default ProductsForYou;