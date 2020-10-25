const mongoose =require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String, 
        required: true
    }, 
    lastName: {
        type: String, 
        required: true
    }, 
    email: {
        type: String,
        required: true
    }, 
    password: {
        type: String, 
        required: true                                                   
    },
    city: {
        type: String, 
        required: true
    },
    state: {
        type: String, 
        required: true
    }, 
    zipCode: {
        type: Number, 
        required: true
    }, 
    createdAt: {
        type: Date, 
        default: Date.now()
    }
}); 

module.exports = mongoose.model("User", userSchema);
