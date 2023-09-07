import React from 'react';
import Featured from './Featured/Featured';
import FlashSale from './FlashSale/FlashSale';
import HelloMall from './HelloMall/HelloMall';
import './Homepage.css'
import ProductsForYou from './ProductsForYou/ProductsForYou';
import ShoppingMalls from './ShoppingMalls/ShoppingMalls';
import TopSellers from './TopSellers/TopSellers';
import display from '../../assets/display-picture.png';

const Homepage = () => {


    return (
        <div className='homepage-container'>

            <img className='display-picture' src={display} alt="" />
            {/* <div className="banner-container">
                <div className='banner-text rounded-lg'>
                    <img className='display-picture' src={display} alt="" />

                    <div className='ml-5'>
                        <h2 className='text-3xl font-bold mt-5'>Clearance up to 50% off</h2>
                        <p className='mt-3 mb-8 text-black'>Huge savings on tech, toys, home & more!</p>
                        <button className='px-4 py-1 border-2 border-black text-black font-extrabold rounded-3xl hover:bg-black hover:text-white'>Shop Now</button>
                    </div>
                </div>
            </div> */}




            <ShoppingMalls></ShoppingMalls>
            <FlashSale></FlashSale>
            <Featured></Featured>
            {/* <HelloMall></HelloMall> */}
            {/* <TopSellers></TopSellers> */}
            <ProductsForYou></ProductsForYou>
        </div>
    );
};

export default Homepage;