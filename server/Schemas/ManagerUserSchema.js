import mongoose from 'mongoose';

const ManagerUserSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    name: {type: String, required: true}
},
);

const ManagerUser = mongoose.model('ManagerUser', ManagerUserSchema)

export default ManagerUser;