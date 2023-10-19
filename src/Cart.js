import React from 'react';
import App from './App';
import CartItem from './CartItem';

const Cart = (props) => {
  
        const {products} = props;
        return(
        <div className='cart'>
            {products.map((product) =>{
                return <CartItem 
                product={product} 
                key={product.id} 
                onIncreaseQuatity={props.onIncreaseQuatity}
                onDecreaseQuatity={props.onDecreaseQuatity}
                onDeleteQuantity ={props.onDeleteQuantity}/>
            })}
        </div>
        );
    }



export default Cart;