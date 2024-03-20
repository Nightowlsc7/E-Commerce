import React,{useState,useEffect} from 'react'
import axios from 'axios'
import style from '../css/Profile.css'
function Profile() {
    const [data,SetData]=useState({})
    const [profile,setProfile]=useState({
      firstName:"",
      lastName:"",
      email:"",
      psw:"",
      gendre:"",
      location:""
    })
const fetch=()=>{
  axios.get("http://localhost:3000/api/user/profile")
.then(res=>{
  SetData(res.data[0])})
.catch(err=>console.log(err))
}


useEffect(()=>fetch(),[])

// const handleUpdate=(id)=>{
//   axios.put(`http://localhost:3000/api/user/profile/${id}`,profile)
//   .then(res=>console.log(res))
//   .catch(err=>console.log(err))
// }

const handleChange=(e)=>{
  setProfile([e.target.name]=e.target.value)
}

  return <div className='updateContainer'>
      <h2 className="proEdit">Edit Your Profile</h2>
      {/* <h4>Welcome! {data.firstName} {data.lastName}</h4> */}
      <section className='nonPsw'>
      <form>
        <label htmlFor="firstName">First Name</label><br />
        <input className="ftSection"  type="text" name='firstName' placeholder={data.firstName} onChange={handleChange} /><br />
        <label htmlFor="email">Email</label><br />
        <input className="ftSection" type="email" name="email" placeholder={data.email} onChange={handleChange} />
      </form>
      <form>
        <label htmlFor="lastName">Last Name</label><br />
        <input className="ftSection" type="text" name="lastName" placeholder={data.lastName} onChange={handleChange} /><br />
        <label htmlFor="adress">Adress</label><br />
        <input className="ftSection" type="text" name='location' placeholder={data.location} onChange={handleChange} />
      </form>
      </section>
      <section className='pass'>
      <form className='passWrd'>
      <label htmlFor="passWrdChanges">Password changes</label><br />
        <input className='sdSection' type="password" placeholder='Current Password' onChange={handleChange}/><br />
        <input className='sdSection'  type="password" placeholder='New Password' onChange={handleChange}/><br />
        <input className='sdSection'  type="password" placeholder='Confirm New Password' onChange={handleChange}/><br />
      </form>
      </section>
      <button className=' btn profile-btn' onClick={()=>handleUpdate(data.id)}>Save Changes</button>
      <button className='Cbtn'>Cancel</button>
    </div>
}

export default Profile
