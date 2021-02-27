const router = require('express').Router();
import CodeController from '../controller/CodeController';
const rateLimit = require('express-rate-limit');
const slowDown = require('express-slow-down');

router.post('/', CodeController.getQRCode);

module.exports = router;
