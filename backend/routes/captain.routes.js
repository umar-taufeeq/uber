const captainController = require('../controllers/captain.controller');
const express = require('express');
const router = express.Router();
const {body} = require('express-validator');


router.post('/register',[
    body('email').isEmail().withMessage('Please enter a valid email address'),
    body('fullname.firstname').isLength({min: 3}).withMessage('First name must be at least 3 characters long'),
    body('password').isLength({min: 6}).withMessage('Password must be at least 6 characters long'),
    body('vechile.color').isLength({min: 3}).withMessage('Color must be at least 3 characters long'),
    body('vechile.plate').isLength({min: 3}).withMessage('Plate must be at least 3 characters long'),
    body('vechile.capacity').isInt({min: 1}).withMessage('Capacity must be at least 1'),
    body('vechile.vechileType').isIn(['car', 'motorcycle', 'auto']).withMessage('Invalid vechile type'),
],
 captainController.registerCaptain )

module.exports = router;