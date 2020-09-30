import React from 'react';
import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router,Route } from "react-router-dom";

import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.component.js";
import EditExercise from "./components/edit-exercise.component.js";
import CreateExercise from "./components/create-exercise.component.js";
import CreateUser from "./components/create-user.component.js"



function App() {
  return (
    <Router>
      <Navbar/>
      <br/>
      <Route path="/" exact component={ExercisesList} />
      <Route path="/edit/:id" component={EditExercise}/>
      <Route path="/create" component={CreateExercise}/>
      <Route path="/user" component={CreateUser} />    
    </Router>
  );
}

export default App;
