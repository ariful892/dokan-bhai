import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { getStoredCart } from '../../utilities/cartStorage';
import './Checkout.css'

const Checkout = () => {

    const { productID } = useParams();
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [term, setTerm] = useState(false);

    // console.log(productID)
    const cartProduct = getStoredCart();
    // console.log(cartProduct);
    let product, totalPrice, shipping = 0, tax = 0, orderTotal;

    if (cartProduct.length) {
        product = cartProduct.filter(p => p.productID === productID);
        // console.log(product);

        totalPrice = product[0].quantity * product[0].price;
        orderTotal = totalPrice + shipping + tax;
        // console.log(orderTotal)
    }

    const onSubmit = async data => {
        console.log(data)
    }

    return (
        <div className='checkout-container'>

            <form className='shipping-payment-container' onSubmit={handleSubmit(onSubmit)} >

                <div className='address-container'>
                    <h2 className='text-xl font-bold'>Shipping Address</h2>
                    <div className="form-control  mt-4">
                        <label className="label">
                            <span className="label-text">Full Name</span>
                        </label>
                        <input type="text"
                            placeholder='Enter Full Name'
                            className="input input-bordered w-full h-10"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">District</span>
                        </label>
                        <select name="" id=""
                            placeholder='Enter Full Name'
                            className="input input-bordered w-full h-10"
                            {...register("district", {
                                required: {
                                    value: true,
                                    message: 'District is Required'
                                }
                            })}
                        ><option value="">Select District</option>
                            <option value="dhaka">Dhaka</option>
                            <option value="chittagong">Chittagong</option>
                            <option value="sylhet">Sylhet</option>
                        </select>

                        <label className="label">
                            {errors.district?.type === 'required' && <span className="label-text-alt text-red-500">{errors.district.message}</span>}
                        </label>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Area</span>
                        </label>
                        <select name="" id=""
                            placeholder='Enter Full Name'
                            className="input input-bordered w-full h-10"
                            {...register("area", {
                                required: {
                                    value: true,
                                    message: 'Area is Required'
                                }
                            })}
                        ><option value="">Select Area</option>
                            <option value="chittagong">Chittagong</option>
                            <option value="dhaka">Boalkhali</option>
                            <option value="sylhet">Patiya</option>
                        </select>

                        <label className="label">
                            {errors.area?.type === 'required' && <span className="label-text-alt text-red-500">{errors.area.message}</span>}
                        </label>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Full Address</span>
                        </label>
                        <input type="text"
                            placeholder='Enter Full Address'
                            className="input input-bordered w-full h-10"
                            {...register("address", {
                                required: {
                                    value: true,
                                    message: 'Address is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address.message}</span>}
                        </label>
                    </div>



                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Phone No</span>
                        </label>
                        <input type="number"
                            placeholder='Enter Phone No'
                            className="input input-bordered w-full h-10"
                            {...register("phone", {
                                required: {
                                    value: true,
                                    message: 'Phone no is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}
                        </label>
                    </div>

                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Email Address</span>
                        </label>
                        <input type="text"
                            placeholder='Enter Email Address'
                            className="input input-bordered w-full h-10"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email Address is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        </label>
                    </div>

                    <h2 className='text-2xl font-bold mt-4'>Payment Method</h2>

                    <div className='mt-1 flex items-center'>
                        <input type="radio"
                            {...register("payment", {
                                required: {
                                    value: true,
                                    message: 'Please select payment method'
                                }
                            })}
                        />
                        <label className='ml-1' htmlFor="">Cash On Delivery</label>
                        <label className="label">
                            {errors.payment?.type === 'required' && <span className="label-text-alt text-red-500">{errors.payment.message}</span>}
                        </label>
                    </div>
                </div>

                <div className='order-container'>
                    <h2 className='text-xl font-bold'>Order Items</h2>

                    <div className='flex  gap-5 lg:gap-8 items-center mt-5'>
                        <div className="w-16">
                            <img className='rounded-lg' src={product[0].img} alt='' />
                        </div>

                        <div>
                            <h2 className='font-bold'>{product[0].name}</h2>
                            <p className=''>Quantity: {product[0].quantity}</p>
                        </div>

                        <p><span>{product[0].quantity} x BDT{product[0].price} = BDT {totalPrice}</span></p>
                    </div>

                    <div className='mt-5'>
                        <h2 className='text-xl font-bold'>Order Summary</h2>

                        <div className='mt-3'>
                            <div className='flex justify-between'>
                                <h2>Items</h2>
                                <p>BDT <span>{totalPrice}</span></p>
                            </div>
                            <div className='flex justify-between'>
                                <h2>Shipping</h2>
                                <p>BDT {shipping}</p>
                            </div>
                            <div className='flex justify-between'>
                                <h2>Tax</h2>
                                <p>BDT {tax}</p>
                            </div>
                            <div className='flex justify-between mt-1.5'>
                                <h2 className='font-bold'>Order Total</h2>
                                <p className='font-bold'>BDT {orderTotal}</p>
                            </div>

                            <div className='mt-4'>
                                {!term && <p className='text-violet-700 font-bold text-sm bg-violet-200 p-2 mb-2'>You have to agree with the terms and conditions,Return and Refund & Privacy Policy.</p>}

                                <input onClick={() => setTerm(!term)} type="checkbox" />
                                <label className={`ml-2 ${term ? '' : 'text-red-500'} `} htmlFor="">I have read and agree to the <span className='text-violet-700'>terms and conditions</span>,Return and Refund & Privacy Policy.</label>
                            </div>

                            <input
                                disabled={!term}
                                className='bg-red-600 text-white px-5 py-2 rounded-lg mt-3 hover:bg-red-700' type="submit" value='Place Order' />

                        </div>
                    </div>
                </div>
                {/* <input className='btn btn-accent w-full  mt-0' type="submit" value='Place Order' /> */}
            </form>

        </div>
    );
};

export default Checkout;