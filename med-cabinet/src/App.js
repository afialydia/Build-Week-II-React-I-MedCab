import React from 'react';
import './App.css';
import Entrance from "./Components/Entrance";
import SearchForm from "./Components/SearchForm";
import { Route } from 'react-router-dom';


function App() { 
  return (
    <div className="App">
    <Route exact path='/' component={Entrance}/>
    <Route exact path='/search' component={SearchForm}/>
    </div>
  );
}

export default App;
