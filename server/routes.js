import express from 'express'
import User from './UserSchema.js';
import TalentUser from './Schemas/TalentUserSchema.js';
import ManagerUser from './Schemas/ManagerUserSchema.js';

const mongoapp = express();
// Test these endpoints on postman https://web.postman.co/

mongoapp.post("/register/talent", async (request, response) => {
  console.log("Talent");
  console.log(request.body);
  const talentUser = new TalentUser(request.body);

  try {
    await talentUser.save();
    response.send(talentUser);
  } catch (error) {
    response.status(500).send(error);
    console.log(error);
  }
});

mongoapp.post("/register/manager", async (request, response) => {
  console.log("Manager");
  console.log(request.body);
  const managerUser = new ManagerUser(request.body);

  try {
    await managerUser.save();
    response.send(managerUser);
  } catch (error) {
    response.status(500).send(error);
    console.log(error);
  }
});

mongoapp.post("/login", async (request, response) => {
  console.log("In get request");
  console.log(request.body);
  console.log(request.body.username);
  let usernameResult = await ManagerUser.find({username: request.body.username});
  let talentUsernameResult = await TalentUser.find({username: request.body.username});
  if(usernameResult[0] === undefined || usernameResult.length == 0){
    usernameResult = talentUsernameResult;
  }

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