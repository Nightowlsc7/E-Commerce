import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import About from './components/About.jsx'
import Wishlist from './components/Wishlist.jsx'
import Justforyou from './components/Justforyou.jsx'
import axios from 'axios'
import NavBare from './components/NavBare.jsx'
import Home from './components/Home.jsx'
import Cart from './components/Cart.jsx'
import Profile from './components/Profile.jsx'
import SingUp from './components/SingUp.jsx'
import Contact from './components/Contact.jsx'
import  Footer  from './components/Footer.jsx'
import LogIn from './components/LogIn.jsx'
import ProductDetailsPage from './components/Productdetails.jsx'


const App = () => {
  const [data, setData] = useState([])
  const [view, setView] = useState("Home");
  const [profile, setProfile] = useState({});
  const [OneProduct, setOneProduct] = useState({});
  const [wishlist, setOneWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchProducts()
  }, [])
  const fetchProducts=()=>{
    axios.get(`http://localhost:3000/api/product`)
    .then((data)=>{setData(data.data.reverse())})
    .catch(()=>{})
  }
  const switchView = (option) => {
    setView(option);
  };
  const registre =(body)=>{
    axios.post(`http://localhost:3000/api/user/register`,body)
    .then(()=>{switchView('LogIn')})
    .catch((err)=>{console.log(err);})
  }
  const login =(body)=>{
    axios.post(`http://localhost:3000/api/user/login`,body)
    .then((data)=>{
      setProfile(data.data)
      switchView('Home')
      
    })
    .catch(()=>{})
  }
  const SelectByCategory = (category) => {
    axios.get(`http://localhost:3000/api/product/SearchByCategory/${category}`)

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
      .then((data) =>{
        setOneProduct(data.data[0])
      })
      .catch((err) => console.log(err))
  }
  const addToCart=(body)=>{    
    setCart([...cart,body])
    console.log(cart);
  }
  const addToWishList=(body)=>{
    setOneWishlist([...wishlist,body])
  }





  return (

    <div>
      <NavBare switchView ={switchView}/>
       {view === 'Home' && <Home  addToCart={addToCart} addToWishList={addToWishList}switchView={switchView} data={data} selectOne={selectOne} />}
       {view === 'Contact' && <Contact  />}
       {view === 'About' && <About  />}
       {view === 'Sign Up' && <Home  />}
       {view === 'Cart' && <Cart cart={cart} />}
       {view === 'Wishlist' && <Wishlist wishlist={wishlist} />}
       {view === 'Profile' && <Profile  />}
       {view === 'SingUp' && <SingUp registre={registre}  login={login } switchView={switchView} />}
       {view === 'LogIn' && <LogIn  login={login} />}
       {view === 'OneProduct' && <ProductDetailsPage  OneProduct={OneProduct} addToCart={addToCart} addToWishList={addToWishList}  />}
       {/* <Footer/> */}
    </div>

 
  )
}

ReactDOM.render(<App />, document.getElementById('app'))