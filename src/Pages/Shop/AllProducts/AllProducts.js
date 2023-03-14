import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AllProducts.css';
import expandIcon from '../../../assets/icons/expand.png';
import searchIcon from '../../../assets/icons/search.png';
import star from '../../../assets/icons/Star.png';
import starlight from '../../../assets/icons/starlight.png';
import heart from '../../../assets/icons/heart.png';
import banarasiProduct1 from '../../../assets/shop-page/category-product/banarasi/banarasi-product1.png';
import banarasiProduct2 from '../../../assets/shop-page/category-product/banarasi/banarasi-product2.png';
import banarasiProduct3 from '../../../assets/shop-page/category-product/banarasi/banarasi-product3.png';
import banarasiProduct4 from '../../../assets/shop-page/category-product/banarasi/banarasi-product4.png';
import banarasiProduct5 from '../../../assets/shop-page/category-product/banarasi/banarasi-product5.png';
import banarasiProduct6 from '../../../assets/shop-page/category-product/banarasi/banarasi-product6.png';
import banarasiProduct7 from '../../../assets/shop-page/category-product/banarasi/banarasi-product7.png';
import banarasiProduct8 from '../../../assets/shop-page/category-product/banarasi/banarasi-product8.png';
import bridalProduct1 from '../../../assets/shop-page/category-product/bridal/bridal-product1.png';
import bridalProduct2 from '../../../assets/shop-page/category-product/bridal/bridal-product2.png';
import bridalProduct3 from '../../../assets/shop-page/category-product/bridal/bridal-product3.png';
import bridalProduct4 from '../../../assets/shop-page/category-product/bridal/bridal-product4.png';
import bridalProduct5 from '../../../assets/shop-page/category-product/bridal/bridal-product5.png';
import bridalProduct6 from '../../../assets/shop-page/category-product/bridal/bridal-product6.png';
import bridalProduct7 from '../../../assets/shop-page/category-product/bridal/bridal-product7.png';
import bridalProduct8 from '../../../assets/shop-page/category-product/bridal/bridal-product8.png';
import handloomProduct1 from '../../../assets/shop-page/category-product/handloom/handloom-product1.png';
import handloomProduct2 from '../../../assets/shop-page/category-product/handloom/handloom-product2.png';

const AllProducts = () => {

    const [filter, setFilter] = useState(false);

    return (
        <div >

            <div className="filter-shops-container">
                <div className='filter-container'>
                    <div className='filter-title-container-mobile border-2 border-gray-400 px-1 rounded-t-md'>
                        <div onClick={() => setFilter(!filter)} className='flex justify-between '>
                            <h2 className='filter-title-mobile'>Sellers Pick</h2>
                            <img className='expand-icon mt-3' src={expandIcon} alt="" />
                        </div>
                    </div>
                    <h2 className='category-title'>Sellers Pick</h2>

                    <div className={`${!filter ? 'home-filter' : 'mobile-home-filter'}`}>
                        <div className='products-category'>

                            <Link to={''} className='category'>Saree</Link>
                            <Link to={''} className='category'>Jeans</Link>
                            <Link to={''} className='category'>Kameez</Link>
                            <Link to={''} className='category'>3 Piece</Link>
                            <Link to={''} className='category'>Salwar</Link>
                        </div>
                    </div>
                </div>

                <div className='shops-container'>
                    <h2 className='product-section-title'>Saree</h2>

                    <div className='search-box'>
                        <input className='input-search' type="text" placeholder='Search' />
                        <img className='search-btn' src={searchIcon} alt="" />
                    </div>

                    <div className="category-product-container">
                        <h2 className='category-product-title'>Banarasi Sharee</h2>

                        <div className="category-products">
                            <div className="product">
                                <img className='products-img' src={banarasiProduct1} alt="" />
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
                                <img className='products-img' src={banarasiProduct2} alt="" />
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
                                <img className='products-img' src={banarasiProduct3} alt="" />
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
                                <img className='products-img' src={banarasiProduct4} alt="" />
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
                                <img className='products-img' src={banarasiProduct5} alt="" />
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
                                <img className='products-img' src={banarasiProduct6} alt="" />
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
                                <img className='products-img' src={banarasiProduct7} alt="" />
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
                                <img className='products-img' src={banarasiProduct8} alt="" />
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

                        <div className='text-center'>
                            <button className='load-btn'>Load More</button>
                        </div>
                    </div>

                    <div className="category-product-container">
                        <h2 className='category-product-title'>Bridal Silk Sharee</h2>

                        <div className="category-products">
                            <div className="product">
                                <img className='products-img' src={bridalProduct1} alt="" />
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
                                <img className='products-img' src={bridalProduct2} alt="" />
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
                                <img className='products-img' src={bridalProduct3} alt="" />
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
                                <img className='products-img' src={bridalProduct4} alt="" />
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
                                <img className='products-img' src={bridalProduct5} alt="" />
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
                                <img className='products-img' src={bridalProduct6} alt="" />
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
                                <img className='products-img' src={bridalProduct7} alt="" />
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
                                <img className='products-img' src={bridalProduct8} alt="" />
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

                        <div className='text-center'>
                            <button className='load-btn'>Load More</button>
                        </div>
                    </div>


                    <div className="category-product-container">
                        <h2 className='category-product-title'>Handloom Silk</h2>

                        <div className="category-products">
                            <div className="product">
                                <img className='products-img' src={handloomProduct1} alt="" />
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
                                <img className='products-img' src={handloomProduct2} alt="" />
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
            </div>


        </div>
    );
};

export default AllProducts;