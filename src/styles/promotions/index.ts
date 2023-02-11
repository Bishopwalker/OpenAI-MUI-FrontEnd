import Box from "@mui/material/Box";
import {styled} from "@mui/material";
import Theme, {Colors} from "../theme";


export const PromotionsContainer = styled(Box)((theme:typeof Theme)=>({

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px 0px 20px 0px',
    overflow: 'hidden',
    width: '75vw',
    color: Colors.white,

}))

export const PromotionsContent = styled(Box)((theme:typeof Theme)=>({
    fontFamily: 'Roboto',
    backgroundColor: '#f6bb21',
    Color: Colors.white,
    fontSize: '2.5rem',
     padding: '10px',
    borderRadius: '20px',
    width: '100%',

} ))