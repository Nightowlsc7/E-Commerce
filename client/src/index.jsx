import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import About from './components/about.jsx'
import Wishlist from './components/Wishlist.jsx'
import Justforyou from './components/Justforyou.jsx'
import axios from 'axios'
import $ from 'jquery'


const App = () => {
  const [data, setData] = useState([])
  useEffect(() => {
   
  }, [])




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
<Wishlist/>
<Justforyou/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
