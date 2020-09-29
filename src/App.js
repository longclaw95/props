import React from 'react';

import './App.css';
import Photo from './cv_photo.png'
import Profile from './profile/Profile.js'


function App() {
  const handleClick = (x) => {
    
    
    alert(`Hello ${x}`)
  };
  return (
    <div className="App">
      <Profile fullname ="wassim zeddini" bio="paragraph" profession="fullstack JS developer" handleClick={handleClick}>
        <img src={Photo}></img>
      </Profile>
      
    </div>
  );
}

export default App;
