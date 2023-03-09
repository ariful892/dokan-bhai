import React from 'react';
import './DeliveryOption.css'

const DeliveryOption = () => {
    return (
        <div className='delivery-option-container'>
            <p className='delivery-option-title'>Delivery Option</p>
            <div className="home-delivery">
                <p className='delivery-option-title'>Home Delivery</p>
                <h2 className='delivery-option-value'>4-6 days</h2>
            </div>
            <div className='return-warranty-container'>
                <p className='delivery-option-title'>Return & Warranty</p>
                <p className='delivery-option-title'>Warranty</p>
                <h2 className='delivery-option-value'>30 day</h2>
                <p className='delivery-option-title'>Return</p>
                <h2 className='delivery-option-value'>7 day</h2>
            </div>
            <div className='selling-detail'>
                <p className='delivery-option-title'>Sold by</p>
                <h2 className='delivery-option-value'>Rang Bangladesh</h2>
                <p className='delivery-option-title'>Seller Rating</p>
                <h2 className='delivery-option-value'>4.5</h2>
                <p className='delivery-option-title'>Ship on time</p>
                <h2 className='delivery-option-value'>97%</h2>
                <p className='delivery-option-title'>Chat Response</p>
                <h2 className='delivery-option-value'>99%</h2>
            </div>
        </div>
    );
};

export default DeliveryOption;