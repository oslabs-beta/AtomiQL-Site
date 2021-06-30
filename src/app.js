import React from 'react';
// import Wrapper from './containers/MainContainer.jsx';
import './stylesheets/styles.css';
import { BrowserRouter as Router } from 'react-router-dom';
import labels from './assets/labels.js';

class App extends React.Component {
 render() {
  return (
    <Router>
        <div className="header">
            <div className="nav"> 
                AtomiQL 
            </div>
            <div className="header-title">
                {labels.headTitle}
            </div>
            <div className="header-subtitle">
                {labels.headSubtitle}
            </div>
            <button>Get Started</button>
        </div>
        <div className="about">
            {labels.about}
        </div>
        <div className="demo">
            demo
        </div>
        <div className="footer">
            <div className="team">
                team
            </div>
        </div>
    </Router>
  );
 }
};

export default App;