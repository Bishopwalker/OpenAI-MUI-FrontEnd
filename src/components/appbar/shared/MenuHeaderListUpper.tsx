import * as React from "react";
import { AppbarHeader, MyList} from "../../../styles/appbar";
import Typography from "@mui/material/Typography";
import {ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import store from "../../../redux/store";
import {useSelector} from "react-redux";
 import {RootState} from "../../../redux/types";
import {Link} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../redux/hooks/hooks";
import {changeTitle} from "../../../redux/pageTitleSlice";

type Anchor = 'top' | 'left' | 'bottom' | 'right';



const MenuHeaderListUpper = ()=>{
    let state = store.getState();
    const userInfo = state?useAppSelector(state => state.userInfo):null


console.log('userInfo',userInfo)
    return (
         <AppbarHeader>

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
                 <Link to={'/appointments'} >   <ListItemText primary="View Schedule"/>
                 </Link>
                </ListItemButton>
                <ListItemButton>
                  <Link to={userInfo?.enabled?'/signup':'/login'}>
                    <ListItemText primary="My Account"/>
                  </Link>
                </ListItemButton>
                <ListItemButton>
                    <Link to={'/donations'}>
                    <ListItemText primary="Support Northern Neck Christian School"/>
                    </Link>
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