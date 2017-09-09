const express    = require('express'),
      cors       = require('cors'),
      morgan     = require('morgan'),
      bodyParser = require('body-parser');


const port = process.env.PORT || 8081,
      app  = express();

//Middleawre
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cors());

app.get('/status', (req, res) => {
    res.send({ message: "hello from the express backend"})
});

app.listen(port, () => console.log(`App running on port ${port}.....`));