import * as React from 'react';
import {Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Snackbar} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import env from './env.js'
import axios from 'axios'
/*
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
*/
const Login = (props) => {
  const [username, setUser] =  React.useState();
  const [password, setPassword] =  React.useState();
  const [openInvalidUser, setOpenInvalidUser] = React.useState(false);

  const handleLoginClick = () => {
      // this works yay! 
      axios.post(`${env.baseUrl}/login`, {
          username: username,
          password: password,
      })
      .then((res) => {
          if(res.status < 300) {
              props.closeLogin()
              console.log("Welcome Back")
          }
      }).catch(err => {
        setOpenInvalidUser(true)
    });
  }
  const handleInvalidClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenInvalidUser(false);
  };
    return (
        <div>
      <Dialog open={props.loginOpen} onClose={props.closeLogin}>
        <DialogTitle>Welcome back!</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="user"
            label="username"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => {setUser(e.target.value)}}
          />
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="password"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => {setPassword(e.target.value)}}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.closeLogin} style={{marginRight:"auto"}}>Cancel</Button>
          <Button onClick={handleLoginClick} style={{marginRight:"auto"}}>Sign In</Button>
          <Button onClick={props.RegisterOpen}>Register </Button>
        </DialogActions>
        <Snackbar open={openInvalidUser} autoHideDuration={3000} onClose={handleInvalidClose} sx={{ height: "100%" }}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right"
            }}>
        <Alert onClose={handleInvalidClose} severity="error" sx={{ width: '100%' }}>
          Invalid Username and/or Password
        </Alert>
      </Snackbar>
      </Dialog>
    </div>
    );
}
export default Login