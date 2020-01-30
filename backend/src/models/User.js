const {Schema, model} = require('mongoose');
const bcrypr = require('bcryptjs');

const UserSchema = new Schema({
    user: {type: String, required: true},
    password: {type: String, required: true}
},{timestamps: true});

UserSchema.methods.encryptPassword = async password =>{
    const salt = await bcrypr.genSalt(10);
    const hash = bcrypr.hash(password, salt);
    return hash;
}

UserSchema.methods.verifyPassword = async function(password){
    return await bcrypr.compare(password, this.password);
}

module.exports = model('User', UserSchema);