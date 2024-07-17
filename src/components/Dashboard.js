import React from 'react';
import './Dashboard.css'; // Import the CSS file here

function Dashboard() {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      {user ? (
        <div>
          <p>First Name: {user.user_firstname}</p>
          <p>Email: {user.user_email}</p>
          <p>Phone: {user.user_phone}</p>
          {/* Add more user details as needed */}
        </div>
      ) : (
        <p>No user data available</p>
      )}
    </div>
  );
}

export default Dashboard;



