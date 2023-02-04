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
            }}>
                NN
            </Typography>
            <Typography variant="h3" component='span' sx={{
                color: '#49916b',
            }}>
                GC
            </Typography>

            <MyList sx={{
                marginLeft: '350px',
                display: 'flex',
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