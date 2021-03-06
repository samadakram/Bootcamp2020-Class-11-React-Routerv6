import React from 'react'
import { useParams } from 'react-router-dom';
import Shoes from '../../src/shoes.json';

const ProductItem = () => {

    const { id } = useParams();
    const shoe = Shoes[id];

    if (!shoe) {
        return <h2>Product Not Found !</h2>
    }

    return (
        <div>
            <h1>Welcome To Product Item Page</h1>
            <div className="link" >
                <h2>{shoe.name}</h2>
                <img src={shoe.img} alt="shoes" height={500} />
            </div>
        </div>
    )
}

export default ProductItem;