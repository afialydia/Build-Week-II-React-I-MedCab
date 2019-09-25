import React from 'react';
import './App.css';
<<<<<<< HEAD
=======
import 'semantic-ui-css/semantic.min.css';
import ProfileCard from "./Components/ProfileCard";
>>>>>>> 8e848e86be28629f7c4e34aa4b7fa9a4464cb348
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
