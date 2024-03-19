import React, { useState } from 'react'

function Search(props) {
    const [name,setName]=useState("")
  return (
       <div> 
     
<input type="text" 
placeholder='search' 
onChange={(e) => setName(e.target.value)} />  
              
<button onClick={()=>props.searchName(name)} > what are you looking for?</button>
      </div> 
  )
}

export default Search
