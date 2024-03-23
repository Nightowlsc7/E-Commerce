import React,{useState}from 'react'
import style from '../css/Cart.css'
import screen from '../images/screen.png'
import ps from '../images/ps.png'

// import parse from 'html-react-parser';


function Cart({cart}) {
  return (
    
   <div className="container" style={{paddingTop:"10rem"}}>
     <div className="cart-list"> 
        <div  className="row">
        <div className="col-3">
                <p>Product</p>
                </div>
                <div className="col-3">
                <p>Price</p>
                </div>
                <div className="col-3">
                <p>Quantity</p>
                </div>
                <div className="col-3">
                <p>Subtotal</p>
        </div>      
        </div>
     {cart.map((e)=>{
        return(
            <div className="row"  key={e.id} style={{height:"150px"}}>
            <div className="col-3" >
                <img  style={{width:"100px",height:"100px"}} src={e.imgUrl} alt="" />
                <span>{e.name}</span>
            </div>
            <div className="col-3" style={{paddingTop:"1rem"}}>
               
                <span>{e.price}$</span>
            </div>
            <div className="col-3" style={{paddingTop:"1rem"}} >
                
            <input type="number" id="quantity" name="quantity" min="1" max="5"/>
            </div>
            <div className="col-3" style={{paddingTop:"1rem"}}>
               
                <span>{e.price}</span>
            </div>
        </div>
        )
      })} 
      

        
    <div className="container">
        <div   className="input-apply">
         <input id='input' type="text" />
         <button className='Cart-Button3'>Apply Coupon</button>
        </div>

        <div className="cart-total" style={{padding:"5px"}}>
            <h5 style={{textAlign:"center"}}>Cart Total</h5>
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
   </div>
  )
}

export default Cart
