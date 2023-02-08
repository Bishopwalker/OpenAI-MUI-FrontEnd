import * as React from "react";
import {AppbarContainer, AppbarHeaderLower, MyList} from "../../../styles/appbar";
import {ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import HomeMenu from "../../navMenu/HomeMenu";
import BusinessMenu from "../../navMenu/BusinessMenu";
import ServicesMenu from "../../navMenu/ServicesMenu";


const img='src/assets/garbage-truck.svg'


const MenuHeaderList = () => {


    return (
        <MyList sx={{
            paddingTop:{xs:'150px', sm:'150px', md:'0px', lg:'0px', xl:'0px'},
            display: 'flex',
            flexDirection: {xs:`column`, sm:`column`, md:`row`, lg:`row`, xl:`row`},
          //  justifyContent: {xs:'space-evenly', sm:'space-evenly', md:'space-evenly', lg:'space-evenly', xl:'space-evenly'},
            width: '100%',
            height: {xs:'300px', sm:'250px', md:'100px', lg:'100px', xl:'100px'},
        }}>
            <ListItemButton>
                <ListItemIcon>
                    <img width={'50px'} alt={'Garbage Truck Home Button'} src={img}
                    />
                </ListItemIcon>
               <HomeMenu/>
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <img width={'50px'} alt={'Garbage Truck Services Button'} src={img}
                    />
                </ListItemIcon>
                <BusinessMenu/>
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <img width={'50px'}  alt={'Garbage Truck Promotions Button'}src={img}
                    />
                </ListItemIcon>
                <ServicesMenu/>
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
        </MyList>)
}
export default MenuHeaderList