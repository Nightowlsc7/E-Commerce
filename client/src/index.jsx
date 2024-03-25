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
import  Products  from './components/Products.jsx'
import AddProduct from './components/AddProduct.jsx'
import NavBarreLoged from './components/NavBarreLoged.jsx'
import NavBarreAdmin from './components/NavBarreAdmin.jsx'
import MyProducts from './components/MyProducts.jsx'
import UpdateMyProduct from './components/UpdateMyProduct.jsx'


const App = () => {
  const [data, setData] = useState([])
  const [view, setView] = useState("Home");
  const [profile, setProfile] = useState({});
  const [isLoged,setIsLoged]=useState(false)
  const [OneProduct, setOneProduct] = useState({});
  const [wishlist, setOneWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const [category,setCategory]=useState('All') 
  const [myProducts,setMyProducts]=useState([]) 



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
      setProfile(data.data.user)
      setIsLoged(true)
      switchView('Home')
      
    })
    .catch(()=>{})
  }
  const SelectByCategory = (category) => {
    axios.get(`http://localhost:3000/api/product/SearchByCategory/${category}`)

      .then((res) =>{
        setData(res.data)
        setCategory(category)
      }
      )
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
  const addProduct = (body)=>{
    try {
      axios.post('http://localhost:3000/api/product',body)
      .then(()=>{
        fetchProducts()
        setCategory('AllProducts')
        switchView('AllProducts')
       })
      .catch((err)=>{console.log(err);})
      // console.log(body);
    } catch (error) {
      throw error      
    }
  }
  const deleteProduct=(id)=>{
    // console.log(id);
    try {
      axios.delete(`http://localhost:3000/api/product/${id}`)
      .then(()=>{
        fetchProducts()
        switchView('Home')
      })
      .catch(()=>{})
      
    } catch (error) {
      
    }

  }
  const updateProduct=(id,body)=>{
    try {
      axios.patch(`http://localhost:5000/api/product/${id}`,body)
      .then(()=>{
        fetchProducts()
        switchView('Home')
      })
      .catch(()=>{})      
    } catch (error) {
      console.log(error);      
    }

  }
  const filterMyProducts=(userid)=>{
    axios.get(`http://localhost:3000/api/product/myProducts/${userid}`)
    .then((data)=>{
      setMyProducts(data.data.reverse())
      console.log(myProducts);
    })
    .catch(()=>{})

  }
  const getProductUpdate=(id)=>{
    selectOne(id)
    switchView('updateMyProducts')
  }

  return (
    <div>
      {isLoged 
      ? (profile.email==='admin'
      ?<NavBarreAdmin switchView ={switchView} profile={profile}/>
      :<NavBarreLoged   filterMyProducts={filterMyProducts}switchView ={switchView} profile={profile}/>)
      :<NavBare switchView ={switchView}/>}
       {view === 'Home' && <Home  SelectByName={SelectByName} SelectByCategory={SelectByCategory} addToCart={addToCart} addToWishList={addToWishList} switchView={switchView} data={data} selectOne={selectOne} />}
       {view === 'SingUp' && <SingUp registre={registre}  login={login } switchView={switchView} />}
       {view === 'LogIn' && <LogIn  login={login} />}
       {view === 'AddProduct' && <AddProduct  addProduct={addProduct} />}
       {view === 'OneProduct' && <ProductDetailsPage  OneProduct={OneProduct} addToCart={addToCart} addToWishList={addToWishList}  />}
       {view === 'AllProducts' && <Products category={category} data={data} addToCart={addToCart} addToWishList={addToWishList} selectOne={selectOne} switchView={switchView}  />}
       {view === 'MyProducts' && <MyProducts getProductUpdate={getProductUpdate} deleteProduct={deleteProduct} category={category} data={myProducts} addToCart={addToCart} addToWishList={addToWishList} selectOne={selectOne} switchView={switchView}  />}
       {view === 'updateMyProducts' && <UpdateMyProduct  updateProduct={updateProduct} OneProduct={OneProduct} />}
       {view === 'Contact' && <Contact  />}
       {view === 'About' && <About  />}
       {view === 'Cart' && <Cart cart={cart} />}
       {view === 'Wishlist' && <Wishlist wishlist={wishlist} />}
       {view === 'Profile' && <Profile  profile={profile}/>}
       { <Footer/> }
    </div> 
  )
}

ReactDOM.render(<App />, document.getElementById('app'))