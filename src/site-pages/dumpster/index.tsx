import * as React from "react";
import {Button} from "@mui/material";
import {Link} from "react-router-dom";

const Dumpster = () => {

    return (
        <div>
            <h1>Dumpster</h1>
            <Link to={'/'}>
            <Button variant={'contained'}>Return Home</Button>
            </Link>
        </div>
    )
}
export default Dumpster