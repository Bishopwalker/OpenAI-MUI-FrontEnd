import * as React from "react";
import { AppbarHeader, MyList} from "../../../styles/appbar";
import Typography from "@mui/material/Typography";
import {ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import store from "../../../redux/store";
import {useSelector} from "react-redux";
 import {RootState} from "../../../redux/types";

const screenType = (state: RootState) => state.screenType
const MenuHeaderListUpper = ()=>{

const screen = useSelector(screenType)


    return (
         <AppbarHeader>
            {/*<Typography variant="h3" component='span' sx={{*/}
            {/*    color: '#d9bb33',*/}
            {/*    paddingTop: {xs: '30px',sm:'20px', md: '0px', lg: '0px', xl: '0px', },*/}
            {/*}}>*/}
            {/*    NN*/}
            {/*</Typography>*/}
            <Typography variant="caption" component='span' sx={{
                color: '#49916b',
                paddingTop: {xs: '30px',sm:'20px', md: '0px', lg: '0px', xl: '0px', },
            }}>

            </Typography>
<img src={'/images/NNGC.LOGO.NW.svg'} style={{
    width: '150px',
    height: '75px',
}}/>
            <MyList sx={{
                // marginLeft: {xs:'00px',s:'00px',sm:'00px', md: '00px', lg: '200px', xl: '250px',},
                display: 'flex',
                paddingTop: {xs: '20px',sm:'20px', md: '0px', lg: '0px', xl: '0px', },
                flexDirection:  { xs:'column',s:'column',sm:'column', md: 'row', lg: 'row', xl: 'row',},
                justifyContent: 'space-evenly',
                width: '100%',
                listStyle: 'none',


            }}>
                <ListItemButton>
                    <ListItemText primary="View Schedule"/>
                </ListItemButton>
                <ListItemButton>
                    <ListItemText primary="Pay My Bill"/>
                </ListItemButton>
                <ListItemButton>
                    <ListItemText primary="Support Northern Neck Christian School"/>
                </ListItemButton>
            </MyList>
             <img src={'/images/NNGC.LOGO.NW.svg'} style={{
                 width: '150px',
                 height: '75px',
             }}/>
        </AppbarHeader>

    )
}
export default MenuHeaderListUpper