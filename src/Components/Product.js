import React from 'react'
import { Link } from 'react-router-dom';
import Shoes from '../../src/shoes.json';
import '../App.css';

const Product = () => {

    console.log(Shoes);
    // console.log("Keys>",Object.keys(Shoes));
    return (
        <div>
            <h1>Welcome To Product Page</h1>
            <div className="productContainer">
                {Object.keys(Shoes).map(keyName => {
                    const shoe = Shoes[keyName];
                    return (<Link key={keyName} className="link">
                        <h2 key={keyName}>{shoe.name}</h2>
                        <img src={shoe.img} alt="shoes" height={150} />
                    </Link>)
                })}
            </div>
        </div>
    )
}

export default Product;