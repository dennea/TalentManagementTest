import * as React from 'react';
import {Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Radio, FormControl,FormLabel,RadioGroup, FormControlLabel,IconButton} from '@material-ui/core';
import { Info } from '@material-ui/icons';
import env from './env.js'
import axios from 'axios'

const Register = (props) => {
    // TODO: add error handling and make model vs manager accounts
    const [name, setName] =  React.useState();
    const [username, setUser] =  React.useState();
    const [password, setPassword] =  React.useState();
    const [confirmPassword, setComfirmPassword] =  React.useState();
    const [email, setEmail] =  React.useState();
    const [talentAccount, setTalentAccount] = React.useState(false);
    const [managerAccount, setManagerAccount] = React.useState(false);


    const handleRegisterClick = () => {
        // TODO: compare the passwords
        if(talentAccount){
          axios.post(`${env.baseUrl}/register/talent`, {
            username: username,
            email: email,
            password: password,
            name: name 
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
          } else if (managerAccount) {
            axios.post(`${env.baseUrl}/register/manager`, {
              username: username,
              email: email,
              password: password,
              name: name 
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
    }

    const handleOnChangeTalent = () => {
      setTalentAccount(true)
      setManagerAccount(false)
    }

    const handleOnChangeManager = () => {
      setManagerAccount(true)
      setTalentAccount(false)
    }

    return (
        <div>
        <Dialog open={props.RegisterOpen} onClose={props.closeRegister}>
          <DialogTitle>Create an Account</DialogTitle>
          <DialogContent>
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Account Type</FormLabel>
                    <RadioGroup>
                        <IconButton aria-label="info"><Info /></IconButton>
                        <FormControlLabel value="talent" control={<Radio />} label="Talent Account" onChange = {handleOnChangeTalent}/>
                        <IconButton aria-label="info"><Info /></IconButton>
                        <FormControlLabel value="manager" control={<Radio />} label="Manager Account" onChange = {handleOnChangeManager}/>
                    </RadioGroup>
            </FormControl>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              type="name"
              fullWidth
              variant="standard"
              onChange={(e) => {setName(e.target.value)}}
            />
            <TextField
              autoFocus
              margin="dense"
              id="user"
              label="Username"
              type="text"
              fullWidth
              variant="standard"
              onChange={(e) => {setUser(e.target.value)}}
            />
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
              id="password"
              label="Password"
              type="password"
              fullWidth
              variant="standard"
              onChange={(e) => {setPassword(e.target.value)}}
            />
            <TextField
              autoFocus
              margin="dense"
              id="confirm password"
              label="Confirm Password"
              type="password"
              fullWidth
              variant="standard"
              onChange={(e) => {setComfirmPassword(e.target.value)}}
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