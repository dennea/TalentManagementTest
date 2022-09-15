import * as React from 'react';
import {Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle} from '@material-ui/core';
import env from './env.js'
import axios from 'axios'

const Register = (props) => {
    const [username, setUser] =  React.useState();
    const [password, setPassword] =  React.useState();
    const [email, setEmail] =  React.useState();

    const handleRegisterClick = () => {
        // this works yay! 
        axios.post(`${env.baseUrl}/register`, {
            username: username,
            email: email,
            password: password,
        })
        .then((res) => {
            if(res.status < 300){
                props.closeRegister()
                console.log("all is well: check data base tho just in case")
            }
            else{
                console.log("oop something went wrong")
            }
        });
    }

    return (
        <div>
        <Dialog open={props.RegisterOpen} onClose={props.closeRegister}>
          <DialogTitle>Create an Account</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
              onChange={(e) => {setEmail(e.target.value)}}
            />
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
            <Button onClick={props.closeRegister} style={{marginRight:"auto"}}>Cancel</Button>
            <Button onClick={handleRegisterClick}>Register</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
}
export default Register