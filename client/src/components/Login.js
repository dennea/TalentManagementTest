import * as React from 'react';
import {Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle} from '@material-ui/core';

const Login = (props) => {
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
          />
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="password"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.closeLogin} style={{marginRight:"auto"}}>Cancel</Button>
          <Button onClick={props.closeLogin} style={{marginRight:"auto"}}>Sign In</Button>
          <Button onClick={props.RegisterOpen}>Register </Button>
        </DialogActions>
      </Dialog>
    </div>
    );
}
export default Login