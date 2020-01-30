const controller = {}
const { Task, PrivateTask } = require('../models');

controller.createTask = async (req, res) => {
    const {title, description} = req.body;
    if(title && description){
        const newTask = new Task({title, description});
        await newTask.save();
        return res.status(200).send('ok');
    }
    return res.status(401).send('Values error');
}

controller.getTasks = async (req, res) => {
    const tasks = await Task.find();
    return res.status(200).json(tasks);
}

controller.getTask = async (req, res) => {
    const id = req.params.id;
    const task = await Task.findOne({_id:id});
    return res.status(200).json(task);
}

controller.deleteTask = async (req, res) => {
    const id = req.params.id;
    if(await Task.findOne({_id:id})){
        await Task.findByIdAndDelete(id);
    return res.status(200).send('Deleted');
    }
    return res.status(401).send("This task doesn't exists");
    
}

controller.createPrivateTask = async (req, res) => {
    const {title, description} = req.body;
    if(title && description){
        const newTask = new PrivateTask({title, description});
        await newTask.save();
        return res.status(200).send('ok');
    }
    return res.status(401).send('Values error');
}

controller.getPrivateTasks = async (req, res) => {
    const tasks = await PrivateTask.find();
    return res.status(200).json(tasks);
}

controller.getPrivateTask = async (req, res) => {
    const id = req.params.id;
    const task = await PrivateTask.findOne({_id:id});
    return res.status(200).json(task);
}

controller.deletePrivateTask = async (req, res) => {
    const id = req.params.id;
    if(await PrivateTask.findOne({_id:id})){
        await PrivateTask.findByIdAndDelete(id);
    return res.status(200).send('Deleted');
    }
    return res.status(401).send("This task doesn't exists");
}

module.exports = controller;