import React from 'react';
import { Route, Switch } from 'react-router-dom';
import VisitorLogin from './pages/VisitorLogin';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <div className="App">
      <div>
      <Switch>
        <Route exact path="/" component={VisitorLogin} />
        <Route path="/home" component={Home} />
        <Route path="/aboutme" component={AboutMe} />
        <Route path="/projects" component={Projects} />
      </Switch>
    </div>
    </div>
  );
}

export default App;
