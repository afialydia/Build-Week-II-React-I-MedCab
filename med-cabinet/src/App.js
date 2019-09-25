import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import ProfileCard from "./Components/ProfileCard";
import Profile from "./Components/Profile";
import Entrance from "./Components/Entrance";
import SearchForm from "./Components/SearchForm";
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import {ProtectedRoute} from './Components/ProtectedRoute'

function App() { 
  return (
    <div className="App">
      <Switch>
      <Route exact path='/' component={Entrance}/>
      <Route exact path='/search' component={SearchForm}/>
      <ProtectedRoute exact path='/profile' component={Profile}/>
      <Route path ="*" component={()=> "404 not found"}/>
      </Switch>
    </div>
    )
}

export default App;
