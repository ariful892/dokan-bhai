import React, { useState } from 'react';
import './ShopProducts.css';
import Carousel from "react-elastic-carousel";
import star from '../../../assets/icons/Star.png';
import starlight from '../../../assets/icons/starlight.png';
import heart from '../../../assets/icons/heart.png';
import searchIcon from '../../../assets/icons/search.png';
import flashProduct1 from '../../../assets/shop-page/flash/product1.png';
import flashProduct2 from '../../../assets/shop-page/flash/product2.png';
import flashProduct3 from '../../../assets/shop-page/flash/product3.png';
import flashProduct4 from '../../../assets/shop-page/flash/product4.png';
import flashProduct5 from '../../../assets/shop-page/flash/product5.png';
import viewedProduct1 from '../../../assets/shop-page/viewed/product1.png';
import viewedProduct2 from '../../../assets/shop-page/viewed/product2.png';
import viewedProduct3 from '../../../assets/shop-page/viewed/product3.png';
import viewedProduct4 from '../../../assets/shop-page/viewed/product4.png';
import viewedProduct5 from '../../../assets/shop-page/viewed/product4.png';
import vouchersProduct from '../../../assets/shop-page/vouchers.png';
import featured1 from '../../../assets/shop-page/featured/featured1.png';
import featured2 from '../../../assets/shop-page/featured/featured2.png';
import featured3 from '../../../assets/shop-page/featured/featured3.png';
import featuredProduct1 from '../../../assets/shop-page/featured/product1.png';
import featuredProduct2 from '../../../assets/shop-page/featured/product2.png';
import featuredProduct3 from '../../../assets/shop-page/featured/product3.png';
import featuredProduct4 from '../../../assets/shop-page/featured/product4.png';
import featuredProduct5 from '../../../assets/shop-page/featured/product5.png';
import featuredProduct6 from '../../../assets/shop-page/featured/product6.png';
import featuredProduct7 from '../../../assets/shop-page/featured/product7.png';
import featuredProduct8 from '../../../assets/shop-page/featured/product8.png';
import featuredProduct9 from '../../../assets/shop-page/featured/product9.png';
import featuredProduct10 from '../../../assets/shop-page/featured/product10.png';
import featuredProduct11 from '../../../assets/shop-page/featured/product11.png';
import featuredProduct12 from '../../../assets/shop-page/featured/product12.png';
import forYouProduct1 from '../../../assets/shop-page/for-you/product1.png';
import forYouProduct2 from '../../../assets/shop-page/for-you/product2.png';
import forYouProduct3 from '../../../assets/shop-page/for-you/product3.png';
import forYouProduct4 from '../../../assets/shop-page/for-you/product4.png';
import forYouProduct5 from '../../../assets/shop-page/for-you/product5.png';
import forYouProduct6 from '../../../assets/shop-page/for-you/product6.png';
import forYouProduct7 from '../../../assets/shop-page/for-you/product7.png';
import forYouProduct8 from '../../../assets/shop-page/for-you/product8.png';

