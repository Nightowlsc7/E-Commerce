
import React from 'react'
import style from '../css/NavBare.css'
import Wishlist  from '../images/heart.png'
import user  from '../images/user.png'


const NavBarreAdmin = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a className="navbar-brand" href="#">Exclusive</a>
      <div className="col-8">
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item active">
          <a className="nav-link" href="#" onClick={()=>{props.switchView('Home')}}>Home</a>
        </li>   
        <li className="nav-item">
          <a className="nav-link " href="#" onClick={()=>{props.switchView('AddProduct')}} >ADD products</a>
        </li>        
      </ul>
      </div>
     <div className='col-4' style={{float:"left",margin:"auto",display:"flex",gap:"1rem"}}>   
        <input className="" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>     
     <ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
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

export default NavBarreAdmin
