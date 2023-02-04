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
            <Typography variant="h3" component='span' sx={{
                color: '#d9bb33',
                paddingTop: {xs: '30px',sm:'20px', md: '0px', lg: '0px', xl: '0px', },
            }}>
                NN
            </Typography>
            <Typography variant="h3" component='span' sx={{
                color: '#49916b',
                paddingTop: {xs: '30px',sm:'20px', md: '0px', lg: '0px', xl: '0px', },
            }}>
                GC
            </Typography>

            <MyList sx={{
                marginLeft: {xs:'125px',s:'150px',sm:'200px', md: '250px', lg: '250px', xl: '250px',},
                display: 'flex',
                paddingTop: {xs: '20px',sm:'20px', md: '0px', lg: '0px', xl: '0px', },
                flexDirection: {md: 'row', lg: 'row', xl: 'row', xs: 'column', sm: 'column'},
                justifyContent: 'space-evenly',
                width: '100%',

            }}>
                <ListItemButton>
                    <ListItemText primary="View Schedule"/>
                </ListItemButton>
                <ListItemButton>
                    <ListItemText primary="Pay My Bill"/>
                </ListItemButton>
                <ListItemButton>
                    <ListItemText primary="Get Support"/>
                </ListItemButton>
            </MyList>
        </AppbarHeader>

    )
}
export default MenuHeaderListUpper