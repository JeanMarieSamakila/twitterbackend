// const express = require('express');
// const router = express.Router();

// const tweets = [
//                 {
//                     id: 1,
//                     title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//                     body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
//                     url: "https://via.placeholder.com/600/92c952",
//                     like: 9122,
//                     repost: 2
                    
//                 },
//                 {
//                     id: 2,
//                     title: "qui est esse",
//                     body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
//                     url: "https://www.pexels.com/photo/woman-in-white-long-sleeved-top-and-skirt-standing-on-field-2880507/",
//                     like: 122,
//                     repost: 7
//                 },
//                 {
//                     id: 3,
//                     title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//                     body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
//                     url: "https://via.placeholder.com/600/92c952",
//                     like: 9122,
//                     repost: 10
        
//                 },
//                 {
//                     id: 4,
//                     title: "qui est esse",
//                     body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
//                     url: "https://www.pexels.com/photo/woman-in-white-long-sleeved-top-and-skirt-standing-on-field-2880507/",
//                     thumbnailUrl: "https://via.placeholder.com/150/92c952",
//                     like: 122,
//                     repost: 7
//                 }
//             ];
            
// router.get("/", (req, res) => {
//     res.send(tweets);
// });

// router.get('/:id', (req, res) => {
//     const id = parseInt(req.params.id);
//     const tweet = tweets.find(tweet => tweet.id === id);
//     res.json(tweet);
// });

// router.delete("/:id", (req, res) => {
//     const id = parseInt(req.params.id);
//     const index = tweets.findIndex(tweet => tweet.id === id);
//     tweets.splice(index, 1);
//     res.send("Tweet supprimé");
// });

// router.post("/", (req, res) => {
//     tweets.push(req.body);
//     res.send('Le tweet a été créé');
// });

// router.put("/:id", (req, res) => {
//     const id = parseInt(req.params.id);
//     const index = tweets.findIndex(tweet => tweet.id === id);
//     tweets[index] = req.body;
//     res.send("Tweet mis à jour avec succès");
// });

// module.exports = router;