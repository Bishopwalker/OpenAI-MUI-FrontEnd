require('dotenv').config();

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    organization: "org-RdU7urV22eZNYaup9sQERQO4",
    apiKey: process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);
//const response = await openai.listEngines();


//export a module with the function to call create image
module.exports= {

    image: async (req, res) => {
        const{message} = req.body;
        console.log(message);
        const response = await openai.createImage({
            model: "text-davinci-003",
            prompt: message,
            n: 2,
            size: "1024x1024",

        });
        console.log(response.data.choices[0].text);
        res.json({
            message: response.data
        })
    },
    text:async (req, res) =>{
        const{message} = req.body;
        console.log(message);
        const response = await openai.createCompletion({
            model: "davinci",
            prompt: message,
            n: 2,
            max_tokens: 100,
            temperature: 0.3,

        });
        console.log(response.data.choices[0].text);
        res.json({
            message: response.data
        })
    }
}

