import React from 'react';
import Header from './containers/Header.jsx';
import About from './containers/About.jsx';
import Demo from './containers/Demo.jsx';
import Footer from './containers/Footer.jsx';
import './stylesheets/styles.css';
import { Typography, AppBar, Toolbar, Tabs, Tab } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';

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
        <Header />
        <About />
        <Demo />
        <Footer />
    </>
  );
 }
};

export default App;