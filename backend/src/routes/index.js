const router = require('express').Router();
const { usersController, tasksController } = require('../controllers');
const { verifyToken } = require('../guard/auth');

// Users routes
router.get('/users', usersController.getUsers);
router.get('/users/:id', usersController.getUser);
router.post('/users/signup', usersController.signup);
router.post('/users/signin', usersController.signin);
router.delete('/users/delete/:id', usersController.delete);

// Tasks routes
router.get('/tasks', tasksController.getTasks);
router.get('/tasks/:id', tasksController.getTask);
router.post('/tasks', tasksController.createTask);
router.delete('/tasks/delete/:id', tasksController.deleteTask)
router.get('/private-tasks', verifyToken, tasksController.getPrivateTasks);
router.get('/private-tasks/:id', tasksController.getPrivateTask);
router.post('/private-tasks', tasksController.createPrivateTask);
router.delete('/private-tasks/delete/:id', tasksController.deletePrivateTask);



module.exports = router;