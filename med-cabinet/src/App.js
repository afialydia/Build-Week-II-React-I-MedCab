import React from 'react';
import './App.css';
import Profile from "./Components/Profile";
import Entrance from "./Components/Entrance";
import SearchForm from "./Components/SearchForm";
import { Route } from 'react-router-dom';


function App() { 
  return (
    <div className="App">
      <Route exact path='/' component={Entrance}/>
      <Route exact path='/search' component={SearchForm}/>
      <Route exact path='/profile' component={Profile}/>
    </div>
    )
}

export default App;
