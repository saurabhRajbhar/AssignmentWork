import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserProfile from './User/UserProfile';
function App() {
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?page=1&results=1&seed=abc');
        setUserProfile(response.data.results[0]);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <div className="App">
      <UserProfile userProfile={userProfile} />
    </div>
  );
}

export default App;
