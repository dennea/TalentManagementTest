import * as React from 'react';
import {Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@material-ui/core';

const Register = (props) => {
    return (
        <div>
        <Dialog open={props.RegisterOpen} onClose={props.closeRegister}>
          <DialogTitle>Create an Account</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please enter your email address. 
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
            />
            <DialogContentText>
              Please choose a username  
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="user"
              label="username"
              type="text"
              fullWidth
              variant="standard"
            />
            <DialogContentText>
              Please enter a password  
            </DialogContentText>
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
            <Button onClick={props.closeRegister} style={{marginRight:"auto"}}>Cancel</Button>
            <Button onClick={props.closeRegister}>Register</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
}
export default Register