import React, { Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Dashboard from './components/dashboard/dashboard';
import Navbar from './components/navbar/navbar';
import Project from './components/project/projects';
import './App.css';

class App extends Component{
  render(){
    return (
      <Router>
      <div className="App">
        <Navbar />
        <Dashboard />
        <Project />
      </div>
      </Router>
    );
  }
 
}

export default App;
