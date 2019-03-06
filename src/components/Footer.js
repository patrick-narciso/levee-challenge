import React from 'react';
import { styled } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Footer = () => {
  return (
    <div>
      <FooterBar position="fixed">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Powered by Patrick Narciso
          </Typography>
        </Toolbar>
      </FooterBar>
    </div>
  );
};

const FooterBar = styled(AppBar)({
  background: '#323232 !important',
  top: 'auto !important',
  bottom: '0',
});

export default Footer;