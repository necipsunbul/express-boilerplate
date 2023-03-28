const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const AuthMid = require('../middlewares/authMiddleware');

router.post('',UserController.create);
router.get('',AuthMid(),UserController.list);

module.exports = router;