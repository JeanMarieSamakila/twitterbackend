const express = require('express');
const app = express();
const port = 3000;

// app.use(express.json());

app.get('/', (req, res) => {
    const tweets = [
        {id: 1, text: 'first tweets'},
        {id: 2, text: 'second tweets'},
        {id: 3, text: 'three tweets'},
        {id: 4, text: 'four tweets'}
    ];
    res.json(tweets);
    // res.send('bienvenu sur notre page')
});

app.post('/tweets', (req, res) => {
    const newTweet = req.body;
    res.json({message: 'Tweet posté avec succès', tweet: newTweet});
});



app.listen(port, () => {
    console.log("le serveur est operationel");
} )