import React from 'react';
import editIcon from '../../../../assets/icons/edit.png';
import activityIcon from '../../../../assets/icons/activity.png';
import locationIcon from '../../../../assets/icons/location.png';

const SingleMall = ({ mall }) => {

    return (
        <div className='shop-container'>
            <div className='shop-img-container'>
                <img className='shop-img' src={`https://brandatoz.com/images/dokans/${mall.name.split(" ").join("_")}.png`} alt="" />
                <div className='edit-container'>
                    <img className='edit-icon' src={editIcon} alt="" />
                </div>
            </div>
            <div className="shop-info-detail">
                <h2 className='shop-name'>{mall.name}</h2>
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
    );
};

export default SingleMall;