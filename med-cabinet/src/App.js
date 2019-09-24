import React from 'react';
import Header from "./Components/Header";
import './App.css';
import ProfileCard from "./Components/ProfileCard";
// import { ProfileTitle } from "./Components/Styles";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <ProfileTitle>Our Top Recommendations</ProfileTitle> */}
      <ProfileCard />
    </div>
  );
}

export default App;
