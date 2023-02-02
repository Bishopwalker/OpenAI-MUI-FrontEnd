import * as React from "react";
import {items} from "./AIOptions";
import axios from "axios/index";
import {Button} from "@mui/material";
import Translation from "./Translation";
import OptionSelection from "./OptionSelection";

const AIHome = () => {
    type Options = typeof items[number]['option'];
    let url = `http://localhost:3080/text`;
    const [selectedItem, setSelectedItem] = React.useState<Options>('');
    const [inputText, setInputText] = React.useState<string>("");
    const [selection,setSelection]=React.useState<string >('Welcome to the Open AI Image Generator');
    const [result,setResult]=React.useState<string| null >('Wonder what this will be?');
    const reset=()=>{
        setSelectedItem('');
        setInputText("");
        setSelection('Welcome to the Open AI Image Generator');
        setResult(null);
    }

    const defferedQuery=React.useDeferredValue(result);
    const [isPending, startTransition] = React.useTransition();


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

        startTransition(() => {
            setResult(response.data.message.choices[0].text as string);
        });
        setInputText('');
    }



    const clearFields=()=>{
        setInputText('');
        setResult('');
    }

    console.log(isPending)

    return (
        <div className='app-main' >
            <Button sx={
                {
                    position:'sticky',
                    top:20,
                }
            }  onClick={()=>reset()}>reset</Button>
            <h1 className={'heading'}>Open AI Image Generator</h1>
            {selectedItem?
                <div>
                    <Translation
                        inputText={inputText}
                        setInputText={setInputText}
                        selection={selection}
                        handleSubmit={handleSubmit}
                        result={result as string}
                        clearFields={clearFields}
                        isPending={isPending}
                    />

                </div>
                :
                <OptionSelection arrayItems={items} setSelectedItem={setSelectedItem} setSelection={setSelection}/>}

        </div>
    )
}

export default AIHome