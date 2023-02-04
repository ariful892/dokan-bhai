import React from 'react';
import './TopSellers.css';
import Carousel from 'react-elastic-carousel'
import seller1 from '../../../assets/top-sellers/sellers1.png';
import seller2 from '../../../assets/top-sellers/sellers2.png';
import seller3 from '../../../assets/top-sellers/sellers3.png';
import seller4 from '../../../assets/top-sellers/sellers4.png';
import seller5 from '../../../assets/top-sellers/sellers5.png';
import seller6 from '../../../assets/top-sellers/sellers6.png';
import seller7 from '../../../assets/top-sellers/sellers7.png';
import seller8 from '../../../assets/top-sellers/sellers8.png';
import seller9 from '../../../assets/top-sellers/sellers9.png';

const TopSellers = () => {

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 4 },
        { width: 768, itemsToShow: 6 },
        { width: 1200, itemsToShow: 8 },
    ];

    return (
        <div className='top-seller-container'>
            <h2 className='section-title'>Dokan Vai Top Sellers</h2>

            {/* <div className="sellers-container"> */}
            <Carousel breakPoints={breakPoints}>
                <div className="seller-container">
                    <img className='seller-image' src={seller1} alt="" />
                    <h2 className='seller-name'>Sem turpis eu pulvinar.</h2>
                    <p className='seller-type'>Sit tempus</p>
                </div>

                <div className="seller-container">
                    <img className='seller-image' src={seller2} alt="" />
                    <h2 className='seller-name'>Sem turpis eu pulvinar.</h2>
                    <p className='seller-type'>Sit tempus</p>
                </div>

                <div className="seller-container">
                    <img className='seller-image' src={seller3} alt="" />
                    <h2 className='seller-name'>Sem turpis eu pulvinar.</h2>
                    <p className='seller-type'>Sit tempus</p>
                </div>

                <div className="seller-container">
                    <img className='seller-image' src={seller4} alt="" />
                    <h2 className='seller-name'>Sem turpis eu pulvinar.</h2>
                    <p className='seller-type'>Sit tempus</p>
                </div>

                <div className="seller-container">
                    <img className='seller-image' src={seller5} alt="" />
                    <h2 className='seller-name'>Sem turpis eu pulvinar.</h2>
                    <p className='seller-type'>Sit tempus</p>
                </div>

                <div className="seller-container">
                    <img className='seller-image' src={seller6} alt="" />
                    <h2 className='seller-name'>Sem turpis eu pulvinar.</h2>
                    <p className='seller-type'>Sit tempus</p>
                </div>

                <div className="seller-container">
                    <img className='seller-image' src={seller7} alt="" />
                    <h2 className='seller-name'>Sem turpis eu pulvinar.</h2>
                    <p className='seller-type'>Sit tempus</p>
                </div>

                <div className="seller-container">
                    <img className='seller-image' src={seller8} alt="" />
                    <h2 className='seller-name'>Sem turpis eu pulvinar.</h2>
                    <p className='seller-type'>Sit tempus</p>
                </div>

                <div className="seller-container">
                    <img className='seller-image' src={seller9} alt="" />
                    <h2 className='seller-name'>Sem turpis eu pulvinar.</h2>
                    <p className='seller-type'>Sit tempus</p>
                </div>

            </Carousel>

            {/* </div> */}
        </div>
    );
};

export default TopSellers;