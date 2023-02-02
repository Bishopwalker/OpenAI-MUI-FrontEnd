import * as React from "react";
import {AppbarContainer, AppbarHeader, MyList} from "../../styles/appbar";
import {ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import Typography from "@mui/material/Typography";

const img='src/assets/garbage-truck.svg'

type Props = {
    matches: boolean;

}
const AppbarDesktop = ({matches}:Props) => {

    return (
    /*Appbar Container
    * Headers
    * Nav
    * */
        <AppbarContainer>
            <MyList sx={{
                paddingLeft: ' 80px',
                display: 'flex',
                flexDirection: 'row',
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
           Northern Neck Garbage Collection, LLC
                <Typography variant="h4" component="div" sx={{

                    color:'#6b3434',
                    fontFamily: 'Roboto',
                }}>
                   Let us take do the dirty work.....
                </Typography>
                <Typography variant="h6" component="div" sx={{

                    fontFamily: 'Roboto',
                }}  >
                    You do "Literally" anything else
                </Typography>
            </AppbarHeader>


        </AppbarContainer>
    )
}
export default AppbarDesktop