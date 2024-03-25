import React from 'react';
import slide1 from '../images/slide1.PNG'
import chair from '../images/chair.PNG'
import keyboard from '../images/keyboard.png'
import screen from '../images/screen.png'
import '../css/Home.css'
import iphone from '../images/iphone.png'
import monitor from '../images/monitor.png'
import smartwatch from '../images/smart-watch.png'
import headset from '../images/headset.png'
import gameconsole from '../images/game-console.png'
import OneProduct from './OneProduct.jsx';

import ps from '../images/ps.png'
import slide2 from '../images/slide2.png'





const   HomePage = (props) => {
  return (
    <>
    <section>
      <div className="container" style={{paddingBottom:"5rem"}}>
        <div className="row">
          <div className="col-3 col-category ">
            <div className="">
            <ul className='category-list'>
                <li onClick={()=>{
                  props.SelectByCategory("Woman's Fashion")
                  props.switchView('AllProducts')
                }}>Woman's Fashion</li>
                <li onClick={()=>{
                  props.SelectByCategory("Men's Fashion")
                  props.switchView('AllProducts')
                }}>Men's Fashion</li>
                <li onClick={()=>{
                  props.SelectByCategory("Electronics")
                  props.switchView('AllProducts')
                }}>Electronics</li>
                <li onClick={()=>{
                  props.SelectByCategory("Home & Lifestyle")
                  props.switchView('AllProducts')
                }}>Home & Lifestyle</li>
                <li onClick={()=>{
                  props.SelectByCategory("Medicine")
                  props.switchView('AllProducts')
                }}>Medicine</li>
                <li onClick={()=>{
                  props.SelectByCategory("Sports & Outdoor")
                  props.switchView('AllProducts')
                }}>Sports & Outdoor</li>
                <li onClick={()=>{
                  props.SelectByCategory("Baby’s & Toys")
                  props.switchView('AllProducts')
                }}>Baby’s & Toys</li>
                <li onClick={()=>{
                  props.SelectByCategory("Groceries & Pets")
                  props.switchView('AllProducts')
                }}>Groceries & Pets</li>
                <li onClick={()=>{
                  props.SelectByCategory("Health & Beauty")
                  props.switchView('AllProducts')
                }}>Health & Beauty</li>

              </ul>
            </div>
            
          </div>
          <div className="col-9 col-slide ">
          <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={slide1} className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src={slide1} className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src={slide1} className="d-block w-100" alt="..."/>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container" style={{paddingTop:"0rem"}}>
        <div className="row">
          <div className="col-12">
            <h3 style={{textAlign:"start",color:"red"}}>Today's</h3>

          </div>
          <div className="row">
            <div className="col-3">
              <h1 style={{textAlign:"start"}} >Flash Sales</h1>
            </div>
            <div className="col-5" style={{textAlign:"start"}}>
              <h1>03 : 23 : 19 : 56 </h1>
            </div>
            <div className="col-3">           
            </div>
          </div>
        </div>
        <div className="row" style={{height:"23rem",paddingTop:"2rem"}}>
        <div className="carousel-product">
          <div className="card-container">
            {props.data.map((e,i)=>{
             return ( <OneProduct addToCart={props.addToCart} addToWishList={props.addToWishList} data={e} key={i} switchView={props.switchView} selectOne={props.selectOne}/>   )

            })}
          </div>         
        </div>
        </div>
        <div  style={{textAlign:"center",paddingBottom:"3rem"}}>
          <button className='btn' style={{position:"absolute",backgroundColor:"red",color:"white"}}  onClick={()=>{props.switchView('AllProducts')}}>View All Products</button>
        </div>
        <hr/>
      </div>
    </section>  

    <section>
      <div className="container" style={{paddingTop:"3rem"}}>
        <div className="row">
          <div className="col-12">
            <h3 style={{textAlign:"start",color:"red"}}>Categories</h3>

          </div>
          <div className="row">
            <div className="col-12">
              <h1 style={{textAlign:"start"}} >Browse By Category</h1>
            </div>
          </div>
        </div>
        <div className="row" style={{height:"15rem",paddingBottom:"5rem",paddingTop:"2rem"}}>        
        <div className="carousel-Category" style={{paddingBottom:"5rem"}}>
          <div className="card-container-Category">
            <div className="card-Category">
              <img className='img-category' src={iphone} alt="" />
              <p>Phones</p>
            </div>
            <div className="card-Category">
            <img className='img-category' src={monitor} alt="" />
            <p>Computers</p>
            </div>
            <div className="card-Category">
            <img  className='img-category' src={smartwatch} alt="" />
            <p>SmartWatch</p>
            </div>
            <div className="card-Category">
            <img className='img-category' src={headset} alt="" />
            <p>HeadPhones</p>
            </div>
            <div className="card-Category">
            <img className='img-category' src={gameconsole} alt="" />
            <p>Gaming</p>
            </div>
          </div>
        </div>
        </div>
      </div>
      <hr/>

     
    </section>



    <section>
      <div className="container" style={{paddingTop:"3rem"}}>
        <div className="row">
          <div className="col-12">
            <h3 style={{textAlign:"start",color:"red"}}>This Month</h3>

          </div>
          <div className="row">
            <div className="col-9">
              <h1 style={{textAlign:"start"}} >Best Selling Products</h1>
            </div>
            <div className="col-3">             
               <button onClick={()=>{switchView('')}} className='btn' style={{position:"absolute",backgroundColor:"red",color:"white"}}>View All</button>                 
            </div>
          </div>
        </div>
        <div className="row" style={{height:"23rem",paddingTop:"2rem"}}>
        <div className="carousel-product">
          <div className="card-container">
            <div className="card card-product">
              <div className="card-im-top" style={{width:"300px",backgroundColor:"whitesmoke"}}>
              <img src={ps} style={{width:"200px",height:"200px"}}  alt="..."/>
              <a href="#" className=" btn-add">Add To Cart</a>
              </div>        
              <div className="">
                <p className="" style={{textAlign:"start",fontSize:"20px"}}>HAVIT HV-G92 Gamepad</p>
                <p className='' style={{textAlign:"start",color:"red"}}>price</p>
              </div>
            </div>
            <div className="card card-product">
              <div className="card-im-top" style={{width:"300px",backgroundColor:"whitesmoke"}}>
              <img src={screen} style={{width:"200px",height:"200px"}}  alt="..."/>
              <a href="#" className=" btn-add">Add To Cart</a>
              </div>        
              <div className="">
                <p className="" style={{textAlign:"start",fontSize:"20px"}}>HAVIT HV-G92 Gamepad</p>
                <p className='' style={{textAlign:"start",color:"red"}}>price</p>
              </div>
            </div>
             <div className="card card-product">
              <div className="card-im-top" style={{width:"300px",backgroundColor:"whitesmoke"}}>
              <img src={keyboard} style={{width:"200px",height:"200px"}}  alt="..."/>
              <a href="#" className=" btn-add">Add To Cart</a>
              </div>        
              <div className="">
                <p className="" style={{textAlign:"start",fontSize:"20px"}}>HAVIT HV-G92 Gamepad</p>
                <p className='' style={{textAlign:"start",color:"red"}}>price</p>
              </div>
            </div>
             <div className="card card-product">
              <div className="card-im-top" style={{width:"300px",backgroundColor:"whitesmoke"}}>
              <img src={chair} style={{width:"200px",height:"200px"}}  alt="..."/>
              <a href="#" className=" btn-add">Add To Cart</a>
              </div>        
              <div className="">
                <p className="" style={{textAlign:"start",fontSize:"20px"}}>HAVIT HV-G92 Gamepad</p>
                <p className='' style={{textAlign:"start",color:"red"}}>price</p>
              </div>
            </div>
            <div className="card card-product">
              <div className="card-im-top" style={{width:"300px",backgroundColor:"whitesmoke"}}>
              <img src={ps} style={{width:"200px",height:"200px"}}  alt="..."/>
              <a href="#" className=" btn-add">Add To Cart</a>
              </div>        
              <div className="">
                <p className="" style={{textAlign:"start",fontSize:"20px"}}>HAVIT HV-G92 Gamepad</p>
                <p className='' style={{textAlign:"start",color:"red"}}>price</p>
              </div>
            </div>
            <div className="card card-product">
              <div className="card-im-top" style={{width:"300px",backgroundColor:"whitesmoke"}}>
              <img src={screen} style={{width:"200px",height:"200px"}}  alt="..."/>
              <a href="#" className=" btn-add">Add To Cart</a>
              </div>        
              <div className="">
                <p className="" style={{textAlign:"start",fontSize:"20px"}}>HAVIT HV-G92 Gamepad</p>
                <p className='' style={{textAlign:"start",color:"red"}}>price</p>
              </div>
            </div>
             <div className="card card-product">
              <div className="card-im-top" style={{width:"300px",backgroundColor:"whitesmoke"}}>
              <img src={keyboard} style={{width:"200px",height:"200px"}}  alt="..."/>
              <a href="#" className=" btn-add">Add To Cart</a>
              </div>        
              <div className="">
                <p className="" style={{textAlign:"start",fontSize:"20px"}}>HAVIT HV-G92 Gamepad</p>
                <p className='' style={{textAlign:"start",color:"red"}}>price</p>
              </div>
            </div>
             <div className="card card-product">
              <div className="card-im-top" style={{width:"300px",backgroundColor:"whitesmoke"}}>
              <img src={chair} style={{width:"200px",height:"200px"}}  alt="..."/>
              <a href="#" className=" btn-add">Add To Cart</a>
              </div>        
              <div className="">
                <p className="" style={{textAlign:"start",fontSize:"20px"}}>HAVIT HV-G92 Gamepad</p>
                <p className='' style={{textAlign:"start",color:"red"}}>price</p>
              </div>
            </div>             
          </div>         
        </div>
        </div>
        
      
      </div>
    </section> 

    <div className="containere" style={{paddingTop:"5rem"}}>
      <div className="row">
       <div className="">
       <img style={{width:"65%", height:"80%"}}src={slide2} alt="" />
       </div>
      </div>
      </div> 



      <section>
    <div className="container" style={{paddingTop:"3rem"}} >
      <div className="row">
        <div className="col-12">
          <h3 style={{textAlign:"start",color:"red"}}>Our Products</h3>

        </div>
        <div className="row">
          <div className="col-9">
            <h1 style={{textAlign:"start"}} >Explore Our Products</h1>
          </div>
          <div className="col-3">             
             <button onClick={()=>{switchView('')}} className='btn' style={{position:"absolute",backgroundColor:"red",color:"white"}}>View All</button>                 
          </div>
        </div>
      </div>
      <div className="row" style={{height:"100%",paddingTop:"2rem"}}>    
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





    </>
  )
}

export default HomePage;
