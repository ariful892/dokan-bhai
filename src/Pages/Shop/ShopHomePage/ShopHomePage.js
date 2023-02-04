import React, { useState } from 'react';
import './ShopHomePage.css'
import { Link } from 'react-router-dom';
import banner1 from '../../../assets/shop-page/banner1.png';
import banner2 from '../../../assets/shop-page/banner2.png';
import shopImg from '../../../assets/shop-page/shop-img.png';
import instagram from '../../../assets/shop-page/icon/insta.png';
import fb from '../../../assets/shop-page/icon/fb.png';
import youtube from '../../../assets/shop-page/icon/utube.png';
import walletIcon from '../../../assets/shop-page/icon/Wallet.png';
import starIcon from '../../../assets/icons/star-icon.png';
import star from '../../../assets/icons/Star.png';
import starLight from '../../../assets/icons/starlight.png';
import expandIcon from '../../../assets/icons/expand.png';
import ShopProducts from '../ShopProducts/ShopProducts';

const ShopHomePage = () => {

    const [filter, setFilter] = useState(false);


    return (
        <div className='shop-home-container'>

            <div className="banner-container">
                <img className='banner-img' src={banner1} alt="" />
                <img className='banner-img' src={banner2} alt="" />
            </div>

            <div className="slider">
                <div className="selected-option"></div>
                <div className="non-selected-option"></div>
                <div className="non-selected-option"></div>
                <div className="non-selected-option"></div>
                <div className="non-selected-option"></div>
                <div className="non-selected-option"></div>
            </div>

            <div className='flex justify-between items-center mt-4'>
                <p className='shop-intro'>আমরা সময়কে রাঙিয়ে তুলি</p>
                <div className='social-account'>
                    <img src={instagram} alt="" />
                    <img src={fb} alt="" />
                    <img src={youtube} alt="" />
                </div>
            </div>

            <div className='shop-info-container'>
                <img src={shopImg} alt="" />
                <div>
                    <h2 >Bharatsthali</h2>
                    <p >Clothing</p>
                    <p >Jomuna Future Park</p>

                    <div className='btn-container'>
                        <button className='follow-btn mb-3 lg:mb-0'>Follow</button>
                        <button className='block-btn'>Block</button>
                    </div>
                </div>
            </div>

            {/* <div className="filter-shops-container"> */}
            <div className="filter-shops-container">


                <div className='filter-container'>
                    <div className='lg:hidden md:hidden border-2 border-gray-400 px-1 rounded-t-md'>
                        <div onClick={() => setFilter(!filter)} className='flex justify-between '>
                            <h2 className='filter-title-mobile'>Filters</h2>
                            <img className='expand-icon mt-3' src={expandIcon} alt="" />
                        </div>
                    </div>
                    <h2 className='filter-title '>Filters</h2>


                    <div className={`${!filter ? 'home-filter' : 'mobile-home-filter'}`}>
                        <div className="filter ">

                            <div>
                                <div className='flex items-center mb-3'>
                                    <input className='checkbox-icon' type="checkbox" name="" id="" />
                                    <span className='filter-value'>Womens Wear</span>
                                </div>
                                <div className='flex items-center mb-3'>
                                    <input className='checkbox-icon' type="checkbox" name="" id="" />
                                    <span className='filter-value'>Mens Wear</span>
                                </div>
                            </div>
                        </div>


                        <div className="filter">
                            <div className=' filter-type-container'>
                                <div className='flex items-center'>
                                    <img className='filter-icon' src={walletIcon} alt="" />
                                    <span className='filter-type'>Price</span>
                                </div>
                                <img className='expand-icon' src={expandIcon} alt="" />
                            </div>


                            <div className='flex items-center justify-between'>
                                <input className='checkbox-icon' type="radio" name="" id="" />

                                <input className='checkbox-icon' type="radio" name="" id="" />
                            </div>

                            <div className='price-input-container'>
                                <input className='price-input' type="number" name="" id="" value='500' />

                                <input className='price-input' type="number" name="" id="" value='200200' />
                            </div>
                        </div>

                        <div className="filter">
                            <div className=' filter-type-container'>
                                <div className='flex items-center'>
                                    <img className='filter-icon' src={starIcon} alt="" />
                                    <span className='filter-type'>Rating</span>
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



                <div className='home-shops-container'>
                    <ShopProducts></ShopProducts>
                </div>
            </div>


        </div>
    );
};

export default ShopHomePage;