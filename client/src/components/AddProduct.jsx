import React, {useState } from 'react'

const AddProduct = (props) => {
    const [name,setName]=useState("")
    const [price,setPrice]=useState("")
    const [description,setDescription]=useState("")
    const [categories,setcategories]=useState("categories")
    const [imageUrl,setImageUrl]=useState("")
    const [color,setcolor]=useState("")
    const [size,setsize]=useState("")

const submitProduct=()=>{
   const  body={
        name:name,
        price:price,
        description:description,
        category:categories,
        imgUrl:imageUrl,
        color:color,
        size:size
    }
    props.addProduct(body)
}

  return (
    <div className='container'>
            <p>name:</p>
               <input onChange={(e)=>{setName(e.target.value)}}/> <br/>
               <p>price:</p>
                <input name="price" onChange={(e)=>{setPrice(e.target.value)}}/> <br/>

                <p>categories:</p>                 
                <select name="categories"  onChange={e => setcategories(e.target.value)} >
                    <option value="Woman's Fashion">Woman's Fashion</option>
                    <option value="Men's Fashion">Men's Fashion</option>
                    <option value="electronics">Electronics</option>
                    <option value="Home & Lifestyle">Home & Lifestyle</option>
                    <option value="Medicine">Medicine</option>
                    <option value="Sports & Outdoor">Sports & Outdoor</option>
                    <option value="Baby’s & Toys">Baby’s & Toys</option>
                    <option value="Groceries & Pets">Groceries & Pets</option>
                    <option value="Health & Beauty">Health & Beauty</option>
                    <option value="electronics">Electronics</option>

                </select ><br/>

                <p>color:</p>
                <input name="color" onChange={(e)=>{setcolor(e.target.value)}}/> <br/>

                <p>size:</p>
                <input name="size" onChange={(e)=>{setsize(e.target.value)}}/> <br/>



                <p>description:</p>        
                <input name="description" onChange={(e)=>{setDescription(e.target.value)}} /><br/>
                
                <p>imageUrl:</p>        
                <input name="imageUrl" onChange={(e)=>{setImageUrl(e.target.value)}} /><br/>

                <button onClick={()=>{submitProduct()}}>Add Product </button>

       

      
    </div>
  )
}

export default AddProduct
