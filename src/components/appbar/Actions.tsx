import * as React from "react";
import {MyList} from "../../styles/appbar";
import {ListItemButton, ListItemIcon} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";


const Actions = () => {

    return (
       <MyList sx={{
           display: 'flex',
              flexDirection: 'column',
                justifyContent: 'space-evenly',

       }} >
           <ListItemButton>
               <ListItemIcon>
                   <FavoriteIcon/>
               </ListItemIcon>
           </ListItemButton>

           <ListItemButton sx={{
               position: 'relative',
                marginTop: '20px'
           }}>
               <ListItemIcon>
                   <PersonIcon/>
               </ListItemIcon>
           </ListItemButton>
       </MyList>
    )
}
export default Actions