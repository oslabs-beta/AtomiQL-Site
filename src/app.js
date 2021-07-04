import React from 'react';
import Profile from './components/Profile.jsx';
import './stylesheets/styles.css';
import labels from './assets/labels.js';
import { Button, Typography, AppBar, Toolbar, Tabs, Tab } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const StyledButton = withStyles({
    root: {
      background: '#051522',
      borderRadius: 20,
      border: '1px solid white',
      color: '#F0F1F3',
      height: 40,
      fontSize: 16,
      margin: '20px',
      padding: '0 30px'
    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);

const StyledAppBar = withStyles({
    root: {
      background: '#051522',
      color: '#E59964',
      height: 60,
      padding: '0 10%',
      fontSize: 20,
      fontWeight: 'bold',
      boxShadow: 'none',
    },
})(AppBar);

const StyledTabs = withStyles({
    root: {
      color: '#F0F1F3',
      marginLeft: 'auto',
    },
    tab: {
      width: 100,
      minWidth: 100,
    }
})(Tabs);

const StyledTab = withStyles({
    root: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#F0F1F3',
      width: 100,
      minWidth: 100,
      textTransform: 'none', 
      textAlign: 'right',
    },
})(Tab);

class App extends React.Component {
 render() {
  return (
    <>
        <StyledAppBar position="fixed">
            <Toolbar>
                <Typography variant="h6" color="inherit">
                    <a href="#header" style={{ color: "inherit", textDecoration: "none" }}>AtomiQL</a>
                </Typography>
                <StyledTabs>
                    <StyledTab label="About" href="#about" />
                    <StyledTab label="Docs" />
                    <StyledTab label="Demo" href="#demo" />
                    <StyledTab label="Team" href="#footer" />
                    <StyledTab label="" icon={<GitHubIcon/>} href="https://github.com/oslabs-beta/AtomiQL" target="_blank" />
                </StyledTabs>
            </Toolbar>
        </StyledAppBar>
        <div id="header">
            <img className="header-logo" src={labels.header.logo} />
            <div className="header-title">
                {labels.header.headTitle}
            </div>
            <div className="header-subtitle">
                {labels.header.headSubtitle}
            </div>
            <StyledButton className="btnStart">Get Started</StyledButton>
            <a href="#about">
                {<ExpandMoreIcon className="btnExpand" style={{ fontSize: 50 }}/>}
            </a>
        </div>
        <div id="about">
            {labels.about}
        </div>
        <div id="demo">
            demo placeholder
        </div>
        <div id="footer">
            {labels.team.title}
            <div className="team">
                {labels.team.members.map((member) => 
                    <Profile photo={member.photo}
                        name={member.name}
                        github={member.github}
                        title={member.title}
                        githubURL={member.githubURL}
                        linkedinURL={member.linkedinURL}
                    />
                )}
            </div>
            <div className="footer-links">
                {labels.footer.linkSections.map((section, el) => 
                    <div className="footer-link-section">
                        {section}
                        {labels.footer.links[el].map((link) => 
                            <a href={link.linkURL}>{link.title}</a>
                        )}
                    </div>
                )}
            </div>
            <div className="footer-copyright">
                {labels.footer.copyright}
            </div>
        </div>
    </>
  );
 }
};

export default App;