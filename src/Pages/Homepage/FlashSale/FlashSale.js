import React from 'react';
import './FlashSale.css'
import Carousel from "react-elastic-carousel";
import product1 from '../../../assets/flash-sale/flash1.png';
import product2 from '../../../assets/flash-sale/flash2.png';
import product3 from '../../../assets/flash-sale/flash3.png';
import product4 from '../../../assets/flash-sale/flash4.png';
import product5 from '../../../assets/flash-sale/flash5.png';
import product6 from '../../../assets/flash-sale/flash6.png';

const FlashSale = () => {

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1080, itemsToShow: 4 },
        { width: 1200, itemsToShow: 4 },
    ];

    return (
        <div className='flashsale-container'>
            <div className='md:flex lg:flex items-center'>
                <h2 className='section-title'>Flash Sale</h2>

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

            {/* <div className="flash-products"> */}

            <div className='mt-3 lg:mt-0 md:mt-0'>
                <Carousel breakPoints={breakPoints}>
                    <div className="single-product">
                        <div className='img-container'>
                            <img className='product-img' src={product1} alt="" />
                        </div>
                        <div className="product-details">
                            <p className='product-name'>Remote Control Car</p>
                            <p className='product-type'>Toy</p>
                            <h2 className='product-price'>$1200</h2>
                        </div>

                    </div>

                    <div className="single-product">
                        <div className='img-container'>
                            <img className='product-img' src={product2} alt="" />
                        </div>
                        <div className="product-details">
                            <p className='product-name'>5 Hole 1 Pc Cable Organizer Magnetic...</p>
                            <p className='product-type'>Cable</p>
                            <h2 className='product-price'>$120</h2>
                        </div>

                    </div>

                    <div className="single-product">
                        <div className='img-container'>
                            <img className='product-img' src={product3} alt="" />
                        </div>
                        <div className="product-details">
                            <p className='product-name'>Stray dog plush toys for kids gift</p>
                            <p className='product-type'>Toy</p>
                            <h2 className='product-price'>$650</h2>
                        </div>

                    </div>

                    <div className="single-product">
                        <div className='img-container'>
                            <img className='product-img' src={product4} alt="" />
                        </div>
                        <div className="product-details">
                            <p className='product-name'>Glass Bowl Multiple Purpose</p>
                            <p className='product-type'>Kitchen</p>
                            <h2 className='product-price'>$430</h2>
                        </div>

                    </div>

                    <div className="single-product">
                        <div className='img-container'>
                            <img className='product-img' src={product5} alt="" />
                        </div>
                        <div className="product-details">
                            <p className='product-name'>Peanut Badam 500gm</p>
                            <p className='product-type'>Peanut</p>
                            <h2 className='product-price'>$185</h2>
                        </div>

                    </div>

                    <div className="single-product">
                        <div className='img-container'>
                            <img className='product-img' src={product6} alt="" />
                        </div>
                        <div className="product-details">
                            <p className='product-name'>Single Wooden Chair White</p>
                            <p className='product-type'>Chair</p>
                            <h2 className='product-price'>$4000</h2>
                        </div>

                    </div>
                </Carousel>
            </div>


            {/* </div> */}
        </div>
    );
};

export default FlashSale;