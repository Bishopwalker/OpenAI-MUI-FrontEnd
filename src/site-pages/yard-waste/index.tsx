import * as React from "react";
import {Link} from "react-router-dom";
import {Button} from "@mui/material";

const YardWaste = () => {

    return (
        <div>
            <h1>Yard Waste</h1>
            <Link to={'/'}>
                <Button variant={'contained'}>Return Home</Button>
            </Link>
        </div>
    )
}
export default YardWaste