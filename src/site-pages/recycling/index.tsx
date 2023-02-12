import * as React from "react";
import {Link} from "react-router-dom";
import {Button} from "@mui/material";

const Recycling = () => {

    return (
        <div>
            <h1>Recycling</h1>
            <Link to={'/'}>
                <Button variant={'contained'}>Return Home</Button>
            </Link>
        </div>
    )
}
export default Recycling