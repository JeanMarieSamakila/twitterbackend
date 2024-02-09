const express = require('express');
const app = express();
const port = 3000;
const tweetRoutes = require('./tweetRoutes');

// const tweetRoutes = require('./routes/tweetRoutes'); 

app.use(express.json());
app.use('/', tweetRoutes);
// app.use('/', routes);

app.listen(port, () => {
    console.log("Le serveur est opérationnel");
});