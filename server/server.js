const express = require('express');
const bodyParser = require('body-parser')
const mongo = require('mongodb')
const cors = require('cors');
const path = require('path');

const client = new mongo.MongoClient('mongodb://localhost:27017', { useNewUrlParser: true });
client.connect(err => {
    if (err) {
        console.log("blad polaczenia")
    } else {
        console.log("polaczono pomyslnie")
    }
    const db = client.db('burgermania')
    const burgers = db.collection('burgers');

    client.close()
})



const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, 'build')));
app.get('/ping', function (req, res) {
    return res.send('pong');
});


app.listen(process.env.PORT || 8080);