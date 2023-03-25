import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';

const Carts = () => {

    const { isLoading, error, data: carts } = useQuery('carts', () =>
        fetch('http://localhost:5000/cart').then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <Loading></Loading>
    }

    console.log(carts)

    return (
        <div>
            <h2 className='py-24 text-xl text-center'>Added product {carts.length}</h2>
        </div>
    );
};

export default Carts;