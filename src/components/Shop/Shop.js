import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';
import Products from '../Products/Products';

const Shop = (props) => {
    // console.log(props)
    const {products, addToCart} = props;     
    
    return (
        <div>
            <h2>this is a shop:</h2>
            {
                products.map(pd => <Products
                    product={pd}
                    key={pd.id}
                    addToCart={addToCart}                   
                    ></Products>)
            }
        </div>
    );
};

const mapStateToProps = state => {
    return {
        products: state.products,
    }
}
const mapDispatchToProps = {
    addToCart: addToCart
}
export default connect(mapStateToProps, mapDispatchToProps)(Shop);