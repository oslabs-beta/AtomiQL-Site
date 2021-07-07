import React from 'react';
import labels from './../assets/labels.js';
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
                <StyledButton className="btnStart">{labels.header.btnStart}</StyledButton>
                <a href="#about">
                    {<ExpandMoreIcon className="btnExpand" style={{ fontSize: 50 }}/>}
                </a>
            </div>
        )
    }
}

export default Header;