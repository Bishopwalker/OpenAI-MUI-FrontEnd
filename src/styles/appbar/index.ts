import {List, styled } from "@mui/material";
import {Box} from "@mui/material";
import {Colors} from "../theme";
import Typography from "@mui/material/Typography";
import '@fontsource/Montez'
import {ReactNode} from "react";

export const AppbarContainer = styled(Box)(() => ({

    display: 'flex',
    flexDirection: 'column',
    marginTop:4,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2px 8px'

 }));

//header
export const AppbarHeader = styled(Typography)(() => ({
  padding: '4px',
  flexGrow: 1,
    fontSize:'4em',
  fontFamily: "'Montez' ,'cursive'",
  color:Colors.secondary,
 }));

export const MyList = styled(List)((type: any )=>({
    display:type === 'flex' ? 'flex' : 'block',
    flexGrow:3,
    justifyContent: 'center',
    alignItems: 'center',
}))