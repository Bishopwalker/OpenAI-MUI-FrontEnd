import * as React from "react";

import Typography from '@mui/material/Typography';
import {Button, TextField} from "@mui/material";
import './Translation.css'
import {items} from "./AIOptions";

type Options = typeof items[number]['option'];
type Props={
    setInputText:(inputText:string)=>void,
    inputText:string | null,
    selection:string,
    handleSubmit:(e:React.FormEvent<HTMLFormElement>)=>void,
    result:string


}


//Use forward ref to pass the ref to the child component
   const Translation =({setInputText,inputText, selection,handleSubmit,result}:Props)=>{
      const inputRef = React.useRef<HTMLInputElement| null>(null);

React.useEffect(()=>{
  //  ref?.current?.focus();
    inputRef?.current?.focus();
},[inputRef])


//set a ref for the textarea element to set focus

    return (
        <div className='translation'>
            <Typography variant={'h5'}>Drop your input here, to find out about </Typography>
            <Typography className={'typo'} variant={'h6'}> <span>{selection}</span></Typography>
            {/*< TextField ref={ref} onChange={(e)=>setInputText(e.target.value)} value={inputText} />*/}

            <form className={'section1'} onSubmit={(e)=>handleSubmit(e)}>

            <textarea
                ref={inputRef as any}
                className={'text-area'}
                cols={50} rows={10}
                onChange={(e) => setInputText(e.target.value)}
                value={inputText || inputText +  result}/>
            <button  color={'primary'} className={'butt-trans'}  >Enter to Submit</button>
            </form>
        </div>
    )
}

export default Translation ;