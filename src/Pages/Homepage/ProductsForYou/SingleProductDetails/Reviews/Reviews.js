import React from 'react';
import './Reviews.css'
import user1 from '../../../../../assets/single-product/user1.png'
import user2 from '../../../../../assets/single-product/user2.png';
import comment1 from '../../../../../assets/single-product/comment1.png';
import comment2 from '../../../../../assets/single-product/comment2.png';
import review1img1 from '../../../../../assets/single-product/user1img1.png';
import review1img2 from '../../../../../assets/single-product/user1img2.png';
import review1img3 from '../../../../../assets/single-product/user1img3.png';
import review2img1 from '../../../../../assets/single-product/user2img1.png';
import review2img2 from '../../../../../assets/single-product/user2img2.png';

const Reviews = () => {
    return (
        <div className='reviews-container'>
            <h2 className='reviews-title'>Reviews</h2>

            <div className='user-review'>
                <div className='user-container'>
                    <img className='user-image' src={user1} alt="" />
                    <div className="review-user-name">Elementum Rasli</div>
                </div>
                <div className="reviews-img">
                    <img src={review1img1} alt="" />
                    <img src={review1img2} alt="" />
                    <img src={review1img3} alt="" />
                </div>
                <p className='review'>Mattis pellentesque orci vitae neque, enim amet in. In arcu semper enim cras enim quisque fringilla at est. Laoreet faucibus arcu, dui fermentum. Accumsan, facilisis blandit quis a consectetur amet id. Etiam dictum nisi, a morbi donec pellentesque tellus euismod. Ut id amet, consectetur.</p>
                <div className="comment-container">
                    <div className="commenter">
                        <div className='commenter-user'>
                            <img className='commenter-img' src={comment1} alt="" />
                            <h2 className='commenter-name'>Vel Vestibulum</h2>
                        </div>
                        <p className='comment'>Nullam amet, nibh dignissim duis id placerat dui viverra. Nulla id scelerisque quis est mauris, ut habitant id facilisis. Viverra egestas porta sed velit, dolor. Semollis tristique.</p>
                    </div>
                    <div className="commenter">
                        <div className='commenter-user'>
                            <img className='commenter-img' src={comment2} alt="" />
                            <h2 className='commenter-name'>Faucibus Nskeo</h2>
                        </div>
                        <p className='comment-text'>Egestas sit et lectus in est diam aliquet. Habitasse tempus rhoncus quis at eleifend sed. Nascetur orci, aliquet duis at facectus convallis. </p>
                    </div>
                    <textarea className='comment-box' name="" id="" placeholder='Reply'></textarea>
                </div>
            </div>
            <div className='user-review'>
                <div className='user-container'>
                    <img className='user-image' src={user2} alt="" />
                    <div className="review-user-name">Risus Dui Nunc Arcu</div>
                </div>
                <div className="reviews-img">
                    <img src={review2img1} alt="" />
                    <img src={review2img2} alt="" />
                </div>
                <p className='review'>Aliquet volutpat pellentesque pellentesque at. Tincidunt dolor tortor, diam tempor. Tristique id felis, sed leo. Et, viverra cursus at faucibus mi lectus ut sed elit. Nisi, pellentesque pharetra, aliquam, iaculis convallis malesuada.</p>
                <div className="comment-container">
                    <div className="commenter">
                        <div className='commenter-user'>
                            <img className='commenter-img' src={comment1} alt="" />
                            <h2 className='commenter-name'>Vel Vestibulum</h2>
                        </div>
                        <p className='comment'>Nullam amet, nibh dignissim duis id placerat dui viverra. Nulla id scelerisque quis est mauris, ut habitant id facilisis. Viverra egestas porta sed velit, dolor. Semollis tristique. </p>
                    </div>
                    <div className="commenter">
                        <div className='commenter-user'>
                            <img className='commenter-img' src={comment2} alt="" />
                            <h2 className='commenter-name'>Cum Orci Facilisi </h2>
                        </div>
                        <p className='comment'>Diam, euismod sapien id commodo sit. Placerat cras id diam scelerisque ipsum vitae. At moassa. Nisi suscipit sed placerat felis massa, ut. </p>
                    </div>

                    <textarea className='comment-box' name="" id="" placeholder='Reply'></textarea>
                </div>
            </div>
        </div>
    );
};

export default Reviews;