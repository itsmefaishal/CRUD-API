const User = require('../models/user.model');

const getUsers = async (req, res) => {
    try{
        const user = await User.find({});
        res.status(200).json(user);
    }
    catch(error){
        res.status(500).json({message : error.message});
    }
}

const getUser = async (req, res) => {
    try{
        const { id } = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);
    }
    catch(error){
        res.status(500).json({message : error.message});
    }
}

const postUser = async (req, res) => {
    try {
        const {name, email, number, address, country } = req.body;
        const newUser = new User({
            name : name,
            email : email,
            number : number,
            address : address,
            country : country
        });
        await newUser.save();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message : error.message});
    }
}

const putUser = async (req, res) => {
    try{
        const {id} = req.params;
        const user = await User.findByIdAndUpdate(id, req.body);

        if(!user){
            res.status(404).json({message : "User does not exist"});
        }

        const updatedUser = await User.findById(id);
        res.status(200).json(updatedUser);

    }catch(error){
        res.status(500).json({message : error.message});
    }
}

const deleteUser = async(req, res) => {
    try{
        const {id} = req.params;
        const user = await User.findByIdAndDelete(id);
        const name = user.name;

        if(!user){
            res.status(404).json({message : "User does not exist"});
        }

        res.status(200).json({message : "User " + name + " deleted successfully"});
    }
    catch(error){
        res.status(500).json({message : error.message});
    }
}

module.exports = {
    getUser,
    getUsers, 
    deleteUser,
    putUser,
    postUser
}