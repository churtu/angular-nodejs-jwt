controller = {}
const jwt = require('jsonwebtoken');
const { User } = require('../models');

controller.getUsers = async (req, res) => {
    const users = await User.find();
    return res.status(200).json(users);
}

controller.getUser = async (req, res) => {
    const { id } = req.params;
    const user = await User.findOne({ _id: id });
    return res.status(200).json(user);
}

controller.delete = async (req, res) => {
    const { id } = req.params;
    const user = await User.findOne({ _id: id });
    if (user) {
        await User.findByIdAndDelete(id);
        return res.status(200).send('Deleted');
    }
    return res.status(401).send("This user doesn't exists");
}

controller.signup = async (req, res) => {
    const { user, password } = req.body;
    const result = await User.find({ user });
    if (result.length == 0) {
        const newUser = new User({ user, password });
        newUser.password = await newUser.encryptPassword(password);
        newUser.save();
        const token = await jwt.sign({ _id: newUser._id }, 'chini');
        return res.status(200).json({ token });
    }
    return res.status(401).send('This user is aready exists');
}

controller.signin = async (req, res) => {
    const { user, password } = req.body;
    const userFound = await User.findOne({ user });
    if (userFound) {
        if (await userFound.verifyPassword(password)) {
            const token = await jwt.sign({ _id: userFound._id }, 'chini');
            return res.status(200).json({ token });
        }
    }
    return res.status(401).send("User or password are incorrect");
}

module.exports = controller;