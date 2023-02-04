import React from 'react';
import './ShoppingMalls.css'
import searchIcon from '../../../assets/icons/search.png';
import editIcon from '../../../assets/icons/edit.png';
import activityIcon from '../../../assets/icons/activity.png';
import locationIcon from '../../../assets/icons/location.png';
import location2Icon from '../../../assets/icons/location2.png';
import sendIcon from '../../../assets/icons/Send.png';
import ticketIcon from '../../../assets/icons/Ticket.png';
import subtractIcon from '../../../assets/icons/Subtract.png';
import malls1 from '../../../assets/Shopping-malls/malls1.png';
import malls2 from '../../../assets/Shopping-malls/malls2.png';
import malls3 from '../../../assets/Shopping-malls/malls3.png';
import malls4 from '../../../assets/Shopping-malls/malls4.png';
import malls5 from '../../../assets/Shopping-malls/malls5.png';
import malls6 from '../../../assets/Shopping-malls/malls6.png';
import malls7 from '../../../assets/Shopping-malls/malls7.png';
import malls8 from '../../../assets/Shopping-malls/malls8.png';
import malls9 from '../../../assets/Shopping-malls/malls9.png';
import malls10 from '../../../assets/Shopping-malls/malls10.png';
import malls11 from '../../../assets/Shopping-malls/malls11.png';
import malls12 from '../../../assets/Shopping-malls/malls12.png';
import banner1 from '../../../assets/banner/banner1.png';
import banner2 from '../../../assets/banner/banner2.png';
import { Link } from 'react-router-dom';

