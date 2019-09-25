import React, { useState } from 'react';
import Header from "./Components/Header";
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import ProfileCard from "./Components/ProfileCard";
import Profile from "./Components/Profile";
import TestProfile from "./Components/TestProfile";
import Entrance from "./Components/Entrance";
import SearchForm from "./Components/SearchForm";
import { Route } from 'react-router-dom';


function App() { 

  // favorites state is accessible by both the ProfileCard and SearchForm components
  const [favorites, setFavorites] = useState([])

  return (
    <div className="App">
      <Route exact path='/' component={Entrance}/>
      <Route exact path='/search' render={(props) => <SearchForm favorites={favorites} setFavorites={setFavorites}/>}/>
      <Route exact path='/profile' render={(props) => <ProfileCard favorites={favorites} setFavorites={setFavorites}/>}/>
      <Route exact path='/testprofile' render={(props) => <TestProfile favorites={favorites}/>}/>
    </div>
    )
}

export default App;
