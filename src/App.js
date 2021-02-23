import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container app__container">
          <div className="row app__row">
            <div className="col-lg-3">
              <Sidebar />
            </div>
            <div className="col-lg-9 app__main">
              <Navbar />
              <Switch>
                <Route path="/" exact="true">
                  <About />
                </Route>
                <Route path="/resume" exact="true">
                  <Resume />
                </Route>
                <Route path="/projects" exact="true">
                  <Projects />
                </Route>
                <Route>
                  <Redirect to="/" />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
