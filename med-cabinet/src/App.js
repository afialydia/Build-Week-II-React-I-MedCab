import React from 'react';
import './App.css';
import Entrance from "./Components/Entrance";
import SearchForm from "./Components/SearchForm";
import { Route } from 'react-router-dom';



function App() { 
  return (
    <div className="App">
     <Entrance />
    </div>

    <Route path='/search' component={SearchForm}/>
  );
}

export default App;
