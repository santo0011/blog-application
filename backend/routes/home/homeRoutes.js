const router = require('express').Router();
const homeController = require('../../controller/home/homeController');
const { auth_user } = require('../../middleware/authMiddleware');


router.get('/home-article-get', homeController.get_all_category);

router.get('/home-get-tag-category', homeController.home_tag_category_get);

router.get('/home-recent-old-get', homeController.old_react_article);

router.get('/category-article-get', homeController.category_article_get);

router.get('/tag-article-get', homeController.tag_article_get);


router.get('/get-article-details/:articleSlug', homeController.get_article_details);

router.put('/user-like-article', auth_user, homeController.user_article_like);


module.exports = router;