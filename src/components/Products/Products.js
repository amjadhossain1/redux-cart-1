import React from 'react';

const Products = (props) => {
    const {addToCart, product} = props;
    // console.log(product.id)
    return (
        <div style={{border: '1px solid purple', margin: '10px', padding: '10px', borderRadius: '10px'}}>
            <h4>This is product {product.name}</h4>
            <button 
                onClick={() => addToCart(product.id, product.name)}
            >add to cart</button>
        </div>
    );
};

export default Products;