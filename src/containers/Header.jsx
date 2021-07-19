import React from 'react';
import labels from './../../public/assets/labels.js';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
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

class Header extends React.Component {
    render() {
        return (
            <div id="header">
                <img className="header-logo" src={labels.header.logo} />
                <div className="header-title">
                    {labels.header.headTitle}
                </div>
                <div className="header-subtitle">
                    {labels.header.headSubtitle}
                </div>
                <StyledButton className="btnStart" href={labels.header.npmPackageURL} target="_blank">
                    {labels.header.btnStart}
                </StyledButton>
                <Router>
                    <HashLink to="/#about" >
                        {<ExpandMoreIcon className="btnExpand" style={{ fontSize: 50 }}/>}
                    </HashLink>
                </Router>
            </div>
        )
    }
}

export default Header;
