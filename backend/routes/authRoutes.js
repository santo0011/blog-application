const router = require('express').Router();
const authController = require('../controller/authController');


router.post('/user-register', authController.register)

router.post('/verify-email', authController.verify_email)



module.exports = router;