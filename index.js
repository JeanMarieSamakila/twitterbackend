const express = require('express');
const app = express();
const port = 3002;

// app.use(express.json());

// app.get('/', (req, res) => {
    const tweets = [
        {
            id: 1,
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
            url: "https://via.placeholder.com/600/92c952",
            thumbnailUrl: "https://via.placeholder.com/150/92c952",
            like: 9122,
            repost: 10
            
        },
        {
            id: 2,
            title: "qui est esse",
            body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
            url: "https://www.pexels.com/photo/woman-in-white-long-sleeved-top-and-skirt-standing-on-field-2880507/",
            url: "https://www.pexels.com/photo/woman-in-white-long-sleeved-top-and-skirt-standing-on-field-2880507/",
            thumbnailUrl: "",
            like: 122,
            repost: 7
        },
        {
            id: 3,
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
            url: "https://via.placeholder.com/600/92c952",
            thumbnailUrl: "https://via.placeholder.com/150/92c952",
            like: 9122,
            repost: 10

        },
        {
            id: 4,
            title: "qui est esse",
            body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
            url: "https://www.pexels.com/photo/woman-in-white-long-sleeved-top-and-skirt-standing-on-field-2880507/",
            thumbnailUrl: "https://via.placeholder.com/150/92c952",
            like: 122,
            repost: 7
        }
    ];
//     res.json(tweets);
// });

app.get("/", (req, res,) => {
    res.send(tweets)
})

app.get('/:id', (req, res) => {
    const id = parseInt (req.params.id)
    res.send(tweets.filter((e) => {
        return e.id === id
    }))
})


app.delete("/:id", (req, res) => {
    const id = parseInt (req,params.id)
    res.send(tweets.filter((e) => {
        let element = e.id === id
        return tweets.splice(id-1,1)
    }))
})

app.use(express.json());

app.post("/post", (req, res) => {
    tweets.push(req, body)
    res.send('le poste a ete creer')
} )



app.listen(port, () => {
    console.log("le serveur est operationel");
} )