import * as React from "react";
import './Options.css'
type Props ={
    arrayItems: {name:string,id:string,description:string,option:Options}[],
    setSelectedItem:(selectedItem:Options)=>void,
    setSelection:(message:string)=>void,

}
type Options = typeof import('./AIOptions').items[number]['option'];

//Create an OptionSelection component that will take in an array of items of type arrayItems
const OptionSelection = ({arrayItems,setSelectedItem, setSelection}:Props) => {
    //create a state that will hold the selected item
const [message,setMessage]=React.useState<string >('Welcome to the Open AI Image Generator');

    return(
        <div onMouseLeave={()=>setSelectedItem('')} >
            <h2 className={'heading'}>{message}</h2>
            <div className={'grid-main'}>
            {//map through the array of items and create a button for each item
                arrayItems.map((item,index)=>(
                <div className={'grid-child'} key={item.id}
                     onMouseEnter={()=>setMessage(item.name)}
                     onClick={()=> {
                         setSelectedItem(item.option),
                             setSelection(item.name)
                     }}>
                    <h3>#{index} {item.name}</h3>
                    <p>{item.description}</p>
                </div>
                    ))
            }
            </div>
        </div>
    )
}


export default OptionSelection