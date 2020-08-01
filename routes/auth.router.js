const UserService = require('../services/user.service');
const express = require('express');
const router = express.Router();
const userService = new UserService();

/**
 * POST request to authenticate the user by username and password
 * 
 */
router.post('/', (req, rsp, next) => {
    const authInfo = req.body;
    userService.findUserByUsernameAndPassword(authInfo.username, authInfo.password)
    .then(user => rsp.status(200).json(user))
    .catch(error => rsp.status(401).json(error));
});

module.exports = router;