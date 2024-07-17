import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import the CSS file here

function Login() {
  const [formData, setFormData] = useState({
    user_email: '',
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

    axios.post('https://syoft.dev/Api/userlogin/api/userlogin', formData)
      .then(response => {
        console.log(response.data);
        localStorage.setItem('user', JSON.stringify(response.data));
        navigate('/dashboard');
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };

  return (
    <div className="login">
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" name="user_email" value={formData.user_email} onChange={handleChange} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="user_password" value={formData.user_password} onChange={handleChange} required />
        </div>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default Login;



