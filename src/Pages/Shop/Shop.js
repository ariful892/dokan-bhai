import React from 'react';
import './Shop.css'
import { Link, NavLink, Outlet } from 'react-router-dom';



const Shop = () => {
    return (
        <div className='single-shop-container'>

            {/* <!-- Navbar --> */}

            <div className='shop-nav'>
                <NavLink
                    to="/shop/home"
                    className={({ isActive }) =>
                        isActive ? 'shop-nav-item-active' : 'shop-nav-item'
                    }
                >
                    Homepage
                </NavLink>
                <NavLink
                    to="/shop/products"
                    className={({ isActive }) =>
                        isActive ? 'shop-nav-item-active' : 'shop-nav-item'
                    }
                >
                    All Products
                </NavLink>
                <NavLink
                    to="/shop/profile"
                    className={({ isActive }) =>
                        isActive ? 'shop-nav-item-active' : 'shop-nav-item'
                    }
                >
                    Profile
                </NavLink>
                {/* <Link to={'/shop'} className='shop-nav-item'>Homepage</Link>
                <Link className='shop-nav-item' to={'/shop/products'}>All Products</Link>
                <Link className='shop-nav-item' to={'/shop/profile'}>Profile</Link> */}
            </div>

            <Outlet></Outlet>

        </div>
    );
};

export default Shop;