import React, { useEffect, useState } from 'react';
import './ProductInfo.css'
import productImg from '../../../../../assets/single-product/productimg.png';
import product1 from '../../../../../assets/single-product/product1.png';
import product2 from '../../../../../assets/single-product/product2.png';
import product3 from '../../../../../assets/single-product/product3.png';
import product4 from '../../../../../assets/single-product/product4.png';
import product5 from '../../../../../assets/single-product/product5.png';
import star from '../../../../../assets/single-product/icons/Star.png';
import starlight from '../../../../../assets/single-product/icons/starlight.png';
import heart from '../../../../../assets/single-product/icons/heart.png';
import ProductDetails from './ProductDetails/ProductDetails';
import DeliveryOption from './DeliveryOption/DeliveryOption';
// import Zoom from 'react-img-zoom'
import { useParams } from 'react-router-dom';
import Loading from '../../../../Shared/Loading/Loading';
import { useQuery } from 'react-query';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";


import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const ProductInfo = () => {


    const { id } = useParams();
    // const [isLoading, setIsLoading] = useState(true);
    const { isLoading, error, data: productDetails, refetch } = useQuery('details', () =>
        fetch(`https://backend.dokanbhai.dokanbhai.com:3002/api/products/${id}`)
            .then(res => res.json())
        // .then(data => {
        //     console.log(data);
        //     refetch();
        // })
    )

    // const [productDetails, setProductDetails] = useState({});

    // useEffect(() => {
    //     fetch(`https://backend.dokanbhai.dokanbhai.com:3002/api/products/${id}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             // console.log(data);
    //             setProductDetails(data)
    //             setIsLoading(false)
    //         })
    // }, [id])



    const [displayImage, setDisplayImage] = useState('');

    if (isLoading) {
        return <Loading></Loading>
    }

    if (productDetails && displayImage === '') {
        const productImg = productDetails?.image.split(',');
        console.log(productImg);
        setDisplayImage(`https://brandatoz.com${productImg[0]}`)
    }

    const productImagesList = productDetails.image.split(',');
    let productImages;

    if (productImagesList.length < 5) {
        productImages = productImagesList.reverse().slice(1);
    }

    else {
        productImages = productImagesList.reverse().slice(productImagesList.length - 5);
    }

    const handleDisplayImage = img => {
        console.log(img);
        // setDisplayImage(img)
        setDisplayImage(`https://brandatoz.com${img}`)
        console.log('dis ' + displayImage);
        refetch()
    }

    // console.log(productImages);
    // console.log(productDetails.description)
    // console.log(productImagesList)
    // console.log(productDetails.size)

    return (
        <div className='product-info-container'>

            <div>
                <div className='product-img-info'>
                    <div className='product-img-container '>

                        {/* <Container maxWidth='lg' sx={{ mt: 9 }}>
                            <Grid container spacing={4}>
                                <Grid item xs={3}>
                                    <>
                                        <Carousel showThumbs={false} autoPlay={false} interval={3000} infiniteLoop={true} showArrows={true} showIndicators={true} >
                                            {productImages.map(img => (
                                                <div >
                                                    <Zoom>
                                                        <img
                                                            src={img}
                                                            style={{ maxHeight: '330px', width: 'auto' }} alt=''
                                                        />
                                                    </Zoom>
                                                </div>
                                            ))};
                                        </Carousel>
                                    </>

                                </Grid>
                                <Grid item xs={5}>

                                </Grid>
                                <Grid item xs={4}>

                                </Grid>
                            </Grid>
                        </Container> */}



                        <div className='product-display-img'>


                            {/* <Zoom

                                img={displayImage}

                                // img={`https://brandatoz.com${productImages.reverse()[0]}`}

                                zoomScale={3}
                                width={460}
                                height={423}
                            /> */}
                            {/* <img className='product-img-size' src={displayImage} alt="" /> */}
                            <TransformWrapper
                                defaultScale={1}
                                defaultPositionX={100}
                                defaultPositionY={200}
                            >
                                <TransformComponent>
                                    <img className='product-img-size' src={displayImage} alt="" />
                                </TransformComponent>
                            </TransformWrapper>




                            {/* <img className='product-img-size' src={`https://brandatoz.com${displayImage}`} alt="" />  */}
                        </div>

                        <div className='product-demo-img-container'>
                            {
                                productImages.reverse().map(img =>
                                    <img onClick={() => handleDisplayImage(img)} src={`https://brandatoz.com${img}`} alt="" />
                                    // <ImageContainer
                                    //     img={img}
                                    //     setDisplayImage={setDisplayImage}
                                    // ></ImageContainer>
                                )

                            }

                        </div>
                    </div>
                    <div className='product-info'>

                        <h2 className="products-title">{productDetails.name}</h2>

                        <div className='flex justify-between items-center'>
                            <p className="product-type-name">{productDetails.category}</p>

                            <div className='heart-icon-container'>
                                <img className='heart-icon' src={heart} alt="" />
                            </div>
                        </div>

                        <div className="product-rating">
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={starlight} alt="" />
                        </div>

                        <div className="price-btn-container">
                            <p className="quantity">Available Quantity: <span>{productDetails.countInStock}</span></p>
                            <h2 className="price">BDT <span>{productDetails.price}</span></h2>

                            <div className='button-container'>
                                <button className='btn-red'>Add to Black Friday</button>
                                <button className='btn-gray'>Add to Flash Sale</button>
                            </div>
                        </div>
                        {/* <div className='heart-icon-container'>
                            <img className='heart-icon' src={heart} alt="" />
                        </div> */}
                    </div>
                </div>
                <ProductDetails productDetails={productDetails}></ProductDetails>
            </div>
            <DeliveryOption></DeliveryOption>

        </div>
    );
};

export default ProductInfo;