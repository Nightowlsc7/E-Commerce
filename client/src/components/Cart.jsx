import React from 'react'
import style from '../components/Cart.jsx'

function Cart(props) {
    
  return (
    
    <div className="cart-list">
        <div  className="Cart-Main-Section">
        <p>Product</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Subtotal</p>
        <div  className="Cart-Button-1">
            <button className='Cart-Button-1'></button>
            <button className='Cart-Button-1' ></button>
        </div>
        </div>
        <div>
        {/* { props.data.map((element)=>{
                return <div key={element._id}>
                    <p>{element.price}</p>
                   
                </div>
            })
        } */}
    </div>
    <div>
        <div   className="input-apply">
         <input id='input' type="text" />
         <button className='Cart-Button2'>Apply Coupon</button>
        </div>
        <div className="cart-total">
                <div className="subtotal">
                    Subtotal: 
                </div>
                <hr className="divider" />
                <div className="shipping">
                    Shipping: 
                </div>
                <hr className="divider" />
                <div className="total">
                    Total:
                </div>
                <button className='Checkout'>Proceed to Checkout</button>
            </div>
    </div>

  </div>
  )
}

export default Cart
