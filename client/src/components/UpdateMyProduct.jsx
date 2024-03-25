import React, {useState } from 'react'

const UpdateMyProduct = (props) => {
    const [name,setName]=useState(props.OneProduct.name)
    const [price,setPrice]=useState(props.OneProduct.price)
    const [description,setDescription]=useState(props.OneProduct.description)
    const [categories,setcategories]=useState("categories")
    const [imageUrl,setImageUrl]=useState(props.OneProduct.imgUrl)
    const [color,setcolor]=useState(props.OneProduct.color)
    const [size,setsize]=useState(props.OneProduct.size)

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
    props.updateProduct(body)
}

  return (
    <div className='container'>
        {console.log(props.OneProduct)}
            <p>name:</p>
               <input placeholder={props.OneProduct.name} onChange={(e)=>{setName(e.target.value)}}/> <br/>
               <p>price:</p>
                <input name="price" placeholder={props.OneProduct.price} onChange={(e)=>{setPrice(e.target.value)}}/> <br/>

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
                <input name="color" placeholder={props.OneProduct.color} onChange={(e)=>{setcolor(e.target.value)}}/> <br/>

                <p>size:</p>
                <input name="size" placeholder={props.OneProduct.placeholder} onChange={(e)=>{setsize(e.target.value)}}/> <br/>



                <p>description:</p>        
                <input name="description" placeholder={props.OneProduct.description} onChange={(e)=>{setDescription(e.target.value)}} /><br/>
                
                <p>imageUrl:</p>        
                <input name="imageUrl" placeholder={props.OneProduct.imageUrl} onChange={(e)=>{setImageUrl(e.target.value)}} /><br/>

                <button onClick={()=>{submitProduct()}}>Add Product </button>

       

      
    </div>
  )
}
export default UpdateMyProduct
