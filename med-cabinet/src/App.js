import React from 'react';
import Header from "./Components/Header";
import './App.css';
import ProfileCard from "./Components/ProfileCard";
import Entrance from "./Components/Entrance";


function App() {
  return (
    <div className="App">
      <Header />
      <ProfileCard />
     <Entrance />
    </div>
  );
}

export default App;
