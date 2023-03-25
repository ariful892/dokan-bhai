import React from 'react';
import './Profile.css';
import star from '../../../assets/icons/Star.png';
import starlight from '../../../assets/icons/starlight.png';
import review1 from '../../../assets/shop-page/profile/review1.png';
import review2 from '../../../assets/shop-page/profile/review2.png';
import review3 from '../../../assets/shop-page/profile/review3.png';
import review4 from '../../../assets/shop-page/profile/review4.png';
import reply1 from '../../../assets/shop-page/profile/reply1.png';
import reply2 from '../../../assets/shop-page/profile/reply2.png';

const Profile = () => {
    return (
        <div className='mt-12 mx-3 md:mx-8 lg:mx-12 mb-60'>
            <h2 className='shop-mall-name'>Jomuna Future Park</h2>
            <h2 className='shop-profile-name'>Bharatsthali</h2>
            <p className='shop-brand-type'>Clothing</p>
            <p className='shop-address'>Jamuna Future Park, GD 10-11 Ground Floor, Ka-245, Progoti Sharoni Kuril Baridhara Dhaka Dhaka Dhaka 1212 BD</p>
            <p className='shop-email'> Email : bharatsthalibd@gmail.com</p>
            <p className='shop-phone'> Phone : +88-01730068037</p>

            <button className='contact-btn'>Contact Seller</button>

            <h2 className='seller-rating-title'>Seller Rating</h2>
            <div className='seller-rating-container'>

                <div className='average-rating-container'>
                    <div className="seller-average-rating">4.6</div>
                    <div className="seller-rating">
                        <img className='rating-icon' src={star} alt="" />
                        <img className='rating-icon' src={star} alt="" />
                        <img className='rating-icon' src={star} alt="" />
                        <img className='rating-icon' src={starlight} alt="" />
                        <img className='rating-icon' src={starlight} alt="" />
                        <span className='rating-value'>(186)</span>
                    </div>
                </div>

                <div className="rating-bar-container">
                    <div className='rating-amount-container'>
                        <p className='rating-value'>5</p>
                        <div className='rating5-amount'></div>
                    </div>
                    <div className='rating-amount-container'>
                        <p className='rating-value'>4</p>
                        <div className='rating4-amount'></div>
                    </div>
                    <div className='rating-amount-container'>
                        <p className='rating-value'>3</p>
                        <div className='rating3-amount'></div>
                    </div>
                    <div className='rating-amount-container'>
                        <p className='rating-value'>2</p>
                        <div className='rating2-amount'></div>
                    </div>
                    <div className='rating-amount-container'>
                        <p className='rating-value'>1</p>
                        <div className='rating1-amount'></div>
                    </div>
                </div>
            </div>

            <div>
                <h2 className='product-reviews-title'>Product Rating & Reviews</h2>

                <div className='review-container'>
                    <img className='review-img' src={review1} alt="" />
                    <div>
                        <h2 className='review-product-name'>Sharee</h2>
                        <p className='review-product-type'>Half Silk</p>
                        <div className="seller-rating">
                            <img className='rating-icon' src={star} alt="" />
                            <img className='rating-icon' src={star} alt="" />
                            <img className='rating-icon' src={star} alt="" />
                            <img className='rating-icon' src={starlight} alt="" />
                            <img className='rating-icon' src={starlight} alt="" />
                        </div>
                        <p className='review-text'>The qwality is very good.</p>
                    </div>
                </div>
                <div className='review-container'>
                    <img className='review-img' src={review2} alt="" />
                    <div>
                        <h2 className='review-product-name'>Sharee</h2>
                        <p className='review-product-type'>Cotton</p>
                        <div className="seller-rating">
                            <img className='rating-icon' src={star} alt="" />
                            <img className='rating-icon' src={star} alt="" />
                            <img className='rating-icon' src={star} alt="" />
                            <img className='rating-icon' src={starlight} alt="" />
                            <img className='rating-icon' src={starlight} alt="" />
                        </div>
                        <p className='review-text'>I am Satiesfied.</p>
                    </div>
                </div>
                <div className='review-container'>
                    <img className='review-img' src={review3} alt="" />
                    <div>
                        <h2 className='review-product-name'>Sharee</h2>
                        <p className='review-product-type'>Cotton</p>
                        <div className="seller-rating">
                            <img className='rating-icon' src={star} alt="" />
                            <img className='rating-icon' src={star} alt="" />
                            <img className='rating-icon' src={star} alt="" />
                            <img className='rating-icon' src={starlight} alt="" />
                            <img className='rating-icon' src={starlight} alt="" />
                        </div>
                        <div className='reply-img-container'>
                            <img className='reply-img' src={reply1} alt="" />
                            <img className='reply-img' src={reply2} alt="" />
                        </div>
                        <p className='review-text'>Nice product.</p>
                    </div>
                </div>

                <div className='review-container'>
                    <img className='review-img' src={review4} alt="" />
                    <div>
                        <h2 className='review-product-name'>Kabli Set</h2>
                        <p className='review-product-type'>Kabli</p>
                        <div className="seller-rating">
                            <img className='rating-icon' src={star} alt="" />
                            <img className='rating-icon' src={star} alt="" />
                            <img className='rating-icon' src={star} alt="" />
                            <img className='rating-icon' src={starlight} alt="" />
                            <img className='rating-icon' src={starlight} alt="" />
                        </div>
                        <div className='reply-img-container'>
                            <img className='reply-img' src={review4} alt="" />
                            <img className='reply-img' src={review4} alt="" />
                        </div>
                        <p className='review-text'>Loved the dress!! </p>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Profile;