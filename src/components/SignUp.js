import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './SignUp.css'; // Import the CSS file here

function SignUp() {
  const [formData, setFormData] = useState({
    user_firstname: '',
    user_email: '',
    user_phone: '',
    user_password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      ...formData,
      user_lastname: 'ni',
      user_city: 'Hyderabad',
      user_zipcode: '500072'
    };

    axios.post('https://syoft.dev/Api/user_registeration/api/user_registeration', data)
      .then(response => {
        console.log(response.data);
        navigate('/login');
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };

  return (
    <div className="signup">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input type="text" name="user_firstname" value={formData.user_firstname} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="user_email" value={formData.user_email} onChange={handleChange} required />
        </div>
        <div>
          <label>Phone:</label>
          <input type="text" name="user_phone" value={formData.user_phone} onChange={handleChange} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="user_password" value={formData.user_password} onChange={handleChange} required />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;



