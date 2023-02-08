import * as React from "react";
import {AppbarContainer, AppbarHeaderLower, MyList} from "../../../styles/appbar";
import {Grid, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import Typography from "@mui/material/Typography";
import MenuHeaderList from "../shared/MenuHeaderList";
import MenuHeaderListUpper from "../shared/MenuHeaderListUpper";
import SliderPromotions from "../../promotions";
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



                <Typography variant="h4" component="span" sx={{
                    paddingTop:'40px',
                    color:'#6b3434',
                    fontFamily: 'Roboto',

                }}>

                  <SliderPromotions/>
                </Typography>
                <Typography variant="h6" component="div" sx={{
                    paddingTop:'20px',
                    fontFamily: 'Roboto',
                }}  >
                </Typography>

            </AppbarHeaderLower>



        </AppbarContainer>
    )
}
export default AppbarDesktop