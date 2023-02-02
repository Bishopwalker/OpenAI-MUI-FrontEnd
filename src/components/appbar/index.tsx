import * as React from "react";
import {useMediaQuery, useTheme} from "@mui/material";
import AppbarMobile from "./AppbarMobile";
import AppbarDesktop from "./AppbarDesktop";

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