import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import Wishlist from './components/Wishlist.jsx'

const App = () => {
  const [data, setData] = useState([])
  useEffect(() => {
   
  }, [])

  return (
    <div>
<Wishlist/>    
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
