import React from 'react'

const MyProducts = (props) => {
  return (
    <section>
    <div className="container" style={{paddingTop:"3rem"}} >
      <div className="row">
        <div className="col-12">
          <h3 style={{textAlign:"start",color:"red"}}>My Products</h3>

        </div>
        <div className="row">
          <div className="col-9">
            <h1 style={{textAlign:"start"}} >{props.category}</h1>
          </div>
          <div className="col-3">             
             <button  className='btn' style={{position:"absolute",backgroundColor:"red",color:"white"}}>View All</button>                 
          </div>
        </div>
      </div>
      <div className="row" style={{height:"23rem",paddingTop:"2rem"}}>    
      {props.data.map((e,i)=>{
             return ( 
                <div className="col-3" key={i} >
                    <div className="card card-product">
              <div className="card-im-top" style={{width:"300px",backgroundColor:"white"}}>
              <img src={e.imgUrl} style={{width:"200px",height:"200px"}}  alt="..."/>
             <div className="btn-add">
             <button className=" btn-update" onClick={()=>{
                props.getProductUpdate(e.id)
              }} >Update</button>
           
               <button className=" btn-delete" onClick={()=>{
                props.deleteProduct(e.id)
                
              }} >Delete</button>
                </div>
           
              </div>        
              <div className="">
                <p className=""  onClick={()=>{ 
                    props.selectOne(e.id)
                     props.switchView('OneProduct')

                   
                    }}  style={{textAlign:"start",fontSize:"20px"}}>{e.name}</p>
                <p className='' style={{textAlign:"start",color:"red"}}>{e.price}</p>
              </div>
            </div>
            
                </div>)

            })}
       </div>
         
     
    </div>
  </section>  
  )
}

export default MyProducts
