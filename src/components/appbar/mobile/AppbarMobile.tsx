import * as React from "react";
import {AppbarContainer, AppbarHeader, MyList} from "../../../styles/appbar";
import {Grid, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import Typography from "@mui/material/Typography";
import SailingIcon from '@mui/icons-material/Sailing';
import MenuHeaderListUpper from "../shared/MenuHeaderListUpper";
import MenuHeaderList from "../shared/MenuHeaderList";
import SliderPromotions from "../../promotions";

type Props = {
    matches: boolean;
}
const img='/images/garbage-truck.svg'
const AppbarMobile = ({matches}:Props) => {

    return (
        <AppbarContainer>
            <MenuHeaderListUpper />
            <MenuHeaderList/>

            <AppbarHeader>

            </AppbarHeader>


            <Typography variant="h4" component="div" sx={{
                color:'#6b3434',
                fontFamily: 'Roboto',
            }}  >
                <SliderPromotions/>
            </Typography>





        </AppbarContainer>
    )
}
export default AppbarMobile