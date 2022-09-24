import mongoose from 'mongoose';

const TalentUserSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    name: {type: String, required: true}
},
);

const TalentUser = mongoose.model('TalentUser', TalentUserSchema)

export default TalentUser;