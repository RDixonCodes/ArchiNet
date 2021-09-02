import { Router } from '@reach/router';
import React from 'react';
import Title from './Views/TitlePage';
import RegLogin from './Views/RegLogin';
import './App.css';
import ProjectList from './Components/Dashboard';
import ProjectForm from './Components/NewProject';
import Details from './Views/Details';

function App() {
  return (
    <div className="App">
    <Router>
      <Title path="/"/>
      <ProjectList path="/projects"/>
      <ProjectForm path="/projects/new"/>
      <Details path="/projects/:id"/>
      <RegLogin path="/reglogin"/>
    </Router>
    </div>
  );
}

export default App;
