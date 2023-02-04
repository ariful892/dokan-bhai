import React from 'react';
import Featured from './Featured/Featured';
import FlashSale from './FlashSale/FlashSale';
import HelloMall from './HelloMall/HelloMall';
import './Homepage.css'
import ProductsForYou from './ProductsForYou/ProductsForYou';
import ShoppingMalls from './ShoppingMalls/ShoppingMalls';
import TopSellers from './TopSellers/TopSellers';

const Homepage = () => {
    return (
        <div className='homepage-container'>
            <div className='home-title-container'>
                <h2 className='homepage-title'>Homepage</h2>
            </div>

            <ShoppingMalls></ShoppingMalls>
            <FlashSale></FlashSale>
            <Featured></Featured>
            <HelloMall></HelloMall>
            <TopSellers></TopSellers>
            <ProductsForYou></ProductsForYou>
        </div>
    );
};

export default Homepage;