import React, { useState } from 'react';
import './ShoppingMall.css'
import searchIcon from '../../assets/icons/search.png';
import floorIcon from '../../assets/icons/floor.png';
import expandIcon from '../../assets/icons/expand.png';
import categoryIcon from '../../assets/icons/Category.png';
import starIcon from '../../assets/icons/star-icon.png';
import star from '../../assets/icons/Star.png';
import starLight from '../../assets/icons/starlight.png';
import mallImg from '../../assets/Shopping-malls/malls1.png';
import shop1 from '../../assets/shops/shop1.png';
import shop2 from '../../assets/shops/shop2.png';
import shop3 from '../../assets/shops/shop3.png';
import shop4 from '../../assets/shops/shop4.png';
import shop5 from '../../assets/shops/shop5.png';
import shop6 from '../../assets/shops/shop6.png';
import shop7 from '../../assets/shops/shop7.png';
import shop8 from '../../assets/shops/shop8.png';
import shop9 from '../../assets/shops/shop9.png';
import shop10 from '../../assets/shops/shop10.png';
import shop11 from '../../assets/shops/shop11.png';
import shop12 from '../../assets/shops/shop12.png';
import shop13 from '../../assets/shops/shop13.png';
import shop14 from '../../assets/shops/shop14.png';
import shop15 from '../../assets/shops/shop15.png';
import shop16 from '../../assets/shops/shop16.png';
import { Link } from 'react-router-dom';


