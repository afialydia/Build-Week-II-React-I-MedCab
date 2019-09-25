import React, { useState } from 'react';
import Header from "./Components/Header";
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Profile from "./Components/Profile";
import Entrance from "./Components/Entrance";
import SearchForm from "./Components/SearchForm";
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import {ProtectedRoute} from './Components/ProtectedRoute'


function App() { 

  // favorites state is accessible by both the ProfileCard and SearchForm components
  const [favorites, setFavorites] = useState([])

  return (
    <div className="App">
      <Switch>
      <Route exact path='/' component={Entrance}/>
      <Route exact path='/search' component={SearchForm}/>
      <ProtectedRoute exact path='/profile' component={Profile}/>
      <Route path ="*" component={()=> "404 not found"}/>
      </Switch>

      <Route exact path='/search' render={(props) => <SearchForm favorites={favorites} setFavorites={setFavorites}/>}/>
      <Route exact path='/profile' render={(props) => <Profile favorites={favorites}/>}/>

    </div>
    )
}

export default App;
