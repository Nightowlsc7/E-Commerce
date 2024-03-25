import React from 'react'
import ps from '../images/ps.png'
import style from '../css/Products.css'
import OneProduct from './OneProduct.jsx'

const Products = (props) => {
  return (

    <section>
    <div className="container" style={{paddingTop:"3rem"}} >
      <div className="row">
        <div className="col-12">
          <h3 style={{textAlign:"start",color:"red"}}>This Month</h3>

        </div>
        <div className="row">
          <div className="col-9">
            <h1 style={{textAlign:"start"}} >{props.category}</h1>
          </div>
          <div className="col-3">             
             <button onClick={()=>{switchView('')}} className='btn' style={{position:"absolute",backgroundColor:"red",color:"white"}}>View All</button>                 
          </div>
        </div>
      </div>
      <div className="row" style={{height:"23rem",paddingTop:"2rem"}}>    
      {props.data.map((e,i)=>{
             return ( 
                <div className="col-3" key={i} >
             <OneProduct addToCart={props.addToCart} addToWishList={props.addToWishList} 
             data={e} switchView={props.switchView} selectOne={props.selectOne}/>   

                </div>)

            })}
       </div>
         
     
    </div>
  </section>  
  )
}

export default Products