const ShopProducts = () => {


    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 390, itemsToShow: 2 },
        { width: 650, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
    ];

    return (
        <div className='shop-products-container'>
            <div className='lg:flex md:flex items-center'>
                <h2 className='product-section-title'>Flash Sale</h2>

                <div className='flex items-center'>
                    <div className="duration">
                        <h2 className='duration-title'>Ending in</h2>
                    </div>

                    <div className="flex">
                        <p className='time-value'>01</p>
                        <p className='time-divider'>:</p>
                        <p className='time-value'>10</p>
                        <p className='time-divider'>:</p>
                        <p className='time-value'>10</p>
                    </div>
                </div>
            </div>

            <div className="products-container">
                <div className="products">
                    <div className="product">
                        <img className='products-img' src={flashProduct1} alt="" />
                        <div className="product-detail-info">
                            <h2 className='products-name'>Screenprint Handwork</h2>
                            <p className='products-type'>Half Silk</p>

                            <div className="rating-container">
                                <img className='rating' src={star} alt="" />
                                <img className='rating' src={star} alt="" />
                                <img className='rating' src={star} alt="" />
                                <img className='rating' src={starlight} alt="" />
                                <img className='rating' src={starlight} alt="" />
                                <span className='ratings-value'>(5)</span>
                                <img className='heart' src={heart} alt="" />
                            </div>
                            <p className='products-price'>Tk 2000</p>
                        </div>
                        <div className='text-center'>
                            <button className='add-cart-btn'>Add to Cart</button>
                        </div>
                    </div>

                    <div className="product">
                        <img className='products-img' src={flashProduct2} alt="" />
                        <div className="product-detail-info">
                            <h2 className='products-name'>Screenprint Handwork</h2>
                            <p className='products-type'>Half Silk</p>

                            <div className="rating-container">
                                <img className='rating' src={star} alt="" />
                                <img className='rating' src={star} alt="" />
                                <img className='rating' src={star} alt="" />
                                <img className='rating' src={starlight} alt="" />
                                <img className='rating' src={starlight} alt="" />
                                <span className='ratings-value'>(5)</span>
                                <img className='heart' src={heart} alt="" />
                            </div>
                            <p className='products-price'>Tk 2000</p>
                        </div>
                        <div className='text-center'>
                            <button className='add-cart-btn'>Add to Cart</button>
                        </div>
                    </div>

                    <div className="product">
                        <img className='products-img' src={flashProduct3} alt="" />
                        <div className="product-detail-info">
                            <h2 className='products-name'>Screenprint Handwork</h2>
                            <p className='products-type'>Half Silk</p>

                            <div className="rating-container">
                                <img className='rating' src={star} alt="" />
                                <img className='rating' src={star} alt="" />
                                <img className='rating' src={star} alt="" />
                                <img className='rating' src={starlight} alt="" />
                                <img className='rating' src={starlight} alt="" />
                                <span className='ratings-value'>(5)</span>
                                <img className='heart' src={heart} alt="" />
                            </div>
                            <p className='products-price'>Tk 2000</p>
                        </div>
                        <div className='text-center'>
                            <button className='add-cart-btn'>Add to Cart</button>
                        </div>
                    </div>

                    <div className="product">
                        <img className='products-img' src={flashProduct4} alt="" />
                        <div className="product-detail-info">
                            <h2 className='products-name'>Screenprint Handwork</h2>
                            <p className='products-type'>Half Silk</p>

                            <div className="rating-container">
                                <img className='rating' src={star} alt="" />
                                <img className='rating' src={star} alt="" />
                                <img className='rating' src={star} alt="" />
                                <img className='rating' src={starlight} alt="" />
                                <img className='rating' src={starlight} alt="" />
                                <span className='ratings-value'>(5)</span>
                                <img className='heart' src={heart} alt="" />
                            </div>
                            <p className='products-price'>Tk 2000</p>
                        </div>
                        <div className='text-center'>
                            <button className='add-cart-btn'>Add to Cart</button>
                        </div>
                    </div>

                    <div className="product">
                        <img className='products-img' src={flashProduct5} alt="" />
                        <div className="product-detail-info">
                            <h2 className='products-name'>Screenprint Handwork</h2>
                            <p className='products-type'>Half Silk</p>

                            <div className="rating-container">
                                <img className='rating' src={star} alt="" />
                                <img className='rating' src={star} alt="" />
                                <img className='rating' src={star} alt="" />
                                <img className='rating' src={starlight} alt="" />
                                <img className='rating' src={starlight} alt="" />
                                <span className='ratings-value'>(5)</span>
                                <img className='heart' src={heart} alt="" />
                            </div>
                            <p className='products-price'>Tk 2000</p>
                        </div>
                        <div className='text-center'>
                            <button className='add-cart-btn'>Add to Cart</button>
                        </div>
                    </div>
                </div>

                <h2 className='product-section-title'>Most Viewed</h2>
                <div className="products">
                    <div className="product">
                        <img className='products-img' src={viewedProduct1} alt="" />
                        <div className="product-detail-info">
                            <h2 className='products-name'>Screenprint Handwork</h2>
                            <p className='products-type'>Half Silk</p>

                            <div className="rating-container">
                                <img className='rating' src={star} alt="" />
                                <img className='rating' src={star} alt="" />
                                <img className='rating' src={star} alt="" />
                                <img className='rating' src={starlight} alt="" />
                                <img className='rating' src={starlight} alt="" />
                                <span className='ratings-value'>(5)</span>
                                <img className='heart' src={heart} alt="" />
                            </div>
                            <p className='products-price'>Tk 2000</p>
                        </div>
                        <div className='text-center'>
                            <button className='add-cart-btn'>Add to Cart</button>
                        </div>
                    </div>

                    <div className="product">
                        <img className='products-img' src={viewedProduct2} alt="" />
                        <div className="product-detail-info">
                            <h2 className='products-name'>Screenprint Handwork</h2>
                            <p className='products-type'>Half Silk</p>

                            <div className="rating-container">
                                <img className='rating' src={star} alt="" />
                                <img className='rating' src={star} alt="" />
                                <img className='rating' src={star} alt="" />
                                <img className='rating' src={starlight} alt="" />
                                <img className='rating' src={starlight} alt="" />
                                <span className='ratings-value'>(5)</span>
                                <img className='heart' src={heart} alt="" />
                            </div>
                            <p className='products-price'>Tk 2000</p>
                        </div>
                        <div className='text-center'>
                            <button className='add-cart-btn'>Add to Cart</button>
                        </div>
                    </div>

                    <div className="product">
                        <img className='products-img' src={viewedProduct3} alt="" />
                        <div className="product-detail-info">
                            <h2 className='products-name'>Screenprint Handwork</h2>
                            <p className='products-type'>Half Silk</p>

                            <div className="rating-container">
                                <img className='rating' src={star} alt="" />
                                <img className='rating' src={star} alt="" />
                                <img className='rating' src={star} alt="" />
                                <img className='rating' src={starlight} alt="" />
                                <img className='rating' src={starlight} alt="" />
                                <span className='ratings-value'>(5)</span>
                                <img className='heart' src={heart} alt="" />
                            </div>
                            <p className='products-price'>Tk 2000</p>
                        </div>
                        <div className='text-center'>
                            <button className='add-cart-btn'>Add to Cart</button>
                        </div>
                    </div>

                    <div className="product">
                        <img className='products-img' src={viewedProduct4} alt="" />
                        <div className="product-detail-info">
                            <h2 className='products-name'>Screenprint Handwork</h2>
                            <p className='products-type'>Half Silk</p>

                            <div className="rating-container">
                                <img className='rating' src={star} alt="" />
                                <img className='rating' src={star} alt="" />
                                <img className='rating' src={star} alt="" />
                                <img className='rating' src={starlight} alt="" />
                                <img className='rating' src={starlight} alt="" />
                                <span className='ratings-value'>(5)</span>
                                <img className='heart' src={heart} alt="" />
                            </div>
                            <p className='products-price'>Tk 2000</p>
                        </div>
                        <div className='text-center'>
                            <button className='add-cart-btn'>Add to Cart</button>
                        </div>
                    </div>

                    <div className="product">
                        <img className='products-img' src={viewedProduct5} alt="" />
                        <div className="product-detail-info">
                            <h2 className='products-name'>Screenprint Handwork</h2>
                            <p className='products-type'>Half Silk</p>

                            <div className="rating-container">
                                <img className='rating' src={star} alt="" />
                                <img className='rating' src={star} alt="" />
                                <img className='rating' src={star} alt="" />
                                <img className='rating' src={starlight} alt="" />
                                <img className='rating' src={starlight} alt="" />
                                <span className='ratings-value'>(5)</span>
                                <img className='heart' src={heart} alt="" />
                            </div>
                            <p className='products-price'>Tk 2000</p>
                        </div>
                        <div className='text-center'>
                            <button className='add-cart-btn'>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="vouchers-product">
                <h2 className='product-section-title'>Vouchers</h2>
                <div className='w-full flex '>
                    <div className="products">
                        <div className="product">
                            <img className='products-img' src={vouchersProduct} alt="" />
                            <div className="product-detail-info">
                                <h2 className='products-name'>Screenprint Handwork</h2>
                                <p className='products-type'>Half Silk</p>

                                <div className="rating-container">
                                    <img className='rating' src={star} alt="" />
                                    <img className='rating' src={star} alt="" />
                                    <img className='rating' src={star} alt="" />
                                    <img className='rating' src={starlight} alt="" />
                                    <img className='rating' src={starlight} alt="" />
                                    <span className='ratings-value'>(5)</span>
                                    <img className='heart' src={heart} alt="" />
                                </div>
                                <p className='products-price'>Tk 2000</p>
                            </div>
                            <div className='text-center'>
                                <button className='add-cart-btn'>Add to Cart</button>
                            </div>
                        </div>

                        <div className="product">
                            <img className='products-img' src={vouchersProduct} alt="" />
                            <div className="product-detail-info">
                                <h2 className='products-name'>Screenprint Handwork</h2>
                                <p className='products-type'>Half Silk</p>

                                <div className="rating-container">
                                    <img className='rating' src={star} alt="" />
                                    <img className='rating' src={star} alt="" />
                                    <img className='rating' src={star} alt="" />
                                    <img className='rating' src={starlight} alt="" />
                                    <img className='rating' src={starlight} alt="" />
                                    <span className='ratings-value'>(5)</span>
                                    <img className='heart' src={heart} alt="" />
                                </div>
                                <p className='products-price'>Tk 2000</p>
                            </div>
                            <div className='text-center'>
                                <button className='add-cart-btn'>Add to Cart</button>
                            </div>
                        </div>

                        <div className="product">
                            <img className='products-img' src={vouchersProduct} alt="" />
                            <div className="product-detail-info">
                                <h2 className='products-name'>Screenprint Handwork</h2>
                                <p className='products-type'>Half Silk</p>

                                <div className="rating-container">
                                    <img className='rating' src={star} alt="" />
                                    <img className='rating' src={star} alt="" />
                                    <img className='rating' src={star} alt="" />
                                    <img className='rating' src={starlight} alt="" />
                                    <img className='rating' src={starlight} alt="" />
                                    <span className='ratings-value'>(5)</span>
                                    <img className='heart' src={heart} alt="" />
                                </div>
                                <p className='products-price'>Tk 2000</p>
                            </div>
                            <div className='text-center'>
                                <button className='add-cart-btn'>Add to Cart</button>
                            </div>
                        </div>

                        <div className="product">
                            <img className='products-img' src={vouchersProduct} alt="" />
                            <div className="product-detail-info">
                                <h2 className='products-name'>Screenprint Handwork</h2>
                                <p className='products-type'>Half Silk</p>

                                <div className="rating-container">
                                    <img className='rating' src={star} alt="" />
                                    <img className='rating' src={star} alt="" />
                                    <img className='rating' src={star} alt="" />
                                    <img className='rating' src={starlight} alt="" />
                                    <img className='rating' src={starlight} alt="" />
                                    <span className='ratings-value'>(5)</span>
                                    <img className='heart' src={heart} alt="" />
                                </div>
                                <p className='products-price'>Tk 2000</p>
                            </div>
                            <div className='text-center'>
                                <button className='add-cart-btn'>Add to Cart</button>
                            </div>
                        </div>

                        <div className="product">
                            <img className='products-img' src={vouchersProduct} alt="" />
                            <div className="product-detail-info">
                                <h2 className='products-name'>Screenprint Handwork</h2>
                                <p className='products-type'>Half Silk</p>

                                <div className="rating-container">
                                    <img className='rating' src={star} alt="" />
                                    <img className='rating' src={star} alt="" />
                                    <img className='rating' src={star} alt="" />
                                    <img className='rating' src={starlight} alt="" />
                                    <img className='rating' src={starlight} alt="" />
                                    <span className='ratings-value'>(5)</span>
                                    <img className='heart' src={heart} alt="" />
                                </div>
                                <p className='products-price'>Tk 2000</p>
                            </div>
                            <div className='text-center'>
                                <button className='add-cart-btn'>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="featured-products">
                <h2 className='product-section-title'>Featured Catagory</h2>

                <div className="products-row">
                    <div className="">
                        <img className='featured-img' src={featured1} alt="" />
                    </div>

                    <Carousel breakPoints={breakPoints}>
                        <div className="product">
                            <img className='products-img' src={featuredProduct1} alt="" />
                            <div className="product-detail-info">
                                <h2 className='products-name'>Screenprint Handwork</h2>
                                <p className='products-type'>Half Silk</p>

                                <div className="rating-container">
                                    <img className='rating' src={star} alt="" />
                                    <img className='rating' src={star} alt="" />
                                    <img className='rating' src={star} alt="" />
                                    <img className='rating' src={starlight} alt="" />
                                    <img className='rating' src={starlight} alt="" />
                                    <span className='ratings-value'>(5)</span>
                                    <img className='heart' src={heart} alt="" />
                                </div>
                                <p className='products-price'>Tk 2000</p>
                            </div>
                            <div className='text-center'>
                                <button className='add-cart-btn'>Add to Cart</button>
                            </div>
                        </div>

                        <div className="product">
                            <img className='products-img' src={featuredProduct2} alt="" />
                            <div className="product-detail-info">
                                <h2 className='products-name'>Screenprint Handwork</h2>
                                <p className='products-type'>Half Silk</p>

                                <div className="rating-container">
                                    <img className='rating' src={star} alt="" />
                                    <img className='rating' src={star} alt="" />
                                    <img className='rating' src={star} alt="" />
                                    <img className='rating' src={starlight} alt="" />
                                    <img className='rating' src={starlight} alt="" />
                                    <span className='ratings-value'>(5)</span>
                                    <img className='heart' src={heart} alt="" />
                                </div>
                                <p className='products-price'>Tk 2000</p>
                            </div>
                            <div className='text-center'>
                                <button className='add-cart-btn'>Add to Cart</button>
                            </div>
                        </div>

                        <div className="product">
                            <img className='products-img' src={featuredProduct3} alt="" />
                            <div className="product-detail-info">
                                <h2 className='products-name'>Screenprint Handwork</h2>
                                <p className='products-type'>Half Silk</p>

                                <div className="rating-container">
                                    <img className='rating' src={star} alt="" />
                                    <img className='rating' src={star} alt="" />
                                    <img className='rating' src={star} alt="" />
                                    <img className='rating' src={starlight} alt="" />
                                    <img className='rating' src={starlight} alt="" />
                                    <span className='ratings-value'>(5)</span>
                                    <img className='heart' src={heart} alt="" />
                                </div>
                                <p className='products-price'>Tk 2000</p>
                            </div>
                            <div className='text-center'>
                                <button className='add-cart-btn'>Add to Cart</button>
                            </div>
                        </div>

                        <div className="product">
                            <img className='products-img' src={featuredProduct4} alt="" />
                            <div className="product-detail-info">
                                <h2 className='products-name'>Screenprint Handwork</h2>
                                <p className='products-type'>Half Silk</p>

                                <div className="rating-container">
                                    <img className='rating' src={star} alt="" />
                                    <img className='rating' src={star} alt="" />
                                    <img className='rating' src={star} alt="" />
                                    <img className='rating' src={starlight} alt="" />
                                    <img className='rating' src={starlight} alt="" />
                                    <span className='ratings-value'>(5)</span>
                                    <img className='heart' src={heart} alt="" />
                                </div>
                                <p className='products-price'>Tk 2000</p>
                            </div>
                            <div className='text-center'>
                                <button className='add-cart-btn'>Add to Cart</button>
                            </div>
                        </div>
                    </Carousel>



                </div>

                <div className="products-row">
                    <div className="">
                        <img className='featured-img' src={featured2} alt="" />
                    </div>

                    <Carousel breakPoints={breakPoints}>
                        <div className="product">
                            <img className='products-img' src={featuredProduct5} alt="" />
                            <div className="product-detail-info">
                                <h2 className='products-name'>Screenprint Handwork</h2>
                                <p className='products-type'>Half Silk</p>

                                <div className="rating-container">
                                    <img className='rating' src={star} alt="" />
                                    <img className='rating' src={star} alt="" />
                                    <img className='rating' src={star} alt="" />
                                    <img className='rating' src={starlight} alt="" />
                                    <img className='rating' src={starlight} alt="" />
                                    <span className='ratings-value'>(5)</span>
                                    <img className='heart' src={heart} alt="" />
                                </div>
                                <p className='products-price'>Tk 2000</p>
                            </div>
                            <div className='text-center'>
                                <button className='add-cart-btn'>Add to Cart</button>
                            </div>
                        </div>

                        <div className="product">
                            <img className='products-img' src={featuredProduct6} alt="" />
                            <div className="product-detail-info">
                                <h2 className='products-name'>Screenprint Handwork</h2>
                                <p className='products-type'>Half Silk</p>

                                <div className="rating-container">
                                    <img className='rating' src={star} alt="" />
                                    <img className='rating' src={star} alt="" />
                                    <img className='rating' src={star} alt="" />
                                    <img className='rating' src={starlight} alt="" />
                                    <img className='rating' src={starlight} alt="" />
                                    <span className='ratings-value'>(5)</span>
                                    <img className='heart' src={heart} alt="" />
                                </div>
                                <p className='products-price'>Tk 2000</p>
                            </div>
                            <div className='text-center'>
                                <button className='add-cart-btn'>Add to Cart</button>
                            </div>
                        </div>

                        <div className="product">
                            <img className='products-img' src={featuredProduct7} alt="" />
                            <div className="product-detail-info">
                                <h2 className='products-name'>Screenprint Handwork</h2>
                                <p className='products-type'>Half Silk</p>

                                <div className="rating-container">
                                    <img className='rating' src={star} alt="" />
                                    <img className='rating' src={star} alt="" />
                                    <img className='rating' src={star} alt="" />
                                    <img className='rating' src={starlight} alt="" />
                                    <img className='rating' src={starlight} alt="" />
                                    <span className='ratings-value'>(5)</span>
                                    <img className='heart' src={heart} alt="" />
                                </div>
                                <p className='products-price'>Tk 2000</p>
                            </div>
                            <div className='text-center'>
                                <button className='add-cart-btn'>Add to Cart</button>
                            </div>
                        </div>

                        <div className="product">
                            <img className='products-img' src={featuredProduct8} alt="" />
                            <div className="product-detail-info">
                                <h2 className='products-name'>Screenprint Handwork</h2>
                                <p className='products-type'>Half Silk</p>

                                <div className="rating-container">
                                    <img className='rating' src={star} alt="" />
                                    <img className='rating' src={star} alt="" />
                                    <img className='rating' src={star} alt="" />
                                    <img className='rating' src={starlight} alt="" />
                                    <img className='rating' src={starlight} alt="" />
                                    <span className='ratings-value'>(5)</span>
                                    <img className='heart' src={heart} alt="" />
                                </div>
                                <p className='products-price'>Tk 2000</p>
                            </div>
                            <div className='text-center'>
                                <button className='add-cart-btn'>Add to Cart</button>
                            </div>
                        </div>
                    </Carousel>



                </div>

                <div className="products-row">
                    <div className="">
                        <img className='featured-img' src={featured3} alt="" />
                    </div>

                    <Carousel breakPoints={breakPoints}>
                        <div className="product">
                            <img className='products-img' src={featuredProduct9} alt="" />
                            <div className="product-detail-info">
                                <h2 className='products-name'>Screenprint Handwork</h2>
                                <p className='products-type'>Half Silk</p>

                                <div className="rating-container">
                                    <img className='rating' src={star} alt="" />
                                    <img className='rating' src={star} alt="" />
                                    <img className='rating' src={star} alt="" />
                                    <img className='rating' src={starlight} alt="" />
                                    <img className='rating' src={starlight} alt="" />
                                    <span className='ratings-value'>(5)</span>
                                    <img className='heart' src={heart} alt="" />
                                </div>
                                <p className='products-price'>Tk 2000</p>
                            </div>
                            <div className='text-center'>
                                <button className='add-cart-btn'>Add to Cart</button>
                            </div>
                        </div>

                        <div className="product">
                            <img className='products-img' src={featuredProduct10} alt="" />
                            <div className="product-detail-info">
                                <h2 className='products-name'>Screenprint Handwork</h2>
                                <p className='products-type'>Half Silk</p>

                                <div className="rating-container">
                                    <img className='rating' src={star} alt="" />
                                    <img className='rating' src={star} alt="" />
                                    <img className='rating' src={star} alt="" />
                                    <img className='rating' src={starlight} alt="" />
                                    <img className='rating' src={starlight} alt="" />
                                    <span className='ratings-value'>(5)</span>
                                    <img className='heart' src={heart} alt="" />
                                </div>
                                <p className='products-price'>Tk 2000</p>
                            </div>
                            <div className='text-center'>
                                <button className='add-cart-btn'>Add to Cart</button>
                            </div>
                        </div>

                        <div className="product">
                            <img className='products-img' src={featuredProduct11} alt="" />
                            <div className="product-detail-info">
                                <h2 className='products-name'>Screenprint Handwork</h2>
                                <p className='products-type'>Half Silk</p>

                                <div className="rating-container">
                                    <img className='rating' src={star} alt="" />
                                    <img className='rating' src={star} alt="" />
                                    <img className='rating' src={star} alt="" />
                                    <img className='rating' src={starlight} alt="" />
                                    <img className='rating' src={starlight} alt="" />
                                    <span className='ratings-value'>(5)</span>
                                    <img className='heart' src={heart} alt="" />
                                </div>
                                <p className='products-price'>Tk 2000</p>
                            </div>
                            <div className='text-center'>
                                <button className='add-cart-btn'>Add to Cart</button>
                            </div>
                        </div>

                        <div className="product">
                            <img className='products-img' src={featuredProduct12} alt="" />
                            <div className="product-detail-info">
                                <h2 className='products-name'>Screenprint Handwork</h2>
                                <p className='products-type'>Half Silk</p>

                                <div className="rating-container">
                                    <img className='rating' src={star} alt="" />
                                    <img className='rating' src={star} alt="" />
                                    <img className='rating' src={star} alt="" />
                                    <img className='rating' src={starlight} alt="" />
                                    <img className='rating' src={starlight} alt="" />
                                    <span className='ratings-value'>(5)</span>
                                    <img className='heart' src={heart} alt="" />
                                </div>
                                <p className='products-price'>Tk 2000</p>
                            </div>
                            <div className='text-center'>
                                <button className='add-cart-btn'>Add to Cart</button>
                            </div>
                        </div>

                    </Carousel>


                </div>
            </div>

            <div >
                <h2 className='product-section-title'>Products for you</h2>

                <div className='w-full flex '>
                    <div className="for-you-product">
                        <div className="product">
                            <img className='products-img' src={forYouProduct1} alt="" />
                            <div className="product-detail-info">
                                <h2 className='products-name'>Screenprint Handwork</h2>
                                <p className='products-type'>Half Silk</p>

                                <div className="rating-container">
                                    <img className='rating' src={star} alt="" />
                                    <img className='rating' src={star} alt="" />
                                    <img className='rating' src={star} alt="" />
                                    <img className='rating' src={starlight} alt="" />
                                    <img className='rating' src={starlight} alt="" />
                                    <span className='ratings-value'>(5)</span>
                                    <img className='heart' src={heart} alt="" />
                                </div>
                                <p className='products-price'>Tk 2000</p>
                            </div>
                            <div className='text-center'>
                                <button className='add-cart-btn'>Add to Cart</button>
                            </div>
                        </div>

                        <div className="product">
                            <img className='products-img' src={forYouProduct2} alt="" />
                            <div className="product-detail-info">
                                <h2 className='products-name'>Screenprint Handwork</h2>
                                <p className='products-type'>Half Silk</p>

                                <div className="rating-container">
                                    <img className='rating' src={star} alt="" />
                                    <img className='rating' src={star} alt="" />
                                    <img className='rating' src={star} alt="" />
                                    <img className='rating' src={starlight} alt="" />
                                    <img className='rating' src={starlight} alt="" />
                                    <span className='ratings-value'>(5)</span>
                                    <img className='heart' src={heart} alt="" />
                                </div>
                                <p className='products-price'>Tk 2000</p>
                            </div>
                            <div className='text-center'>
                                <button className='add-cart-btn'>Add to Cart</button>
                            </div>
                        </div>

                        <div className="product">
                            <img className='products-img' src={forYouProduct3} alt="" />
                            <div className="product-detail-info">
                                <h2 className='products-name'>Screenprint Handwork</h2>
                                <p className='products-type'>Half Silk</p>

                                <div className="rating-container">
                                    <img className='rating' src={star} alt="" />
                                    <img className='rating' src={star} alt="" />
                                    <img className='rating' src={star} alt="" />
                                    <img className='rating' src={starlight} alt="" />
                                    <img className='rating' src={starlight} alt="" />
                                    <span className='ratings-value'>(5)</span>
                                    <img className='heart' src={heart} alt="" />
                                </div>
                                <p className='products-price'>Tk 2000</p>
                            </div>
                            <div className='text-center'>
                                <button className='add-cart-btn'>Add to Cart</button>
                            </div>
                        </div>

                        <div className="product">
                            <img className='products-img' src={forYouProduct4} alt="" />
                            <div className="product-detail-info">
                                <h2 className='products-name'>Screenprint Handwork</h2>
                                <p className='products-type'>Half Silk</p>

                                <div className="rating-container">
                                    <img className='rating' src={star} alt="" />
                                    <img className='rating' src={star} alt="" />
                                    <img className='rating' src={star} alt="" />
                                    <img className='rating' src={starlight} alt="" />
                                    <img className='rating' src={starlight} alt="" />
                                    <span className='ratings-value'>(5)</span>
                                    <img className='heart' src={heart} alt="" />
                                </div>
                                <p className='products-price'>Tk 2000</p>
                            </div>
                            <div className='text-center'>
                                <button className='add-cart-btn'>Add to Cart</button>
                            </div>
                        </div>

                        <div className="product">
                            <img className='products-img' src={forYouProduct5} alt="" />
                            <div className="product-detail-info">
                                <h2 className='products-name'>Screenprint Handwork</h2>
                                <p className='products-type'>Half Silk</p>

                                <div className="rating-container">
                                    <img className='rating' src={star} alt="" />
                                    <img className='rating' src={star} alt="" />
                                    <img className='rating' src={star} alt="" />
                                    <img className='rating' src={starlight} alt="" />
                                    <img className='rating' src={starlight} alt="" />
                                    <span className='ratings-value'>(5)</span>
                                    <img className='heart' src={heart} alt="" />
                                </div>
                                <p className='products-price'>Tk 2000</p>
                            </div>
                            <div className='text-center'>
                                <button className='add-cart-btn'>Add to Cart</button>
                            </div>
                        </div>

                        <div className="product">
                            <img className='products-img' src={forYouProduct6} alt="" />
                            <div className="product-detail-info">
                                <h2 className='products-name'>Screenprint Handwork</h2>
                                <p className='products-type'>Half Silk</p>

                                <div className="rating-container">
                                    <img className='rating' src={star} alt="" />
                                    <img className='rating' src={star} alt="" />
                                    <img className='rating' src={star} alt="" />
                                    <img className='rating' src={starlight} alt="" />
                                    <img className='rating' src={starlight} alt="" />
                                    <span className='ratings-value'>(5)</span>
                                    <img className='heart' src={heart} alt="" />
                                </div>
                                <p className='products-price'>Tk 2000</p>
                            </div>
                            <div className='text-center'>
                                <button className='add-cart-btn'>Add to Cart</button>
                            </div>
                        </div>

                        <div className="product">
                            <img className='products-img' src={forYouProduct7} alt="" />
                            <div className="product-detail-info">
                                <h2 className='products-name'>Screenprint Handwork</h2>
                                <p className='products-type'>Half Silk</p>

                                <div className="rating-container">
                                    <img className='rating' src={star} alt="" />
                                    <img className='rating' src={star} alt="" />
                                    <img className='rating' src={star} alt="" />
                                    <img className='rating' src={starlight} alt="" />
                                    <img className='rating' src={starlight} alt="" />
                                    <span className='ratings-value'>(5)</span>
                                    <img className='heart' src={heart} alt="" />
                                </div>
                                <p className='products-price'>Tk 2000</p>
                            </div>
                            <div className='text-center'>
                                <button className='add-cart-btn'>Add to Cart</button>
                            </div>
                        </div>
                        <div className="product">
                            <img className='products-img' src={forYouProduct8} alt="" />
                            <div className="product-detail-info">
                                <h2 className='products-name'>Screenprint Handwork</h2>
                                <p className='products-type'>Half Silk</p>

                                <div className="rating-container">
                                    <img className='rating' src={star} alt="" />
                                    <img className='rating' src={star} alt="" />
                                    <img className='rating' src={star} alt="" />
                                    <img className='rating' src={starlight} alt="" />
                                    <img className='rating' src={starlight} alt="" />
                                    <span className='ratings-value'>(5)</span>
                                    <img className='heart' src={heart} alt="" />
                                </div>
                                <p className='products-price'>Tk 2000</p>
                            </div>
                            <div className='text-center'>
                                <button className='add-cart-btn'>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='text-center'>
                    <button className='load-btn'>Load More</button>
                </div>

                <div className='search-box mt-5'>
                    <input className='input-search' type="text" placeholder='Search' />
                    <img className='search-btn' src={searchIcon} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ShopProducts;