const router = require('express').Router();
const homeController = require('../../controller/home/homeController');


router.get('/home-article-get', homeController.get_all_category);

router.get('/home-get-tag-category', homeController.home_tag_category_get);

router.get('/home-recent-old-get', homeController.old_react_article);

router.get('/category-article-get', homeController.category_article_get);

router.get('/tag-article-get', homeController.tag_article_get);



module.exports = router;