import React from 'react';
import { styled } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Header = () => {
  return (
    <div>
      <HeaderBar position="fixed">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Levee Challenge
          </Typography>
        </Toolbar>
      </HeaderBar>
    </div>
  );
};

const HeaderBar = styled(AppBar)({
  background: '#00c662 !important',
});

export default Header;