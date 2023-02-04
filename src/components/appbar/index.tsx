import * as React from "react";
import {useMediaQuery, useTheme} from "@mui/material";
import AppbarMobile from "./mobile/AppbarMobile";
import AppbarDesktop from "./desktop/AppbarDesktop";
import store from "../../redux/store";
import {SWITCH_SCREEN_SIZE} from "../../redux/actions";
//Bring in the store and infer its type




//create context for the appbar
const Appbar = () => {


    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
//console.log(matches)
    React.useEffect(() => {
       matches?store.dispatch({type: SWITCH_SCREEN_SIZE, payload: matches}):
           store.dispatch({type: SWITCH_SCREEN_SIZE, payload: matches})
    }, [matches])

    return (
        <div>
            {matches ?<AppbarMobile matches={matches}/>:<AppbarDesktop matches={matches}/> }
        </div>
    )
}
export default Appbar