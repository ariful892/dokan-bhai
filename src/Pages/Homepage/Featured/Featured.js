import React from 'react';
import './Featured.css'
import tech1 from '../../../assets/featured/tech/tech1.png';
import tech2 from '../../../assets/featured/tech/tech2.png';
import tech3 from '../../../assets/featured/tech/tech3.png';
import jewelry1 from '../../../assets/featured/jewelry/jewelry1.png';
import jewelry2 from '../../../assets/featured/jewelry/jewelry2.png';
import jewelry3 from '../../../assets/featured/jewelry/jewelry3.png';
import accessories1 from '../../../assets/featured/accessories/accessories1.png';
import accessories2 from '../../../assets/featured/accessories/accessories2.png';
import accessories3 from '../../../assets/featured/accessories/accessories3.png';
import electric1 from '../../../assets/featured/electric/electric1.png';
import electric2 from '../../../assets/featured/electric/electric2.png';
import electric3 from '../../../assets/featured/electric/electric3.png';
import mobile1 from '../../../assets/featured/mobile/mobile1.png';
import mobile2 from '../../../assets/featured/mobile/mobile2.png';
import mobile3 from '../../../assets/featured/mobile/mobile3.png';
import cloth1 from '../../../assets/featured/cloth/cloth1.png';
import cloth2 from '../../../assets/featured/cloth/cloth2.png';
import cloth3 from '../../../assets/featured/cloth/cloth3.png';

const Featured = () => {
    return (
        <div className='featured-container'>
            <h2 className='section-title'>Featured Categories</h2>

            <div className="featured-products-container">
                <div className="featured-product">
                    <h2 className='categories-name'>Tech</h2>
                    <div className="product-images">
                        <img className='product-image' src={tech1} alt="" />
                        <img className='product-image' src={tech2} alt="" />
                        <img className='product-image' src={tech3} alt="" />
                    </div>
                </div>

                <div className="featured-product">
                    <h2 className='categories-name'>Jewelry</h2>
                    <div className="product-images">
                        <img className='product-image' src={jewelry1} alt="" />
                        <img className='product-image' src={jewelry2} alt="" />
                        <img className='product-image' src={jewelry3} alt="" />
                    </div>
                </div>
                <div className="featured-product">
                    <h2 className='categories-name'>Accessories</h2>
                    <div className="product-images">
                        <img className='product-image' src={accessories1} alt="" />
                        <img className='product-image' src={accessories2} alt="" />
                        <img className='product-image' src={accessories3} alt="" />
                    </div>
                </div>
                <div className="featured-product">
                    <h2 className='categories-name'>Electric</h2>
                    <div className="product-images">
                        <img className='product-image' src={electric1} alt="" />
                        <img className='product-image' src={electric2} alt="" />
                        <img className='product-image' src={electric3} alt="" />
                    </div>
                </div>
                <div className="featured-product">
                    <h2 className='categories-name'>Mobile</h2>
                    <div className="product-images">
                        <img className='product-image' src={mobile1} alt="" />
                        <img className='product-image' src={mobile2} alt="" />
                        <img className='product-image' src={mobile3} alt="" />
                    </div>
                </div>
                <div className="featured-product">
                    <h2 className='categories-name'>Cloth</h2>
                    <div className="product-images">
                        <img className='product-image' src={cloth1} alt="" />
                        <img className='product-image' src={cloth2} alt="" />
                        <img className='product-image' src={cloth3} alt="" />
                    </div>
                </div>
            </div>
            <div className='text-center'>
                <button className='load-btn'>Load More</button>
            </div>
        </div>
    );
};

export default Featured;