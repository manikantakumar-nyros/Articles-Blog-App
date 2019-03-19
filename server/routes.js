const express = require('express');
const router = express.Router();

const ArticlesController = require('./controllers/ArticlesController.js')

router.post('/save_article', ArticlesController.save);
router.get('/get_articles', ArticlesController.fetch);
router.post('/get_article', ArticlesController.getArticle);

module.exports = router;