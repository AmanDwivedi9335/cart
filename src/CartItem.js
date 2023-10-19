import React from 'react';
import App from './App';

const CartItem = (props) => {
    
   
            const {price, title, qty, img} = props.product;
            const {product, 
                onIncreaseQuatity, 
                onDecreaseQuatity, 
                onDeleteQuantity
            } = props;
            return(
                <div className="cart-item">
                    <div className="left-block">
                        <img style={styles.image} src={product.img}/>
                    </div>
                    <div className="right-block">
                        <div style={{fontSize: 25}}>{title}</div>
                        <div style={{color: '#777'}}>Rs. {price}/-</div>
                        <div style={{color: '#777'}}>Qty : {qty}</div>
                        <div className='cart-item-actions'>
                        <img alt="increase" onClick={()=> onIncreaseQuatity(product)} className="action-icons" src="https://png.pngtree.com/png-vector/20190214/ourmid/pngtree-vector-plus-icon-png-image_515260.jpg"/>
                        <img alt="increase" onClick={()=> onDecreaseQuatity(product)} className="action-icons" src="https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-vector-minus-icon-png-image_925716.jpg"/>
                        <img alt="increase" onClick={()=> onDeleteQuantity(product.id)} className="action-icons" src="https://png.pngtree.com/element_our/20190528/ourmid/pngtree-delete-icon-image_1129289.jpg"/>
                        </div>
                    </div>
                </div>
            );
}

const styles = {
    image: {
        height: 100,
        width: 100,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;