import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import Cart from './components/Cart.jsx'
import NavBare from './components/NavBare.jsx'
import Home from './components/Home.jsx'
import $ from 'jquery'
import Wishlist from './components/Wishlist.jsx'
import About from './components/about.jsx'


const App = () => {
  const [data, setData] = useState([])
   //change name (Home )
   const [view, setView] = useState("Home");
  useEffect(() => {
   
  }, [])
  const switchView = (option) => {
    setView(option);
  };


  const SelectByCategory = (name) => {
    axios.get(`http://localhost:3000/api/product/SearchByCategory/${name}`)
    
      .then((res) =>   setData(res.data))
      .catch((err) => console.log(err))
  } 
   const SelectByName = (name) => {
    axios.get(`http://localhost:3000/api/product/SearchByName/${name}`)
    
      .then((res) =>   setData(res.data))
      .catch((err) => console.log(err))
  }

  const selectOne = (id) => {
    axios.get(`http://localhost:3000/api/product/SearchById/${id}`)
    
      .then((res) =>   setData(res.data))
      .catch((err) => console.log(err))
  }
  return (
    <div>
    <div className="nav">
     <span
       className="logo"
       onClick={() => {
         switchView("Home");
         // fetch();
       }}
     >
       Home
     </span>
     <span className="items" onClick={() => switchView("🛒")}>
       🛒
     </span>
 
   </div>
   {view === "🛒" && <Cart />}
   {view === "Home" && <Home />}
   <div>
{/* <Wishlist/>     */}
    </div>
 </div>
 
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
