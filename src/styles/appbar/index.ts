import {List, styled } from "@mui/material";
import {Box} from "@mui/material";
import {Colors} from "../theme";
import Typography from "@mui/material/Typography";
import '@fontsource/Montez'
import AppBar from '@mui/material/AppBar';

export const AppbarContainer = styled(Box)(() => ({

    display: 'flex',
    flexDirection: 'column',
    marginTop:4,
    justifyContent: 'center',
    alignItems: 'baseline',
    padding: '2px 8px',
    width: '100%',



 }));

//header
export const AppbarHeaderLower = styled(Box)(() => ({
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
    width: '100%'

}))

export const AppbarHeader = styled(AppBar)(() => ({
    display: 'flex',
  flexDirection:  'row',
 //justifyContent: 'flex-end',

 } ));

export const ActionIconsContainerDesktop = styled(Box)(()=>({
    flexGrow:0,

}))

export const ActionIconsContainerMobile = styled(Box)(()=>({
    display:"flex",
    background:Colors.shaft,
    position:'fixed',
    bottom:0,
    left:0,
    width:'100%',
    alignItems:'center',
    zIndex:99,
    borderTop: `1px solid ${Colors.border}`
}))