const ShoppingMalls = () => {
    return (
        <div className='shopping-mall-container'>
            <div className='title-country-select-container'>
                <Link to={'/mall'} className='shopping-title'>Shopping Malls</Link>

                <select className='location-select' name="" id="">
                    <option className='bg-white' value="">Bangladesh</option>
                    <option className='bg-white' value="">Bangladesh</option>
                    <option className='bg-white' value="">Bangladesh</option>
                </select>
            </div>


            <div>
                <div className='search-box'>
                    <input className='input-search' type="text" placeholder='Search' />
                    <img className='search-btn' src={searchIcon} alt="" />
                </div>
                <div className='shopping-mall'>


                    <div className='shop-container'>
                        <div className='shop-img-container'>
                            <img className='shop-img' src={malls1} alt="" />
                            <div className='edit-container'>
                                <img className='edit-icon' src={editIcon} alt="" />
                            </div>
                        </div>
                        <div className="shop-info-detail">
                            <h2 className='shop-name'>Jomuna Future Park</h2>
                            <div className='flex items-center'>
                                <img className='icons-style' src={activityIcon} alt="" />
                                <p className='shop-info'>16 Active Shops</p>
                            </div>
                            <div className='flex items-center'>
                                <img className='icons-style' src={locationIcon} alt="" />
                                <p className='shop-info'>200 meter</p>
                            </div>
                        </div>

                    </div>

                    <div className='shop-container'>
                        <div className='shop-img-container'>
                            <img className='shop-img' src={malls2} alt="" />
                            <div className='edit-container'>
                                <img className='edit-icon' src={editIcon} alt="" />
                            </div>
                        </div>
                        <div className="shop-info-detail">
                            <h2 className='shop-name'>Boshundhora City</h2>
                            <div className='flex items-center'>
                                <img className='icons-style' src={activityIcon} alt="" />
                                <p className='shop-info'>16 Active Shops</p>
                            </div>
                            <div className='flex items-center'>
                                <img className='icons-style' src={locationIcon} alt="" />
                                <p className='shop-info'>200 meter</p>
                            </div>
                        </div>

                    </div>

                    <div className='shop-container'>
                        <div className='shop-img-container'>
                            <img className='shop-img' src={malls3} alt="" />
                            <div className='edit-container'>
                                <img className='edit-icon' src={editIcon} alt="" />
                            </div>
                        </div>
                        <div className="shop-info-detail">
                            <h2 className='shop-name'>Dhaka New market</h2>
                            <div className='flex items-center'>
                                <img className='icons-style' src={activityIcon} alt="" />
                                <p className='shop-info'>16 Active Shops</p>
                            </div>
                            <div className='flex items-center'>
                                <img className='icons-style' src={locationIcon} alt="" />
                                <p className='shop-info'>200 meter</p>
                            </div>
                        </div>

                    </div>

                    <div className='shop-container'>
                        <div className='shop-img-container'>
                            <img className='shop-img' src={malls4} alt="" />
                            <div className='edit-container'>
                                <img className='edit-icon' src={editIcon} alt="" />
                            </div>
                        </div>
                        <div className="shop-info-detail">
                            <h2 className='shop-name'>Eastern Mollika</h2>
                            <div className='flex items-center'>
                                <img className='icons-style' src={activityIcon} alt="" />
                                <p className='shop-info'>16 Active Shops</p>
                            </div>
                            <div className='flex items-center'>
                                <img className='icons-style' src={locationIcon} alt="" />
                                <p className='shop-info'>200 meter</p>
                            </div>
                        </div>

                    </div>

                    <div className='shop-container'>
                        <div className='shop-img-container'>
                            <img className='shop-img' src={malls5} alt="" />
                            <div className='edit-container'>
                                <img className='edit-icon' src={editIcon} alt="" />
                            </div>
                        </div>
                        <div className="shop-info-detail">
                            <h2 className='shop-name'>Police Plaza Concord</h2>
                            <div className='flex items-center'>
                                <img className='icons-style' src={activityIcon} alt="" />
                                <p className='shop-info'>16 Active Shops</p>
                            </div>
                            <div className='flex items-center'>
                                <img className='icons-style' src={locationIcon} alt="" />
                                <p className='shop-info'>200 meter</p>
                            </div>
                        </div>

                    </div>

                    <div className='shop-container'>
                        <div className='shop-img-container'>
                            <img className='shop-img' src={malls6} alt="" />
                            <div className='edit-container'>
                                <img className='edit-icon' src={editIcon} alt="" />
                            </div>
                        </div>
                        <div className="shop-info-detail">
                            <h2 className='shop-name'>Eastern Plaza</h2>
                            <div className='flex items-center'>
                                <img className='icons-style' src={activityIcon} alt="" />
                                <p className='shop-info'>16 Active Shops</p>
                            </div>
                            <div className='flex items-center'>
                                <img className='icons-style' src={locationIcon} alt="" />
                                <p className='shop-info'>200 meter</p>
                            </div>
                        </div>

                    </div>

                    <div className='shop-container'>
                        <div className='shop-img-container'>
                            <img className='shop-img' src={malls7} alt="" />
                            <div className='edit-container'>
                                <img className='edit-icon' src={editIcon} alt="" />
                            </div>
                        </div>
                        <div className="shop-info-detail">
                            <h2 className='shop-name'>Vitae cras praesent lobortis arcu velit nulla.</h2>
                            <div className='flex items-center'>
                                <img className='icons-style' src={activityIcon} alt="" />
                                <p className='shop-info'>16 Active Shops</p>
                            </div>
                            <div className='flex items-center'>
                                <img className='icons-style' src={locationIcon} alt="" />
                                <p className='shop-info'>200 meter</p>
                            </div>
                        </div>

                    </div>

                    <div className='shop-container'>
                        <div className='shop-img-container'>
                            <img className='shop-img' src={malls8} alt="" />
                            <div className='edit-container'>
                                <img className='edit-icon' src={editIcon} alt="" />
                            </div>
                        </div>
                        <div className="shop-info-detail">
                            <h2 className='shop-name'>Nibh sapien egestas quam viverra gravida.</h2>
                            <div className='flex items-center'>
                                <img className='icons-style' src={activityIcon} alt="" />
                                <p className='shop-info'>16 Active Shops</p>
                            </div>
                            <div className='flex items-center'>
                                <img className='icons-style' src={locationIcon} alt="" />
                                <p className='shop-info'>200 meter</p>
                            </div>
                        </div>

                    </div>

                    <div className='shop-container'>
                        <div className='shop-img-container'>
                            <img className='shop-img' src={malls9} alt="" />
                            <div className='edit-container'>
                                <img className='edit-icon' src={editIcon} alt="" />
                            </div>
                        </div>
                        <div className="shop-info-detail">
                            <h2 className='shop-name'>Ornare risus, hendrerit fusce vitae volutpat. </h2>
                            <div className='flex items-center'>
                                <img className='icons-style' src={activityIcon} alt="" />
                                <p className='shop-info'>16 Active Shops</p>
                            </div>
                            <div className='flex items-center'>
                                <img className='icons-style' src={locationIcon} alt="" />
                                <p className='shop-info'>200 meter</p>
                            </div>
                        </div>

                    </div>

                    <div className='shop-container'>
                        <div className='shop-img-container'>
                            <img className='shop-img' src={malls10} alt="" />
                            <div className='edit-container'>
                                <img className='edit-icon' src={editIcon} alt="" />
                            </div>
                        </div>
                        <div className="shop-info-detail">
                            <h2 className='shop-name'>Vitae semper pulvinar nam volutpat ut.</h2>
                            <div className='flex items-center'>
                                <img className='icons-style' src={activityIcon} alt="" />
                                <p className='shop-info'>16 Active Shops</p>
                            </div>
                            <div className='flex items-center'>
                                <img className='icons-style' src={locationIcon} alt="" />
                                <p className='shop-info'>200 meter</p>
                            </div>
                        </div>

                    </div>

                    <div className='shop-container'>
                        <div className='shop-img-container'>
                            <img className='shop-img' src={malls11} alt="" />
                            <div className='edit-container'>
                                <img className='edit-icon' src={editIcon} alt="" />
                            </div>
                        </div>
                        <div className="shop-info-detail">
                            <h2 className='shop-name'>Other Physical Stores</h2>
                            <div className='flex items-center'>
                                <img className='icons-style' src={activityIcon} alt="" />
                                <p className='shop-info'>16 Active Shops</p>
                            </div>
                            <div className='flex items-center'>
                                <img className='icons-style' src={locationIcon} alt="" />
                                <p className='shop-info'>200 meter</p>
                            </div>
                        </div>

                    </div>

                    <div className='shop-container'>
                        <div className='shop-img-container'>
                            <img className='shop-img' src={malls12} alt="" />
                            <div className='edit-container'>
                                <img className='edit-icon' src={editIcon} alt="" />
                            </div>
                        </div>
                        <div className="shop-info-detail">
                            <h2 className='shop-name'>Nibh sapien egestas quam viverra gravida.</h2>
                            <div className='flex items-center'>
                                <img className='icons-style' src={activityIcon} alt="" />
                                <p className='shop-info'>16 Active Shops</p>
                            </div>
                            <div className='flex items-center'>
                                <img className='icons-style' src={locationIcon} alt="" />
                                <p className='shop-info'>200 meter</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className='search-filter-container'>
                <div className='flex'>
                    <input className='input-search' type="text" placeholder='Search' />
                    <img className='search-btn' src={searchIcon} alt="" />
                </div>

                <select className='location-select' name="" id="">
                    <option className='bg-white' value="">Farmgate</option>
                    <option className='bg-white' value="">Farmgate</option>
                    <option className='bg-white' value="">Farmgate</option>
                </select>

                <button className='advance-btn'>Advance Search</button>
            </div>

            <div className="banner-container">
                <img className='banner1' src={banner1} alt="" />
                <img className='banner2' src={banner2} alt="" />
            </div>
            <div className="slider">
                <div className="selected-option"></div>
                <div className="non-selected-option"></div>
                <div className="non-selected-option"></div>
                <div className="non-selected-option"></div>
                <div className="non-selected-option"></div>
                <div className="non-selected-option"></div>
            </div>

            <div className="shop-type">
                <div className="single-type">
                    <img className='shop-type-icon' src={location2Icon} alt="" />
                    <h2 className='shop-type-title'>Physical Shops</h2>
                    <p className='type-details'>A a aliquam odio sit sed leo, tellus morbi. Bibendum.</p>
                </div>

                <div className="single-type">
                    <img className='shop-type-icon' src={sendIcon} alt="" />
                    <h2 className='shop-type-title'>Online Shops</h2>
                    <p className='type-details'>Feugiat turpis eget nisi risus. Nullam convallis velit.</p>
                </div>

                <div className="single-type">
                    <img className='shop-type-icon' src={ticketIcon} alt="" />
                    <h2 className='shop-type-title'>Hello Mall</h2>
                    <p className='type-details'>Feugiat turpis eget nisi risus. Nullam convallis velit ullamcorper.</p>
                </div>

                <div className="single-type">
                    <img className='shop-type-icon' src={subtractIcon} alt="" />
                    <h2 className='shop-type-title'>Brands</h2>
                    <p className='type-details'>Montes, dictumst tristique est lectus egestas pharetra.</p>
                </div>
            </div>
        </div>
    );
};

export default ShoppingMalls;