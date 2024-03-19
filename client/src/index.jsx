import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import Cart from './components/Cart.jsx'
// import NavBare from './components/NavBare.jsx'
import Home from './components/Home.jsx'
import $ from 'jquery'


const App = () => {
  const [data, setData] = useState([])
   //change name (Home )
   const [view, setView] = useState("Home");
  useEffect(() => {
   
  }, [])
  const switchView = (option) => {
    setView(option);
  };
  return (
    <div>
<Wishlist/>    
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
