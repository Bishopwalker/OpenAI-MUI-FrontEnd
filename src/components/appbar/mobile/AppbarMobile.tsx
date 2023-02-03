import * as React from "react";
import {AppbarContainer, AppbarHeader, MyList} from "../../../styles/appbar";
import {Grid, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import Typography from "@mui/material/Typography";
import SailingIcon from '@mui/icons-material/Sailing';

type Props = {
    matches: boolean;
}
const img='src/assets/garbage-truck.svg'
const AppbarMobile = ({matches}:Props) => {

    return (
        <AppbarContainer>
            <MyList sx={{
                paddingLeft: ' 80px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                width: '100%',
            }}>

                <ListItemButton>
                    <ListItemIcon>
                        <img width={'50px'} alt={'Garbage Truck Home Button'} src={img}
                        />
                    </ListItemIcon>
                        <ListItemText primary="Home"/>
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <img width={'50px'} alt={'Garbage Truck Services Button'} src={img}
                        />
                    </ListItemIcon>
                        <ListItemText primary="Services"/>
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <img width={'50px'}  alt={'Garbage Truck Promotions Button'}src={img}
                        />
                    </ListItemIcon>
                        <ListItemText primary="Promotions"/>
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <img width={'50px'} alt={'Garbage Truck Contact Us Button'} src={img}
                        />
                    </ListItemIcon>
                        <ListItemText primary="Contact Us"/>
                </ListItemButton>
            </MyList>
            <AppbarHeader>

              N.N.
                Garbage Collection, LLC
            </AppbarHeader>


            <Typography variant="h4" component="div" sx={{
                color:'#6b3434',
                fontFamily: 'Roboto',
            }}  >
                Go Fishing, we got the Trash
            </Typography>





        </AppbarContainer>
    )
}
export default AppbarMobile