import * as React from 'react';
import { AppBar, CssBaseline, Box,Toolbar, Typography, Button } from '@material-ui/core';
import Login from './Login';
import Register from './Register';

export default function ButtonAppBar() {
  const [loginOpen, setLoginOpen] = React.useState(false);
  const [RegisterOpen, setRegisterOpen] = React.useState(false);

  const handleClickOpenLogin = () => {
      setLoginOpen(true);
  };

  const closeLogin = () => {
    setLoginOpen(false);
  };

  const handleClickOpenRegister = () => {
    setRegisterOpen(true);
    setLoginOpen(false);
  };

  const closeRegister = () => {
    setRegisterOpen(false);
  };

  return (
    <div>
      <div>
       <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static"  color='default'>
          <CssBaseline />
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Talent Management
              </Typography>
              <div >
                <Button color="inherit" onClick={handleClickOpenLogin}>Login</Button>
                <Button color="inherit" onClick={handleClickOpenRegister}>Sign Up</Button>
              </div>
            </Toolbar>
          </AppBar>
        </Box>
      </div>
      <Login loginOpen={loginOpen} closeLogin={closeLogin} RegisterOpen={handleClickOpenRegister}/>
      <Register RegisterOpen={RegisterOpen} closeRegister={closeRegister} />
    </div>
  );
}
