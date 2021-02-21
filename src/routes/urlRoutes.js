const router = require('express').Router();
import UrlController from '../controller/UrlController';
const rateLimit = require('express-rate-limit');
const slowDown = require('express-slow-down');
router.post(
  '/url',
  slowDown({
    windowMs: 30 * 1000,
    delayAfter: 1,
    delayMs: 500
  }),
  rateLimit({
    windowMs: 30 * 1000,
    max: 1
  }),
  UrlController.createUrl
);

router.get('/:id', UrlController.getSingleUrl);

module.exports = router;
