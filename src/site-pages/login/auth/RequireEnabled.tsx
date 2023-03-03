import * as React from "react";
import {useAppSelector} from "../../../redux/hooks/hooks";
import {Navigate, Outlet, useLocation} from "react-router-dom";

const RequireEnabled = () => {
    const userInfo = useAppSelector(state => state.userInfo.userLogInfo)
let location= useLocation();

    if (userInfo == null) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they log in, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to="/login" state={{ from: location }} />;
    }

    return <Outlet />;
}

export default RequireEnabled