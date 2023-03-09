import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SingleForYouProduct = ({ product }) => {

    const navigate = useNavigate();
    const productImg = product.image.split(',');
    // console.log(productImg);
    // console.log(productImg[0]);

    const showProductDetails = () => {
        // navigate(`/details/${product._id}`);
    }

    return (
        <Link to={`/details/${product._id}`} className="single-product" >
            <div className='img-container'>
                <img className='product-img' src={`https://brandatoz.com${productImg[0]}`} alt="" />
            </div>
            <div className="product-details">
                <p className='product-name'>{product.name}</p>
                <p className='product-type'>Sit eu</p>
                <h2 className='product-price'>BDT <span>{product.price}</span></h2>
            </div>
        </Link>
    );
};

export default SingleForYouProduct;