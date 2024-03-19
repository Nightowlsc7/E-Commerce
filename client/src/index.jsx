import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
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
      <h1>test</h1>
    
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
