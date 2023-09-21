const router = require('express').Router();
const articalController = require('../../controller/Dashborad/articalController');
const { admin_middleware } = require('../../middleware/authMiddleware');


router.post('/add-artical', admin_middleware, articalController.add_artical);


module.exports = router;