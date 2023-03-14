import React from 'react';
import { useSelector } from 'react-redux';

const Products = () => {
    const state = useSelector((state) => state?.productsReducer?.products?.products)
    return (
        <div className='md:px-[220px] my-[40px] pb-[40px]'>
            <h1 className='text-center text-white text-[25px] my-[30px]'>Products of the Shop</h1>
            <div className='grid md:grid-cols-4 gap-5' >
                {
                    state?.map((s) => <>
                        <div class="flex justify-center">
                            <div class="rounded-lg shadow-lg bg-[#454545] max-w-sm  w-[240px]">
                                <a href="#!">
                                    <img class="rounded-t-lg h-[320px] w-[370px]" src={`https://brandatoz.com${s?.image.split(",")[0]}`} alt="" />
                                </a>
                                <div class="p-6">
                                    <h5 class="text-white text-xl font-medium mb-2"><b>Category</b>:{s.category}</h5>
                                    <p class="text-white text-base ">
                                        <b>Name</b>:{s.name}
                                    </p>
                                    <p class="text-white text-base ">
                                        <b>Price</b>:${s.price}
                                    </p>
                                    <p class="text-white text-base ">
                                        <b>Description</b>:{s.description}
                                    </p>

                                </div>
                            </div>
                        </div>
                    </>)
                }

            </div>

        </div>
    );
};

export default Products;