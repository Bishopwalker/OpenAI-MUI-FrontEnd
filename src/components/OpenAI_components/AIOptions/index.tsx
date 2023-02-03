
//create a type for array of objects and make it a string

type arrayItems ={
    name: string,
    id: string,
    description: string,
    option: Object
}
//create an array of items of type arrayItems
export const items: arrayItems[] = [
    {
        "name": "Q&A:  ",
        "id": "qa",
        "description": "prompt# Answer questions based on existing knowledge. ",
        "option": {
            "model": "text-davinci-003",
            "prompt":'',
            "max_tokens": 100,
            "temperature": 0.9,
            "top_p": 1,
            "n": 1,
            "stream": false,
            "logprobs": null,
            "stop": "\n"
        }
    },
    {
        "name": "Grammar Correction:  ",
        "id": "grammarCorrection",
        "description": "Correct the following sentence into standard English.:   ",
        "option": {
            "model": "text-davinci-003",
            "prompt":'',
            "max_tokens": 100,
            "temperature": 0.9,
            "top_p": 1,
            "n": 1,
            "stream": false,
            "logprobs": null,
            "stop": "\n"
        }
    },
    {
        "name": "Summarize for a 2nd Grader: ",
        "id": "summarizeFor2ndGrader",
        "description": "prompt# Translates difficult text into simpler concepts. ",
        "option": {
            "model": "text-davinci-003",
            "prompt":'',
            "max_tokens": 100,
            "temperature": 0.9,
            "top_p": 1,
            "n": 1,
            "stream": false,
            "logprobs": null,
            "stop": "\n"
        }
    },
    {
        "name": "Natural Language to OpenAI API:  ",
        "id": "naturalLanguageToOpenAiApi",
        "description": "prompt# Create code to call to the OpenAI API using a natural language instruction. ",
        "option": {
            "model": "text-davinci-003",
            "prompt":'',
            "max_tokens": 7,
            "temperature": 0,
            "top_p": 1,
            "n": 1,
            "stream": false,
            "logprobs": null,
            "stop": "\n"
        }
    },
    {
        "name": "Text to Command",
        "id": "textToCommand",
        "description": "prompt# Translate text into programmatic commands.",
        "option": {
            "model": "text-davinci-003",
            "prompt":'',
            "max_tokens": 100,
            "temperature": 0.9,
            "top_p": 1,
            "n": 1,
            "stream": false,
            "logprobs": null,
            "stop": "\n"
        }
    },
    {
        "name": "English to Other Languages",
        "id": "englishToOtherLanguages",
        "description": "prompt# Translates English text into French, Spanish and Japanese.",
        "option": {
            "model": "text-davinci-003",
            "prompt":'',
            "max_tokens": 100,
            "temperature": 0.9,
            "top_p": 1,
            "n": 1,
            "stream": false,
            "logprobs": null,
            "stop": "\n"
        }
    },
    {
        "name": "Natural Language to Stripe API",
        "id": "naturalLanguageToStripeApi",
        "description": "prompt# Create code to call the Stripe API using natural language.",
        "option": {
            "model": "text-davinci-003",
            "prompt":'',
            "max_tokens": 100,
            "temperature": 0.9,
            "top_p": 1,
            "n": 1,
            "stream": false,
            "logprobs": null,
            "stop": "\n"
        }
    },
    {
        "name": "SQL Translate",
        "id": "sqlTranslate",
        "description": "prompt# Translate natural language to SQL queries.",
        "option": {
            "model": "text-davinci-003",
            "prompt":'',
            "max_tokens": 100,
            "temperature": 0.9,
            "top_p": 1,
            "n": 1,
            "stream": false,
            "logprobs": null,
            "stop": "\n"
        }
    },
    {
        "name": "Parse Unstructured Data",
        "id": "parseUnstructuredData",
        "description": "prompt# Create tables from long form text",
        "option": {
            "model": "text-davinci-003",
            "prompt":'',
            "max_tokens": 100,
            "temperature": 0.9,
            "top_p": 1,
            "n": 1,
            "stream": false,
            "logprobs": null,
            "stop": "\n"
        }
    },
    {
        "name": "Classification",
        "id": "classification",
        "description": "prompt# Classify items into categories via example.",
        "option": {
            model: "text-davinci-003",
            prompt:'',
            temperature: 0,
            max_tokens: 64,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        }
    },
    {
        "name": "Python to Natural Language",
        "id": "pythonToNaturalLanguage",
        "description": "prompt# Explain a piece of Python code in human understandable language.",
        "option": {
            model: "code-davinci-002",
            prompt:'',
            temperature: 0,
            max_tokens: 64,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        }
    },
    {
        "name": "Movie to Emoji",
        "id": "movieToEmoji",
        "description": "prompt# Convert movie titles into emoji.",
        "option": {
            model: "text-davinci-003",
            prompt:'',
            temperature: 0.8,
            max_tokens: 60,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
            stop: ["\n"],
        }
    },

]



