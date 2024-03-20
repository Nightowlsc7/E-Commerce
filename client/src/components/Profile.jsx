import React, { useState, useEffect } from 'react';
import axios from 'axios';
import style from '../css/Profile.css'

function Profile() {
  const [data, setData] = useState([]);
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    email: "",
    psw: "",
    location: ""
  });

  const fetchProfile = () => {
    axios.get("http://localhost:3000/api/user/profile")
      .then(res => {
        setData(res.data[0]);
        setProfile(res.data[0]);
      })
      .catch(err => console.log(err));
  }

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleUpdate = (id) => {
    axios.put(`http://localhost:3000/api/user/profile/${id}`, profile)
      .then(res => {
        console.log(res.data);
        setData(res.data);
      })
      .catch(err => console.log(err));
  }

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value
    });
  }

  return <div className='updateContainer'>
      <h2 className="proEdit">Edit Your Profile</h2>
      <section className='nonPsw'>
      <form>
      <label htmlFor="firstName">First Name</label><br />
        <input className="ftSection" type="text" name='firstName' placeholder={data.firstName} value={profile.firstName} onChange={handleChange} /><br />
        <label htmlFor="email">Email</label><br />
        <input className="ftSection" type="email" name="email" placeholder={data.email} value={profile.email} onChange={handleChange} />
      </form>
      <form>
        <label htmlFor="lastName">Last Name</label><br />
        <input className="ftSection" type="text" name="lastName" placeholder={data.lastName} value={profile.lastName} onChange={handleChange} /><br />
        <label htmlFor="adress">Adress</label><br />
        <input className="ftSection" type="text" name='location' placeholder={data.location} value={profile.location} onChange={handleChange} />
      </form>
      </section>
      <section className='pass'>
      <form className='passWrd'>
      <label htmlFor="passWrdChanges">Password changes</label><br />
        <input className='sdSection' type="password" name='currentPassword' placeholder='Current Password'/><br />
        <input className='sdSection'  type="password" name='newPassword'  placeholder='New Password'/><br />
        <input className='sdSection'  type="password" name='confirmPassword' placeholder='Confirm New Password'/><br />
      </form>
      </section>
      <button className='btn' onClick={()=>handleUpdate(data.id)}>Save Changes</button>
      <button className='Cbtn'>Cancel</button>
    </div>

}

export default Profile
