
import './App.css'
import OptionSelection from "./components/OptionSelection";
import {items} from './components/AIOptions/index';
import * as React from "react";
import Translation from "./components/Translation";
import {Configuration, OpenAIApi} from "openai";
import axios from "axios";
import * as url from "url";

function App() {

    // const configuration = new Configuration({
    //     organization: "org-RdU7urV22eZNYaup9sQERQO4",
    //     apiKey: import.meta.env.VITE_Open_AI_Key
    // });
    // const openai = new OpenAIApi(configuration);

//create a function that will selection an item from the array of items
type Options = typeof items[number]['option'];
const inputRef = React.useRef<HTMLInputElement| null>(null);
     let url = `http://localhost:3080/text`;
    const [selectedItem, setSelectedItem] = React.useState<Options>('');
    const [inputText, setInputText] = React.useState<string>("");
    const [selection,setSelection]=React.useState<string >('Welcome to the Open AI Image Generator');
    const [result,setResult]=React.useState<string >('');
const reset=()=>{
    setSelectedItem('');
    setInputText("");
    setSelection('Welcome to the Open AI Image Generator');
}


    const handleSubmit=async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();

    //     let object = {...selectedItem, prompt: inputText};
     console.log(selection);
        let message = [selection, ...inputText].join('');
        // const response = await openai.createCompletion({object} as any);
        // setResult(response.data.choices[0].text as string);
        console.log(url);
        const response = await axios.post(url, {
            message: message
        });
        setResult(response.data.message.choices[0].text as string);
        setInputText('')
    }

    console.log(result)

  return (
    <div className='app-main' >
        <button onClick={()=>reset()}>reset</button>
        <h1 className={'heading'}>Open AI Image Generator</h1>
        {selectedItem?
            <div>
                <Translation
                             inputText={inputText}
                             setInputText={setInputText}
                             selection={selection}
                             handleSubmit={handleSubmit}
                             result={result}
                />

            </div>
            :
            <OptionSelection arrayItems={items} setSelectedItem={setSelectedItem} setSelection={setSelection}/>}

    </div>
  )
}

export default App
