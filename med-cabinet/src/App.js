import React from 'react';
import Header from "./Components/Header";
import './App.css';
import ProfileCard from "./Components/ProfileCard";
import Entrance from "./Components/Entrance";

// <<<<<<< HEAD
// import { ProfileTitle } from "./Components/Styles";
// =======
// import Entrance from "./Components/Entrance";

// >>>>>>> 159e073f83d258d38daa1fddb434df88a103b892

function App() {
  return (
    <div className="App">
      <Header />
      {/* <ProfileTitle>Our Top Recommendations</ProfileTitle> */}
      <ProfileCard />
     <Entrance />
    </div>
  );
}

export default App;
