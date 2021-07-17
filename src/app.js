import React from 'react';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import Header from './containers/Header.jsx';
import About from './containers/About.jsx';
import Docs from './containers/Docs.jsx';
import Demo from './containers/Demo.jsx';
import Footer from './containers/Footer.jsx';
import './../public/stylesheets/styles.css';
import { Typography, AppBar, Toolbar, Tabs, Tab } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';

const StyledAppBar = withStyles({
  root: {
    background: '#051522',
    color: '#E59964',
    height: 60,
    padding: '0 5%',
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
      <Router>
            <StyledAppBar position="fixed">
                <Toolbar>
                    <Typography variant="h6" color="inherit">
                        <a href="/" style={{ color: "inherit", textDecoration: "none", paddingLeft: "30px" }}>AtomiQL</a>
                    </Typography>
                    <StyledTabs>
                        <StyledTab label="About" component={HashLink} to="/#about" />
                        <StyledTab label="Docs" component={HashLink} to="/docs" />
                        <StyledTab label="Demo" component={HashLink} to="/#demo" />
                        <StyledTab label="Team" component={HashLink} to="/#footer" />
                        <StyledTab label="" icon={<GitHubIcon/>} href="https://github.com/oslabs-beta/AtomiQL" target="_blank" />
                    </StyledTabs>
                </Toolbar>
            </StyledAppBar>

        <Switch>
          <Route exact path="/">
            <Header />
            <About />
            <Demo />
            <Footer />
          </Route> 
          <Route path="/docs">
            <Docs />
          </Route>
        </Switch>
      </Router>
    </>
  );
 }
};

export default App;