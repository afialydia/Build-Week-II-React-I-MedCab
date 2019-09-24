import React from 'react';
import Header from "./Components/Header";
import './App.css';
import ProfileCard from "./Components/ProfileCard";
import Entrance from "./Components/Entrance";
import SearchForm from "./Components/SearchForm";
import { Route } from 'react-router-dom';

function App() { 
  return (
    <div className="App">
      <Route exact path='/' component={Entrance}/>
      <Route exact path='/search' component={SearchForm}/>
      <Route exact path='/profile' component={ProfileCard}/>
    </div>
    )
}

export default App;
