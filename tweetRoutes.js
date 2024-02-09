const express = require('express');
const router = express.Router();
const tweetController = require('./controllers/tweetController');

router.get('/', tweetController.getAllTweets);
router.get('/:id', tweetController.getTweetById);
router.delete('/:id', tweetController.deleteTweetById);
router.post('/post', tweetController.createTweet);
router.put('/:id', tweetController.updateTweetById);

module.exports = router;
