import React from 'react'
import ps from '../images/ps.png'


const OneProduct = (props) => {
  return (
    <>
    <div className="card card-product">
              <div className="card-im-top" style={{width:"300px",backgroundColor:"white"}}>
              <img src={props.data.imgUrl} style={{width:"200px",height:"200px"}}  alt="..."/>
              <button className=" btn-add" onClick={()=>{
                props.addToCart(props.data)
              }} >Add To Cart</button>
           
              </div>        
              <div className="">
                <p className=""  onClick={()=>{ 
                    props.selectOne(props.data.id)
                     props.switchView('OneProduct')

                   
                    }}  style={{textAlign:"start",fontSize:"20px"}}>{props.data.name}</p>
                <p className='' style={{textAlign:"start",color:"red"}}>{props.data.price}</p>
              </div>
            </div>
    </>

  )
}

export default OneProduct
