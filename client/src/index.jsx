import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import Profile from './components/Profile.jsx'

const App = () => {
  const [data, setData] = useState([])
  useEffect(() => {
   
  }, [])

  return (
  <Profile/>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
