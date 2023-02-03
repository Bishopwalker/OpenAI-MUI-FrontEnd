import * as React from "react";

import Typography from '@mui/material/Typography';
import {Button, TextField} from "@mui/material";
import './Translation.css'
import {items} from "./AIOptions";
import LinearProgress from '@mui/material/LinearProgress';

type Options = typeof items[number]['option'];
type Props={
    setInputText:(inputText:string)=>void,
    inputText:string,
    selection:string,
    handleSubmit:(e:React.FormEvent<HTMLFormElement>)=>void,
    result:string,
    clearFields:()=>void,
    isPending:boolean,


}


//Use forward ref to pass the ref to the child component
   const Translation =React.memo(({setInputText,inputText, selection,handleSubmit,result,clearFields,isPending}:Props)=>{
      const inputRef = React.useRef<HTMLInputElement| null>(null);

React.useEffect(()=>{
  //  ref?.current?.focus();
    inputRef?.current?.focus();
},[inputRef])


//set a ref for the textarea element to set focus

    return (
        <div className='translation'>
            <Typography variant={'h5'}>{inputText?inputText:'Drop your input here, to find out about'} </Typography>
            <Typography className={'typo'} variant={'h6'}> <span>{selection}</span></Typography>
            {/*< TextField ref={ref} onChange={(e)=>setInputText(e.target.value)} value={inputText} />*/}

            <form className={'section1'} onSubmit={(e)=>handleSubmit(e)}>
            <textarea
                ref={inputRef as any}
                className={'text-area'}
                cols={50} rows={10}
                onChange={(e) => setInputText(e.target.value)}
                value={inputText?inputText:[inputText + `\n` + `\n` +  result]}/>
            <button  color={'primary'} className={'butt-trans'}  >Enter to Submit</button>
            </form>
            <Typography sx={{
                color:'black',
                fontSize:'1.0rem',
                fontWeight:'bold',
                backgroundColor:'yellow',
                padding:'10px',
                borderRadius:'10px',
                marginTop:'20px',
            }} variant={'h5'} onClick={clearFields}>Clear Text Area</Typography>
        </div>
    )
})

export default Translation ;