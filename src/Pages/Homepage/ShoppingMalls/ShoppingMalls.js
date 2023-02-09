import React, { useEffect, useState } from 'react';
import './ShoppingMalls.css'
import searchIcon from '../../../assets/icons/search.png';
import location2Icon from '../../../assets/icons/location2.png';
import sendIcon from '../../../assets/icons/Send.png';
import ticketIcon from '../../../assets/icons/Ticket.png';
import subtractIcon from '../../../assets/icons/Subtract.png';
import banner1 from '../../../assets/banner/banner1.png';
import banner2 from '../../../assets/banner/banner2.png';
import { Link } from 'react-router-dom';
import Carousel from "react-elastic-carousel";
import Loading from '../../Shared/Loading/Loading';
import { useQuery } from 'react-query';
import SingleMall from './SingleMall/SingleMall';


const ShoppingMalls = () => {

    const [malls, setShoppingMalls] = useState([]);
    const [isLoading, setLoading] = useState(true);

    // const { isLoading, error, data: malls } = useQuery('malls', () =>
    //     fetch('https://backend.dokanbhai.dokanbhai.com:3002/api/newshop').then(res =>
    //         res.json()
    //     )
    //         .then(data => console.log(data))
    // )

    useEffect(() => {
        fetch('https://backend.dokanbhai.dokanbhai.com:3002/api/newshop')
            .then(res => res.json())
            .then(data => {
                setShoppingMalls(data);
                // console.log('mall: ' + data)
                setLoading(false);
            })
    }, [])

    if (isLoading) {
        return <Loading></Loading>
    }


    console.log(malls);

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 768, itemsToShow: 1 },
        { width: 1200, itemsToShow: 1 },
    ];

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


                    {
                        malls.map(mall => <SingleMall
                            mall={mall}
                            key={mall._id}
                        ></SingleMall>)
                    }

                    {/* <div className='shop-container'>
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

                   */}
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
                <Carousel breakPoints={breakPoints}>
                    <img className='banner' src={banner1} alt="" />
                    <img className='banner' src={banner2} alt="" />
                </Carousel>

            </div>
            {/* <div className="slider">
                <div className="selected-option"></div>
                <div className="non-selected-option"></div>
                <div className="non-selected-option"></div>
                <div className="non-selected-option"></div>
                <div className="non-selected-option"></div>
                <div className="non-selected-option"></div>
            </div> */}

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