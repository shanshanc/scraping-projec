const Router = require('koa-router');
const router = new Router();
const controller = require('./controller');

router.get('/', controller.getProductFeed);

module.exports = router;