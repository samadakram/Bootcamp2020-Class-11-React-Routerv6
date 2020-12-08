import React from 'react'
import Shoes from '../../src/shoes.json';

const Product = () => {

    console.log(Shoes);
    // console.log("Keys>",Object.keys(Shoes));
    return (
        <div>
            <h1>Welcome To Product Page</h1>
            {Object.keys(Shoes).map(keyName => {
                return (<div>
                    <h2 key={keyName}>{Shoes[keyName].name}</h2>
                    <img src={Shoes[keyName].img} alt="shoes" height={150} />
                </div>)
            })}
        </div>
    )
}

export default Product;