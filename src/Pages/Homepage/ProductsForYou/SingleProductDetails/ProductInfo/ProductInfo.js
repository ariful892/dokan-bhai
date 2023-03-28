import React, { useEffect, useState } from 'react';
import './ProductInfo.css'
import star from '../../../../../assets/single-product/icons/Star.png';
import starlight from '../../../../../assets/single-product/icons/starlight.png';
import heart from '../../../../../assets/single-product/icons/heart.png';
import ProductDetails from './ProductDetails/ProductDetails';
import DeliveryOption from './DeliveryOption/DeliveryOption';
// import Zoom from 'react-img-zoom'
import { useParams } from 'react-router-dom';
import Loading from '../../../../Shared/Loading/Loading';
import { useQuery } from 'react-query';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { useDispatch, useSelector } from 'react-redux';
import loadSingleProductData from '../../../../../redux/thunk/products/fetchSingleProduct';
import { productDisplayImage } from '../../../../../redux/actionCreators/productsForYouActions';
import { toast } from 'react-toastify';
import { addToDb, getStoredCart } from '../../../../../utilities/cartStorage';

const ProductInfo = () => {


    const { id } = useParams();
    const dispatch = useDispatch();
    const product = useSelector((state) => state.forYouProducts.singleProduct);
    const img = useSelector((state) => state.forYouProducts.displayImage);
    const { userInfo, loading2 } = useSelector((state) => state?.userSignin);
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    const [quantity, setQuantity] = useState(0);
    // const [cartProduct, setCartProduct] = useState([]);

    // console.log(color)
    // console.log(size)
    // console.log(quantity)

    useEffect(() => {
        dispatch(loadSingleProductData(id));
    }, [])

    const { isLoading, error, data: productDetails, refetch } = useQuery('details', () =>
        fetch(`https://backend.dokanbhai.dokanbhai.com:3002/api/products/${id}`)
            .then(res => res.json())
    )

    if (isLoading) {
        return <Loading></Loading>
    }

    // if (product) {
    //     setIsLoading(false);
    // }

    // console.log(productDetails)

    // if (product && displayImage === '') {
    //     const productImg = product?.image.split(',');
    //     // console.log(productImg);
    //     setDisplayImage(`https://brandatoz.com${productImg[0]}`)
    // }

    const productImagesList = product.image.split(',');
    let productImages;

    if (productImagesList.length < 5) {
        productImages = productImagesList.reverse().slice(1);
    }

    else {
        productImages = productImagesList.reverse().slice(productImagesList.length - 5);
    }

    const handleDisplayImage = img => {
        const imageUrl = `https://brandatoz.com${img}`;
        // console.log(imageUrl)
        dispatch(productDisplayImage(imageUrl))
    }


    // let userName;
    // if(userInfo){
    //     userName
    // }
    let newCart;

    const handleAddtoCart = () => {
        const userName = userInfo ? userInfo.name : 'guest';
        // console.log(userName)
        const cart = {
            productID: id,
            name: product.name,
            img: img,
            color: color,
            size: size,
            quantity: parseInt(quantity),
            material: product?.material,
            username: userName,
        }

        // console.log(cart);

        const cartProduct = getStoredCart();
        console.log(cartProduct)


        if (cartProduct.length) {
            newCart = [...cartProduct, cart];
            addToDb(newCart);
            // setCartProduct(newCart);
        }
        else {
            newCart = [cart];
            console.log(newCart)
            addToDb(newCart);
        }


        // console.log(newCart);


        // send cart to database
        // fetch('http://localhost:5000/cart', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json',
        //         // authorization: `Bearer ${localStorage.getItem('accessToken')}`
        //     },
        //     body: JSON.stringify(cart)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         if (data.insertedId) {
        //             toast.success('Product is added');
        //             // reset();
        //         }
        //         else (
        //             toast.error('Failed to add')
        //         )
        //     })


    }



    return (
        <div className='product-info-container'>

            <div>
                <div className='product-img-info'>
                    <div className='product-img-container '>

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
                                    <img className='product-img-size' src={img} alt="" />
                                </TransformComponent>
                            </TransformWrapper>

                            {/* <img className='product-img-size' src={`https://brandatoz.com${displayImage}`} alt="" />  */}
                        </div>

                        <div className='product-demo-img-container'>
                            {
                                productImages.reverse().map((img, index) =>
                                    <img
                                        key={index + 1}
                                        onClick={() => handleDisplayImage(img)} src={`https://brandatoz.com${img}`} alt="" />
                                    // <ImageContainer
                                    //     img={img}
                                    //     setDisplayImage={setDisplayImage}
                                    // ></ImageContainer>
                                )
                            }
                        </div>
                    </div>
                    <div className='product-info'>

                        <h2 className="products-title">{product.name}</h2>

                        <div className='flex justify-between items-center'>
                            <p className="product-type-name">{product.category}</p>

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

                        <div className='mt-10'>
                            <div>
                                {product?.color && <div>
                                    <span className='text-lg mr-1'>Color:</span>
                                    <select onChange={(e) => setColor(e.target.value)} className='ml-10 p-2 rounded-md w-40' name="color" id="color">
                                        <option  >Choose color
                                        </option>

                                        {product?.color.split(',').map(c =>
                                            <option
                                                value={c}
                                            >{c}</option>
                                        )}

                                    </select>
                                </div>
                                }
                            </div>

                            <div className='mt-2'>
                                {product?.size && <div>
                                    <span className='text-lg mr-1'>Size:</span>
                                    <select onClick={(e) => setSize(e.target.value)} className='ml-12 p-2 rounded-md w-40' name="size" id="size">
                                        <option  >Choose size
                                        </option>

                                        {product?.size.split(',').map(s =>
                                            <option
                                                value={s}

                                            >{s}</option>
                                        )}


                                    </select>
                                </div>
                                }
                            </div>



                            <div className='mt-2'>
                                {product?.countInStock && <div>
                                    <span className='text-lg'>Quantity:</span>
                                    <select onClick={(e) => setQuantity(e.target.value)} className='ml-5 p-2 rounded-md w-40' name="quantity" id="quantity">
                                        <option >Choose Quantity
                                        </option>
                                        {(() => {
                                            let option = [];
                                            for (let i = 1; i <= product?.countInStock; i++) {
                                                option.push(<option
                                                    value={i}

                                                >{i}</option>)
                                            }
                                            return option;
                                        })()}
                                    </select>
                                </div>
                                }
                            </div>

                            {/* <div className='mt-2'>
                                {product?.countInStock && <div>
                                    <span className='text-lg'>Quantity:</span>

                                    <input className='ml-5 p-2 rounded-md w-28' type="number" />

                                </div>
                                }
                            </div> */}

                        </div>
                        <div className="price-btn-container">
                            <p className="quantity">Available Quantity: <span>{product.countInStock}</span></p>
                            <h2 className="price">BDT <span>{product.price}</span></h2>

                            <div className='button-container'>
                                <button className='btn-red'>Buy Now</button>
                                <button
                                    className='btn-gray'
                                    onClick={handleAddtoCart}
                                >Add to Cart</button>
                            </div>
                        </div>
                        {/* <div className='heart-icon-container'>
                            <img className='heart-icon' src={heart} alt="" />
                        </div> */}
                    </div>
                </div>
                <ProductDetails product={product}></ProductDetails>
            </div>
            <DeliveryOption></DeliveryOption>

        </div>
    );
};

export default ProductInfo;