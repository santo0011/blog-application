const router = require('express').Router();
const categoryController = require('../../controller/Dashborad/categoryController');
const { admin_middleware } = require('../../middleware/authMiddleware');


// category router
router.post('/add-category', admin_middleware, categoryController.add_category_cont);

router.get('/get-category', admin_middleware, categoryController.category_get);

router.delete('/delete-category/:categoryId', admin_middleware, categoryController.category_delete);

router.get('/edit-category/:cateSlug', admin_middleware, categoryController.category_edit);

router.put('/update-category', admin_middleware, categoryController.category_update);




module.exports = router;