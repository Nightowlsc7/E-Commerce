import React from 'react'
import style from '../css/Singup.css'
import img from '../images/singup.jpg'

const SingUp = () => {
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
                <form>
                    <div style={{paddingBottom:"3rem"}} >
                        <h1  className='titleSingup'>Create an account</h1>
                        <h5>Enter your details below</h5>
                    </div>
                    <div className="form-group">
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name"/><br/>
                           
                        </div>
                        <div className="form-group">                        
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/> <br/>                          
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/><br/>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit " className="submit-btn btn btn-primary">Submit</button> <br/>

                        <label className="form-check-label" for="exampleCheck1">Already have account ? <span>Login in</span></label>
                        </form>

                </div>
                </div>
            </div>
                    
        </div>
      
    </div>
  )
}

export default SingUp
