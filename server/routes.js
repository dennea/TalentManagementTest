import express from 'express'
import User from './UserSchema.js';
const mongoapp = express();
// Test these endpoints on postman https://web.postman.co/

mongoapp.post("/register", async (request, response) => {
    console.log(request.body);
    const user = new User(request.body);
  
    try {
      await user.save();
      response.send(user);
    } catch (error) {
      response.status(500).send(error);
      console.log(error);
    }
});

mongoapp.post("/login", async (request, response) => {
    console.log("In get request");
    console.log(request.body);
    console.log(request.body.username);
    const usernameResult = await User.find({username: request.body.username});
    console.log(usernameResult[0]);
    if(usernameResult[0] == undefined || usernameResult.length == 0){
        response.status(400).send("Invalid username/password");
        return;
      }
      
    if(usernameResult[0].password == request.body.password){
        try {
            response.send("success");
        } catch (error) {
            response.status(500).send(error);
        }
    } else{
        response.status(400).send("Invalid username/password");
    }
  });

export default mongoapp;