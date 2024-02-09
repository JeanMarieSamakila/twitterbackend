// controllers/tweetController.js
const tweets = require('../models/tweetModel');

exports.getAllTweets = (req, res) => {
    res.send(tweets);
};

exports.getTweetById = (req, res) => {
    const id = parseInt(req.params.id);
    const tweet = tweets.find(tweet => tweet.id === id);
    res.send(tweet);
};

exports.deleteTweetById = (req, res) => {
    const id = parseInt(req.params.id);
    const index = tweets.findIndex(tweet => tweet.id === id);
    tweets.splice(index, 1);
    res.send("Tweet supprimé");
};

exports.createTweet = (req, res) => {
    tweets.push(req.body);
    res.send('Le poste a été créé');
};

exports.updateTweetById = (req, res) => {
    const id = parseInt(req.params.id);
    const index = tweets.findIndex(tweet => tweet.id === id);
    tweets[index] = req.body;
    res.send("Tweet mis à jour avec succès");
};