import React, { useState } from 'react'
import style from '../css/Singup.css'
import img from '../images/singup.jpg'


const LogIn = (props) => {
   
    const[email,setEmail]=useState("")
    const[psw,setPsw]=useState("")


   const loginprofile=()=>{
    const body={       
        email:email,
        password:psw
    }
    props.login(body)

   }

    
  return (
    <div>
        <div className="container-fluid" style={{paddingTop:"5rem",paddingBottom:"5rem"}}>
            <div className="row">
                <div className="col-6 ">
                    <div>
                        <img   className='imgsingup' src={img} alt="" />

                    </div>
              
                </div>
                <div className="col-6">
                <div className='singupBox'>
               
                    <div style={{paddingBottom:"3rem"}} >
                        <h1  className='titleSingup'>Create an account</h1>
                        <h5>Enter your details below</h5>
                    </div>
                        <div className="form-group">                        
                            <input type="email"  onChange={(e)=>{setEmail(e.target.value)}}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/> <br/>                          
                        </div>
                        <div className="form-group">
                            <input type="password"  onChange={(e)=>{setPsw(e.target.value)}}  className="form-control" id="exampleInputPassword1" placeholder="Password"/><br/>
                        </div>
                        <div className="form-check">
                          
                          
                        </div>
                        <button type="submit " className="submit-btn btn btn-primary" onClick={()=>{loginprofile()}}>Submit</button> <br/>

                        <label className="form-check-label">Already have account ? <span>Login in</span></label>
                        

                </div>
                </div>
            </div>
                    
        </div>
      
    </div>
  )
}

export default LogIn
