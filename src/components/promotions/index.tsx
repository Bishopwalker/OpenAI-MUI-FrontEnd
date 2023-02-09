import * as React from "react";
import {PromotionsContainer, PromotionsContent} from "../../styles/promotions";
import Box from "@mui/material/Box";
import {Button, Slide} from "@mui/material";

const messages = [
    'Let us do the dirty work.....',
    'Do anything BUT, take out the trash!',
    `Love Children? Love the Environment? Hate trash?? Come join us!`,
    `Let's goo Brandon!!!!`,
    `Let Life Live!!`
]
type Messages = {
    messages: string[];
}
const SliderPromotions = () => {
//const number = Math.floor(Math.random() * messages.length)
    const containerRef = React.useRef<HTMLDivElement>(null);

    const [messageIndex, setMessageIndex] = React.useState(0);
    const [show, setShow] = React.useState(true);

    React.useEffect(() => {
        const interval = setInterval(() => {
       setShow(false);
          setTimeout(() => {
                setMessageIndex(i=>(i+1)%messages.length)
                setShow(true)
          }, 1000)
        },4000)
        return () => clearInterval(interval)
    }, [ ])

    return (
    // @ts-ignore
        <PromotionsContainer  ref={containerRef}>
            <Slide
               container={containerRef.current}
                direction={show ? 'left' : 'right'}
                in={show}
                timeout={{
                    enter: 1000,
                    exit: 500,
                }}
            >
           <Box display={"flex"} justifyContent={'center'}
           alignItems={'center'} >
               <Button focusRipple={true} variant={"text"}>
               { /* @ts-ignore*/}
               <PromotionsContent sx={{
                   fontSize: {xs:'1.0rem', sm:'1.5rem', md:'1.75rem', lg:'1.75rem'},
               }}>
               {messages[messageIndex]}
                </PromotionsContent>
               </Button>
           </Box>
            </Slide>
        </PromotionsContainer>
    )
}
export default SliderPromotions