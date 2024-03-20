import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import About from './components/about.jsx'
import Search from './components/Search.jsx'
import axios from 'axios'
import Contact from './components/Contact.jsx'
import Footer from "./components/Footer.jsx"
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
      {/* <Search/> */}
      {/* <h1>test</h1> */}
      <Contact/>
    {/* <About/> */}
    <Footer/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
