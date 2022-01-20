import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Editor from "./Editor";
import Home from './Home';
import Navbar from './Navbar';

const App =() => {
  return (
    <>
    <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/> 
          <Route exact path="/editor" component={Editor}/> 
          <Redirect to="/" />        
        </Switch>
    
    </>
  )
}

 export default App;

