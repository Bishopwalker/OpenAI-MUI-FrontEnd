import * as React from "react";
import {MyList} from "../../styles/appbar";
import {Divider, ListItemButton, ListItemIcon} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";


const Actions = () => {


    return (
       <MyList    sx={{
           display: 'flex',
           flexDirection:'row',
                justifyContent: 'center',

       }} >
           <ListItemButton>
               <ListItemIcon>
                   <FavoriteIcon/>
               </ListItemIcon>
           </ListItemButton>
           <Divider orientation='vertical' flexItem />

           <ListItemButton sx={{
               position: 'relative',
                marginTop: '20px'
           }}>
               <ListItemIcon>
                   <PersonIcon/>
               </ListItemIcon>
           </ListItemButton>
           <Divider orientation='vertical' flexItem />
       </MyList>
    )
}
export default Actions