import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors';

import mongoapp from "./routes.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use(mongoapp);
 
//https://www.mongodb.com/atlas/database
//https://www.section.io/engineering-education/nodejs-mongoosejs-mongodb/
//To run type yarn start in the terminal to run 

const CONNECTION_URL = 'mongodb+srv://managementapp:managementapp123@cluster0.oaadp8s.mongodb.net/local_test?retryWrites=true&w=majority'
const PORT = 5001;

mongoose.connect(CONNECTION_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
var db = mongoose.connection;
db.once('open', () => console.log('connected to db'));
db.on('error', console.error.bind(console, "MongoDB connection error: "));

app.listen(PORT, () => console.log(`LISTENING ON PORT ${PORT}`));
