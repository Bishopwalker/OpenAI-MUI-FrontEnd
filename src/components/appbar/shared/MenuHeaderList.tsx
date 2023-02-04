import * as React from "react";
import {AppbarContainer, AppbarHeaderLower, MyList} from "../../../styles/appbar";
import {ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
const img='src/assets/garbage-truck.svg'


const MenuHeaderList = () => {

    return (
        <MyList sx={{
            paddingLeft: ' 0px',
            display: 'flex',
            flexDirection: {xs:`column`, sm:`column`, md:`row`, lg:`row`, xl:`row`},
            justifyContent: 'space-evenly',
            width: '100%',
            height: {xs:'500px', sm:'500px', md:'100px', lg:'100px', xl:'100px'},
        }}>
            <ListItemButton>
                <ListItemIcon>
                    <img width={'50px'} alt={'Garbage Truck Home Button'} src={img}
                    />
                </ListItemIcon>
                <ListItemText primary="For Home"/>
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <img width={'50px'} alt={'Garbage Truck Services Button'} src={img}
                    />
                </ListItemIcon>
                <ListItemText primary="For Business"/>
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <img width={'50px'}  alt={'Garbage Truck Promotions Button'}src={img}
                    />
                </ListItemIcon>
                <ListItemText primary="Services"/>
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <img width={'50px'} alt={'Garbage Truck Contact Us Button'} src={img}
                    />
                </ListItemIcon>
                <ListItemText primary="Contact Us"/>
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <SearchIcon/>
                    <ListItemText primary=" AI Search"/>
                </ListItemIcon>
            </ListItemButton>
            {/*<Actions/>*/}
        </MyList>    )
}
export default MenuHeaderList