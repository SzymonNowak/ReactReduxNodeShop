const express = require('express');
const bodyParser = require('body-parser')
var cors = require('cors');
const path = require('path');
const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, 'build')));
app.get('/ping', function (req, res) {
    return res.send('pong');
});

app.get('/', (req, res) => {
    res.json({
        id: 'elo'
    })
})

app.listen(process.env.PORT || 8080);