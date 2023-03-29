const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const AuthMid = require('../middlewares/authMiddleware');

router.post('',UserController.create);
router.get('',AuthMid(),UserController.list);
router.get('/:id',AuthMid(),UserController.detail);
router.patch('/:id',AuthMid(),UserController.update);
router.delete('/:id',AuthMid(),UserController.delete);

module.exports = router;