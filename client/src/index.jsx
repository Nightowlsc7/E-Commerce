import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import About from './components/about.jsx'
import Wishlist from './components/Wishlist.jsx'
import Justforyou from './components/Justforyou.jsx'
import axios from 'axios'
import NavBare from './components/NavBare.jsx'
import Home from './components/Home.jsx'
import $ from 'jquery'
import Cart from './components/Cart.jsx'
import Profile from './components/Profile.jsx'
import SingUp from './components/SingUp.jsx'


const App = () => {
  const [data, setData] = useState([])
  const [view, setView] = useState("Home");


  useEffect(() => {
   
  }, [])


  const switchView = (option) => {
    setView(option);
  };


  // const SelectByCategory = (name) => {
  //   axios.get(`http://localhost:3000/api/product/SearchByCategory/${name}`)
    
  //     .then((res) =>   setData(res.data))
  //     .catch((err) => console.log(err))
  // } 
  //  const SelectByName = (name) => {
  //   axios.get(`http://localhost:3000/api/product/SearchByName/${name}`)
    
  //     .then((res) =>   setData(res.data))
  //     .catch((err) => console.log(err))
  // }

  // const selectOne = (id) => {
  //   axios.get(`http://localhost:3000/api/product/SearchById/${id}`)
    
  //     .then((res) =>   setData(res.data))
  //     .catch((err) => console.log(err))
  // }
  return (
    
    <div>
      <h1>test</h1>
    
    </div>

 
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
