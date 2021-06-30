import React from 'react';
// import Wrapper from './containers/MainContainer.jsx';
import Profile from './components/Profile.jsx';
import './stylesheets/styles.css';
import { BrowserRouter as Router } from 'react-router-dom';
import labels from './assets/labels.js';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const StyledButton = withStyles({
    root: {
      background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
      borderRadius: 5,
      border: 0,
      color: 'white',
      height: 35,
      padding: '0 30px',
      boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
    },
    label: {
      textTransform: 'uppercase',
    },
  })(Button);

class App extends React.Component {
 render() {
  return (
    <Router>
        <div className="header">
            <div className="nav"> 
                AtomiQL 
            </div>
            <div className="header-title">
                {labels.header.headTitle}
            </div>
            <div className="header-subtitle">
                {labels.header.headSubtitle}
            </div>
            <StyledButton>Get Started</StyledButton>
        </div>
        <div className="about">
            {labels.about}
        </div>
        <div className="demo">
            demo
        </div>
        <div className="footer">
            Team
            <div className="team">
                {labels.team.map((member) => 
                    <Profile photo={member.photo}
                        name={member.name}
                        github={member.github}
                        title={member.title}
                        githubURL={member.githubURL}
                        linkedinURL={member.linkedinURL}
                    />
                )}
            </div>
        </div>
    </Router>
  );
 }
};

export default App;