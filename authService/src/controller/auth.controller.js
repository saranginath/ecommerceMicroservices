const bcrypt = require('bcrypt');
const User = require('../models/user.model');
const { generateToken } = require('../utils/jwt');

exports.register = async (req, res) => {
    try {
        const { email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exist" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            email,
            password: hashedPassword
        });

        res.status(201).json({ message: "user registered", userId: user._id })
    }
    catch (error) {
        res.status(500).json({ message: "Registration failed" })
    }
}



exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            res.status(401).json({ message: "Invalid credentials" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Password is invalid" });
        }

        const token = generateToken({
            userId: user._id,
            email: user.email
        })
        res.json({
            message: "Login unsuccessful",
            token
        })

    }
    catch (error) {
        res.status(500).json({ message: "Login failed" })
    }
};