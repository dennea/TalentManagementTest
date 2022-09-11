import * as React from 'react';
import { AppBar, CssBaseline, Box,Toolbar, Typography, Button, IconButton} from '@material-ui/core';
import MenuIcon from "@material-ui/icons/Menu";
import { useNavigate } from "react-router-dom";

export default function ButtonAppBar() {
  let navigate = useNavigate(); 
  const handleRegisterClick = () => {
    navigate('/register', {replace: true});
  };
  const handleLoginClick = () => {
    navigate('/login', {replace: true});
  };
  const handleHomeClick = () => {
    navigate('/', {replace: true});
  };
  return (
    <div>
      <div>
       <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static"  color='default'>
          <CssBaseline />
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Talent Management
              </Typography>
              <Button color="inherit" onClick={handleHomeClick}>Home</Button>
              <Button color="inherit" onClick={handleLoginClick}>Login</Button>
              <Button color="inherit" onClick={handleRegisterClick}>Sign Up</Button>
            </Toolbar>
          </AppBar>
        </Box>
      </div>
    </div>
  );
}
