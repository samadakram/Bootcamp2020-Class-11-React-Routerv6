import React from 'react'
import { useParams } from 'react-router-dom';

const ProductItem = () => {

    const { id } = useParams();

    return (
        <div>
            <h1>Welcome To Product Item Page</h1>
        </div>
    )
}

export default ProductItem;