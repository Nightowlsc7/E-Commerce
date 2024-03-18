import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import Home from './components/Home.jsx'

const App = () => {
  const [data, setData] = useState([])
  useEffect(() => {
   
  }, [])

  return (
    <div>

      <Home/>
    
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
