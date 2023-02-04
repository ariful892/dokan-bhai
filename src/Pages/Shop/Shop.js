import React from 'react';
import './Shop.css'
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import banner1 from '../../assets/shop-page/banner1.png';
import banner2 from '../../assets/shop-page/banner2.png';
import shopImg from '../../assets/shop-page/shop-img.png';
import instagram from '../../assets/shop-page/icon/insta.png';
import fb from '../../assets/shop-page/icon/fb.png';
import youtube from '../../assets/shop-page/icon/utube.png';
import walletIcon from '../../assets/shop-page/icon/Wallet.png';
import starIcon from '../../assets/icons/star-icon.png';
import star from '../../assets/icons/Star.png';
import starLight from '../../assets/icons/starlight.png';
import expandIcon from '../../assets/icons/expand.png';
import ShopProducts from './ShopProducts/ShopProducts';
import ShopHomePage from './ShopHomePage/ShopHomePage';


const Shop = () => {
    return (
        <div className='single-shop-container'>

            {/* <!-- Navbar --> */}

            <div className='shop-nav'>
                <Link to={'/shop'} className='shop-nav-item'>Homepage</Link>
                <Link className='shop-nav-item' to={'/shop/products'}>All Products</Link>
                <Link className='shop-nav-item' to={'/shop/profile'}>Profile</Link>
            </div>

            <Outlet></Outlet>

        </div>
    );
};

export default Shop;