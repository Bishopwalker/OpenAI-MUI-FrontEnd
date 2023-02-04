import * as React from "react";
import {AppbarContainer, AppbarHeaderLower, MyList} from "../../../styles/appbar";
import {ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import Typography from "@mui/material/Typography";
import MenuHeaderList from "../shared/MenuHeaderList";
import MenuHeaderListUpper from "../shared/MenuHeaderListUpper";
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
            <MenuHeaderListUpper />
        <MenuHeaderList/>
            <AppbarHeaderLower>
        NNGC
                <Typography variant="h4" component="div" sx={{
                    paddingTop:'40px',
                    color:'#6b3434',
                    fontFamily: 'Roboto',

                }}>
                   Let us do the dirty work.....
                </Typography>
                <Typography variant="h6" component="div" sx={{
                    paddingTop:'20px',
                    fontFamily: 'Roboto',
                }}  >
                    You do "Literally" anything else
                </Typography>
            </AppbarHeaderLower>



        </AppbarContainer>
    )
}
export default AppbarDesktop