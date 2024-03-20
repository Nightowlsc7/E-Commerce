import React,{useState}from 'react'
import style from '../css/Cart.css'
// import parse from 'html-react-parser';


function Cart(props) {
   const [cart, setCart] = useState([]);

//     const fetchOneItem = (id) => {
//         axios.get(`http://localhost:3000/api/product/${id}`)
//           .then((response) => {
//             console.log(response.data);
//           })
//           .catch((error) => {
//             console.error(error);
//           });
//       };
  return (
    
    <div className="cart-list"> 
        <div  className="Cart-Main-Section">
        <p>Product</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Subtotal</p>
        </div>
        <div className="test">
        <h1></h1>
    </div>
    <div className="container">
        <div   className="input-apply">
         <input id='input' type="text" />
         <button className='Cart-Button3'>Apply Coupon</button>
        </div>

        <div className="cart-total">
            <h5>Cart Total</h5>
            <br />
                <h6>
                    Subtotal: 
                </h6>
                <hr className="divider" />
                <h6>
                    Shipping: 
                </h6>
                <hr className="divider" />
                <h6>
                    Total:
                </h6>
                <button className='Checkout'>Proceed to Checkout</button>
            </div>
    </div>

  </div>
  )
}

export default Cart