const ShoppingMall = () => {

    const [filter, setFilter] = useState(false);

    return (
        <div className='shopping-container'>
            <div className='block md:flex lg:flex  justify-between items-center lg:items-start'>
                <div className='mall-name-address-container'>
                    <h2 className='page-title'>Shopping Malls</h2>
                    <h2 className='mall-name'>Jomuna Future Park</h2>
                    <p className='mall-address'>KA-244, Kuril, Progoti Shoroni, Dhaka</p>

                    <div className='flex'>
                        <button className='follow-btn'>Follow</button>
                        <button className='block-btn'>Block</button>
                    </div>
                </div>
                <div>
                    <img className='mall-img' src={mallImg} alt="" />
                </div>
            </div>

            <div className="filter-shops-container">
                <div className='filter-container'>

                    <div className='lg:hidden md:hidden border-2 border-gray-400 px-1 rounded-t-md'>
                        <div onClick={() => setFilter(!filter)} className='flex justify-between '>
                            <h2 className='filter-title-mobile'>Filters</h2>
                            <img className='expand-icon mt-3' src={expandIcon} alt="" />
                        </div>
                    </div>
                    <h2 className='filter-title'>Filters</h2>

                    <div className={`${!filter ? 'home-filter' : 'mobile-home-filter'}`}>
                        <div className="filter">
                            <div className=' filter-type-container'>
                                <div className='flex items-center'>
                                    <img className='filter-icon' src={floorIcon} alt="" />
                                    <span className='filter-type'>Floor</span>
                                </div>
                                <img className='expand-icon' src={expandIcon} alt="" />
                            </div>

                            <div>
                                <div className='flex items-center mb-3'>
                                    <input className='checkbox-icon' type="checkbox" name="" id="" />
                                    <span className='filter-value'>1st</span>
                                </div>
                                <div className='flex items-center mb-3'>
                                    <input className='checkbox-icon' type="checkbox" name="" id="" />
                                    <span className='filter-value'>2nd</span>
                                </div>
                                <div className='flex items-center mb-3'>
                                    <input className='checkbox-icon' type="checkbox" name="" id="" />
                                    <span className='filter-value'>3rd</span>
                                </div>
                                <div className='flex items-center mb-3'>
                                    <input className='checkbox-icon' type="checkbox" name="" id="" />
                                    <span className='filter-value'>4th</span>
                                </div>
                                <div className='flex items-center'>
                                    <input className='checkbox-icon' type="checkbox" name="" id="" />
                                    <span className='filter-value'>5th</span>
                                </div>
                            </div>

                        </div>

                        <div className="filter">
                            <div className=' filter-type-container'>
                                <div className='flex'>
                                    <img className='filter-icon' src={categoryIcon} alt="" />
                                    <span className='filter-type'>Type</span>
                                </div>
                                <img className='expand-icon' src={expandIcon} alt="" />
                            </div>

                            <div>
                                <div className='flex items-center mb-3'>
                                    <input className='checkbox-icon' type="checkbox" name="" id="" />
                                    <span className='filter-value'>Mobile</span>
                                </div>
                                <div className='flex items-center mb-3'>
                                    <input className='checkbox-icon' type="checkbox" name="" id="" />
                                    <span className='filter-value'>Sports</span>
                                </div>
                                <div className='flex items-center mb-3'>
                                    <input className='checkbox-icon' type="checkbox" name="" id="" />
                                    <span className='filter-value'>Accessories</span>
                                </div>
                                <div className='flex items-center mb-3'>
                                    <input className='checkbox-icon' type="checkbox" name="" id="" />
                                    <span className='filter-value'>Dress</span>
                                </div>
                                <div className='flex items-center'>
                                    <input className='checkbox-icon' type="checkbox" name="" id="" />
                                    <span className='filter-value'>Laptop</span>
                                </div>
                            </div>

                        </div>

                        <div className="filter">
                            <div className=' filter-type-container'>
                                <div className='flex'>
                                    <img className='filter-icon' src={starIcon} alt="" />
                                    <span className='filter-type'>Type</span>
                                </div>
                                <img className='expand-icon' src={expandIcon} alt="" />
                            </div>

                            <div>
                                <div className='flex items-center mb-3'>
                                    <input className='checkbox-icon' type="radio" name="" id="" />

                                    <div className="ratings-container">
                                        <img className='ratings' src={star} alt="" />
                                        <img className='ratings' src={star} alt="" />
                                        <img className='ratings' src={star} alt="" />
                                        <img className='ratings' src={star} alt="" />
                                        <img className='ratings' src={star} alt="" />
                                    </div>
                                </div>

                                <div className='flex items-center mb-3'>
                                    <input className='checkbox-icon' type="radio" name="" id="" />
                                    <div className="ratings-container">
                                        <img className='ratings' src={star} alt="" />
                                        <img className='ratings' src={star} alt="" />
                                        <img className='ratings' src={star} alt="" />
                                        <img className='ratings' src={star} alt="" />
                                        <img className='ratings' src={starLight} alt="" />
                                    </div>
                                    <span className='rating-extra'>and up</span>
                                </div>

                                <div className='flex items-center mb-3'>
                                    <input className='checkbox-icon' type="radio" name="" id="" />
                                    <div className="ratings-container">
                                        <img className='ratings' src={star} alt="" />
                                        <img className='ratings' src={star} alt="" />
                                        <img className='ratings' src={star} alt="" />
                                        <img className='ratings' src={starLight} alt="" />
                                        <img className='ratings' src={starLight} alt="" />
                                    </div>
                                    <span className='rating-extra'>and up</span>
                                </div>

                                <div className='flex items-center mb-3'>
                                    <input className='checkbox-icon' type="radio" name="" id="" />

                                    <div className="ratings-container">
                                        <img className='ratings' src={star} alt="" />
                                        <img className='ratings' src={star} alt="" />
                                        <img className='ratings' src={starLight} alt="" />
                                        <img className='ratings' src={starLight} alt="" />
                                        <img className='ratings' src={starLight} alt="" />
                                    </div>
                                    <span className='rating-extra'>and up</span>
                                </div>
                                <div className='flex items-center'>
                                    <input className='checkbox-icon' type="radio" name="" id="" />

                                    <div className="ratings-container">
                                        <img className='ratings' src={star} alt="" />
                                        <img className='ratings' src={starLight} alt="" />
                                        <img className='ratings' src={starLight} alt="" />
                                        <img className='ratings' src={starLight} alt="" />
                                        <img className='ratings' src={starLight} alt="" />
                                    </div>
                                    <span className='rating-extra'>and up</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='shops-container'>
                    <div className='search-box'>
                        <input className='input-search' type="text" placeholder='Search' />
                        <img className='search-btn' src={searchIcon} alt="" />
                    </div>

                    <div className="shops">
                        <div className="shop">
                            <img className='shop-image' src={shop1} alt="" />
                            <div className="shop-details">
                                <Link to={'/shop'} className='shop-title'>Bharatsthali</Link>
                                <p className='type'>Clothing</p>
                                <div className=' shop-floor'>
                                    <img className='floor-icon' src={floorIcon} alt="" />
                                    <span className='floor-no'>1st Floor</span>
                                </div>
                            </div>
                        </div>

                        <div className="shop">
                            <img className='shop-image' src={shop2} alt="" />
                            <div className="shop-details">
                                <h2 className='shop-title'>Khazana</h2>
                                <p className='type'>Clothing</p>
                                <div className=' shop-floor'>
                                    <img className='floor-icon' src={floorIcon} alt="" />
                                    <span className='floor-no'>1st Floor</span>
                                </div>
                            </div>
                        </div>
                        <div className="shop">
                            <img className='shop-image' src={shop3} alt="" />
                            <div className="shop-details">
                                <h2 className='shop-title'>Rookies</h2>
                                <p className='type'>Clothing</p>
                                <div className=' shop-floor'>
                                    <img className='floor-icon' src={floorIcon} alt="" />
                                    <span className='floor-no'>1st Floor</span>
                                </div>
                            </div>
                        </div>
                        <div className="shop">
                            <img className='shop-image' src={shop4} alt="" />
                            <div className="shop-details">
                                <h2 className='shop-title'>Irani Borka Bazar</h2>
                                <p className='type'>Clothing</p>
                                <div className=' shop-floor'>
                                    <img className='floor-icon' src={floorIcon} alt="" />
                                    <span className='floor-no'>1st Floor</span>
                                </div>
                            </div>
                        </div>
                        <div className="shop">
                            <img className='shop-image' src={shop5} alt="" />
                            <div className="shop-details">
                                <h2 className='shop-title'>Plus Point</h2>
                                <p className='type'>Clothing</p>
                                <div className=' shop-floor'>
                                    <img className='floor-icon' src={floorIcon} alt="" />
                                    <span className='floor-no'>1st Floor</span>
                                </div>
                            </div>
                        </div>
                        <div className="shop">
                            <img className='shop-image' src={shop6} alt="" />
                            <div className="shop-details">
                                <h2 className='shop-title'>Kids Paradise</h2>
                                <p className='type'>Toy Store</p>
                                <div className=' shop-floor'>
                                    <img className='floor-icon' src={floorIcon} alt="" />
                                    <span className='floor-no'>1st Floor</span>
                                </div>
                            </div>
                        </div>
                        <div className="shop">
                            <img className='shop-image' src={shop7} alt="" />
                            <div className="shop-details">
                                <h2 className='shop-title'>Shoishob Fashion</h2>
                                <p className='type'>Clothing</p>
                                <div className=' shop-floor'>
                                    <img className='floor-icon' src={floorIcon} alt="" />
                                    <span className='floor-no'>1st Floor</span>
                                </div>
                            </div>
                        </div>
                        <div className="shop">
                            <img className='shop-image' src={shop8} alt="" />
                            <div className="shop-details">
                                <h2 className='shop-title'>Illiyeen</h2>
                                <p className='type'>Clothing</p>
                                <div className=' shop-floor'>
                                    <img className='floor-icon' src={floorIcon} alt="" />
                                    <span className='floor-no'>1st Floor</span>
                                </div>
                            </div>
                        </div>
                        <div className="shop">
                            <img className='shop-image' src={shop9} alt="" />
                            <div className="shop-details">
                                <h2 className='shop-title'>Dorjibari</h2>
                                <p className='type'>Clothing</p>
                                <div className=' shop-floor'>
                                    <img className='floor-icon' src={floorIcon} alt="" />
                                    <span className='floor-no'>2nd Floor</span>
                                </div>
                            </div>
                        </div>
                        <div className="shop">
                            <img className='shop-image' src={shop10} alt="" />
                            <div className="shop-details">
                                <h2 className='shop-title'>Handibazar</h2>
                                <p className='type'>Clothing</p>
                                <div className=' shop-floor'>
                                    <img className='floor-icon' src={floorIcon} alt="" />
                                    <span className='floor-no'>2nd Floor</span>
                                </div>
                            </div>
                        </div>
                        <div className="shop">
                            <img className='shop-image' src={shop11} alt="" />
                            <div className="shop-details">
                                <h2 className='shop-title'>Amin Jeweller</h2>
                                <p className='type'>Jewellery</p>
                                <div className=' shop-floor'>
                                    <img className='floor-icon' src={floorIcon} alt="" />
                                    <span className='floor-no'>2nd Floor</span>
                                </div>
                            </div>
                        </div>
                        <div className="shop">
                            <img className='shop-image' src={shop12} alt="" />
                            <div className="shop-details">
                                <h2 className='shop-title'>Sumon Fasion</h2>
                                <p className='type'>Clothing</p>
                                <div className=' shop-floor'>
                                    <img className='floor-icon' src={floorIcon} alt="" />
                                    <span className='floor-no'>2nd Floor</span>
                                </div>
                            </div>
                        </div>
                        <div className="shop">
                            <img className='shop-image' src={shop13} alt="" />
                            <div className="shop-details">
                                <h2 className='shop-title'>Beauty Hub</h2>
                                <p className='type'>Cosmetics</p>
                                <div className=' shop-floor'>
                                    <img className='floor-icon' src={floorIcon} alt="" />
                                    <span className='floor-no'>2nd Floor</span>
                                </div>
                            </div>
                        </div>
                        <div className="shop">
                            <img className='shop-image' src={shop14} alt="" />
                            <div className="shop-details">
                                <h2 className='shop-title'>Mehbuba</h2>
                                <p className='type'>Clothing</p>
                                <div className=' shop-floor'>
                                    <img className='floor-icon' src={floorIcon} alt="" />
                                    <span className='floor-no'>2nd Floor</span>
                                </div>
                            </div>
                        </div>
                        <div className="shop">
                            <img className='shop-image' src={shop15} alt="" />
                            <div className="shop-details">
                                <h2 className='shop-title'>The Body Shop</h2>
                                <p className='type'>Cosmetics</p>
                                <div className=' shop-floor'>
                                    <img className='floor-icon' src={floorIcon} alt="" />
                                    <span className='floor-no'>2nd Floor</span>
                                </div>
                            </div>
                        </div>
                        <div className="shop">
                            <img className='shop-image' src={shop16} alt="" />
                            <div className="shop-details">
                                <h2 className='shop-title'>Banglar Mela</h2>
                                <p className='type'>Clothing</p>
                                <div className=' shop-floor'>
                                    <img className='floor-icon' src={floorIcon} alt="" />
                                    <span className='floor-no'>2nd Floor</span>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='text-center'>
                        <button className='load-btn'>Load More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShoppingMall;