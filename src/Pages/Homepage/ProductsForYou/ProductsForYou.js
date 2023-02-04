import React from 'react';
import './ProductsForYou.css';
import product1 from '../../../assets/for-you-products/product1.png';
import product2 from '../../../assets/for-you-products/product2.png';
import product3 from '../../../assets/for-you-products/product3.png';
import product4 from '../../../assets/for-you-products/product4.png';
import product5 from '../../../assets/for-you-products/product5.png';
import product6 from '../../../assets/for-you-products/product6.png';
import product7 from '../../../assets/for-you-products/product7.png';
import product8 from '../../../assets/for-you-products/product8.png';
import product9 from '../../../assets/for-you-products/product9.png';
import product10 from '../../../assets/for-you-products/product10.png';

const ProductsForYou = () => {
    return (
        <div className='products-for-container'>
            <h2 className='section-title'>Products For You</h2>

            <div className="for-you-products">
                <div className="single-product">
                    <div className='img-container'>
                        <img className='product-img' src={product1} alt="" />
                    </div>
                    <div className="product-details">
                        <p className='product-name'>Sem turpis eu pulvinar.</p>
                        <p className='product-type'>Sit tempus</p>
                        <h2 className='product-price'>$130</h2>
                    </div>
                </div>

                <div className="single-product">
                    <div className='img-container'>
                        <img className='product-img' src={product2} alt="" />
                    </div>
                    <div className="product-details">
                        <p className='product-name'>Consequat facilisi dui fermentum tincidunt.</p>
                        <p className='product-type'>Sit eu</p>
                        <h2 className='product-price'>$130</h2>
                    </div>

                </div>

                <div className="single-product">
                    <div className='img-container'>
                        <img className='product-img' src={product3} alt="" />
                    </div>
                    <div className="product-details">
                        <p className='product-name'>Parturient aenean mollis tristique.</p>
                        <p className='product-type'>Urna</p>
                        <h2 className='product-price'>$130</h2>
                    </div>

                </div>

                <div className="single-product">
                    <div className='img-container'>
                        <img className='product-img' src={product4} alt="" />
                    </div>
                    <div className="product-details">
                        <p className='product-name'>Platea eget viverra nec vel et fringilla.</p>
                        <p className='product-type'>Purus</p>
                        <h2 className='product-price'>$130</h2>
                    </div>

                </div>

                <div className="single-product">
                    <div className='img-container'>
                        <img className='product-img' src={product5} alt="" />
                    </div>
                    <div className="product-details">
                        <p className='product-name'>Quam lectus nibh in.</p>
                        <p className='product-type'>Dictum</p>
                        <h2 className='product-price'>$130</h2>
                    </div>

                </div>

                <div className="single-product">
                    <div className='img-container'>
                        <img className='product-img' src={product6} alt="" />
                    </div>
                    <div className="product-details">
                        <p className='product-name'>Faucibus aliquam.</p>
                        <p className='product-type'>Integer</p>
                        <h2 className='product-price'>$130</h2>
                    </div>

                </div>
                <div className="single-product">
                    <div className='img-container'>
                        <img className='product-img' src={product7} alt="" />
                    </div>
                    <div className="product-details">
                        <p className='product-name'>Sit velit justo in pharetra feugiat amet.</p>
                        <p className='product-type'>Cursus mi</p>
                        <h2 className='product-price'>$130</h2>
                    </div>

                </div>
                <div className="single-product">
                    <div className='img-container'>
                        <img className='product-img' src={product8} alt="" />
                    </div>
                    <div className="product-details">
                        <p className='product-name'>Et tristique aliquam nullam nulla sed risus.</p>
                        <p className='product-type'>Chair</p>
                        <h2 className='product-price'>$130</h2>
                    </div>

                </div>
                <div className="single-product">
                    <div className='img-container'>
                        <img className='product-img' src={product9} alt="" />
                    </div>
                    <div className="product-details">
                        <p className='product-name'>Duis egestas nunc volutpat nullam.</p>
                        <p className='product-type'>Viverra</p>
                        <h2 className='product-price'>$130</h2>
                    </div>

                </div>
                <div className="single-product">
                    <div className='img-container'>
                        <img className='product-img' src={product10} alt="" />
                    </div>
                    <div className="product-details">
                        <p className='product-name'>Sed interdum mauris.</p>
                        <p className='product-type'>Sed</p>
                        <h2 className='product-price'>$130</h2>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ProductsForYou;