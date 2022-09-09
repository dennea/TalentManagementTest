import mongoose from 'mongoose';

const user = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
},
    { collection: 'user-data' }
)

const model = mongoose.model('UserData', user)

export default model;
