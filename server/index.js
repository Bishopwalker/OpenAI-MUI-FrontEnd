const { Configuration, OpenAIApi } = require("openai");
const express = require('express');
const app = express();
const port = 3080;
//please add cors to express
const cors = require('cors');
const bodyParser = require("body-parser");
const ctrl = require('./controller.js');
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
//import { Configuration, OpenAIApi } from "openai";




//create a simple express api that calls the function from above

app.post('/image', ctrl.image);
app.post('/text', ctrl.text);

app.listen(port, () => {
    console.log(`Open AI chat GPT conversation 33 :${port}`)
}   );