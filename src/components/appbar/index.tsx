import * as React from "react";
import {useMediaQuery, useTheme} from "@mui/material";
import AppbarMobile from "./mobile/AppbarMobile";
import AppbarDesktop from "./desktop/AppbarDesktop";

//create context for the appbar


const Appbar = () => {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <div>
            {matches ?<AppbarMobile matches={matches}/>:<AppbarDesktop matches={matches}/> }
        </div>
    )
}
export default Appbar