const express = require("express");
const mongoose = require('mongoose');
const { check, validationResult } = require("express-validator"); 
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken"); 
const router = express.Router(); 

const User = require("../model/User"); 

/**
 * @method - POST
 * @param - /signup
 * @description - User SignUp
 */


router.post(
    "/signup", 
    [
        check("firstName", "Please enter your first name"), 
        check("lastName", "Please enter your last name")
        .not()
        .isEmpty(),
        check("email", "Please enter a valid email").isEmail(),
        check("password", "Please enter a valid password").isLength({
            min: 6
        })
    ], 
    async (req, res) => {
        const errors = validationResult(req); 
        if(!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }

        const {
            firstName,
            lastName,
            email,
            password, 
            city,
            state,
            zipCode
        } = req.body; 
        try {
            let user = await User.findOne({
                email
            }); 
            if (user) {
                return res.status(400).json({
                    message: "User already exists"
                }); 
            }
            user = new User({
                firstName,
                lastName,
                email, 
                password,
                city, 
                state,
                zipCode
            }); 

            const salt = await bcrypt.genSalt(10); 
            user.password = await bcrypt.hash(password, salt); 

            await user.save(); 

            const payload = {
                user: {
                    is: user.id
                }
            };

            jwt.sign(
                payload, 
                "randomString", {
                    expiresIn: 10000
                }, 
                (err, token) => {
                    if (err) throw err; 
                    res.status(200).json({
                        token
                    }); 
                }
            );  
        } catch (err) {
            console.log(err.message);
            res.status(500).send("Error saving password");
        }
    }
); 

module.exports = router; 