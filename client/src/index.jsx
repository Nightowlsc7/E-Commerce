import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'


const App = () => {
  const [data, setData] = useState([])
  useEffect(() => {
   
  }, [])

  return (
    <div>
      <h1>test</h1>
    
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
