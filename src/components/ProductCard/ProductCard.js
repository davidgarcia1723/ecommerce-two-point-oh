import React from 'react';

const ProductCard = ({ product }) => (
                     
        <div className="sale-item">
        <article className={product.price, product.type}>
            <img src={product.img} alt={product.alt} />
            <h1>{product.productName}</h1>
            <p>{product.productDescription}</p>
            <h2>{product.productCost}</h2>
            <button className="btn">Add To Cart</button>
            </article>
        </div>
   
);

export default ProductCard; 