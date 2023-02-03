import * as React from "react";
import { AppbarHeader, MyList} from "../../../styles/appbar";
import Typography from "@mui/material/Typography";
import {ListItemButton, ListItemIcon, ListItemText} from "@mui/material";



const MenuHeaderListUpper = ()=>{
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
                flexDirection: 'row',
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