import React from 'react'
import Shoes from '../../src/shoes.json';

const Product = () => {

    console.log(Shoes);
    console.log("Keys>",Object.keys(Shoes));
    return (
        <div>
            <h1>Welcome To Product Page</h1>    
        </div>
    )
}

export default Product;