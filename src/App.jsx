import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {
  faCaretSquareLeft, faCaretSquareRight, faEnvelope
} from '@fortawesome/free-solid-svg-icons';
import { fab, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import About from './containers/About';
import Portfolio from './containers/Portfolio';
import Contact from './containers/Contact';
import Header from './containers/Header';
import Navigation from './components/Navigation';

library.add(fab, faLinkedin, faGithub, faCaretSquareLeft, faCaretSquareRight, faEnvelope);

function App() {
  return (
    <div className="main-container">
      <Router>
        <div className="sub-container">
          <Header />
          <Navigation />
          <Route exact path="/" component={() => <About />} />
          <Route exact path="/about" component={() => <About />} />
          <Route exact path="/portfolio" component={() => <Portfolio />} />
          <Route exact path="/contact" component={() => <Contact />} />
        </div>
      </Router>
    </div>
  );
}

export default App;
