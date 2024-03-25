import React from 'react'
import style from '../css/NavBare.css'
import Wishlist  from '../images/heart.png'
import user  from '../images/user.png'
import search  from '../images/search.png'



const NavBarreLoged = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a className="navbar-brand" href="#" onClick={()=>{props.switchView('Home')}}>Exclusive</a>
      <div className="col-8">
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item active">
          <a className="nav-link" href="#" onClick={()=>{props.switchView('Home')}}>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"  onClick={()=>{props.switchView('Contact')}} >Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#" onClick={()=>{props.switchView('About')}} >About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#" onClick={()=>{
          
            props.filterMyProducts(props.profile.id)
            props.switchView('MyProducts')
            }} >My Products</a>
        </li>          
      </ul>
      </div>
     <div className='col-3' style={{display:"flex",gap:"1rem"}}>   
        <input className="" type="search"  style={{height:"32px",marginTop:"8px"}} placeholder="Search" aria-label="Search"/>
        <button className="btn my-2 my-sm-0"  type="submit">
          <img src={search} alt="" />
          </button>     
     <ul className=' mr-auto mt-2 mt-lg-0' style={{ gap:"20px",listStyleType:"none",display:"flex",paddingTop:"8px"}} >
     <li className="nav-item">
          <a className="nav-link " href="#" >Logout</a>
      </li>
     <li className="nav-item">
     <span className="nav-link" onClick={() => props.switchView('Cart')}>
          🛒
        </span>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#" onClick={()=>{props.switchView('Wishlist')}} >
            <img src={Wishlist} alt="" />
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#" onClick={()=>{props.switchView('Profile')}} >
            <img src={user} alt="" />
          </a>
        </li>
      </ul>
     </div>
     

    </div>
  </nav>
  )
}

export default NavBarreLoged
