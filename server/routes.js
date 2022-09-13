import express from 'express'
import User from './UserSchema.js';
const mongoapp = express();

mongoapp.post("/register", async (request, response) => {
    console.log(request.body);
    const user = new User(request.body);
  
    try {
      await user.save();
      response.send(user);
    } catch (error) {
      response.status(500).send(error);
    }
});

mongoapp.get("/users", async (request, response) => {
    const users = await User.find({});
  
    try {
      response.send(users);
    } catch (error) {
      response.status(500).send(error);
    }
  });

export default mongoapp;