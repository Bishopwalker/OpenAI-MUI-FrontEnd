import * as React from "react";
import {Button} from "@mui/material";
import {Link} from "react-router-dom";

const Bill = () => {

    return (
        <div>
            <h1>Pay My Bills</h1>
            <Link to={'/'}>
                <Button variant={'contained'}>
                    Return To Landing
                </Button>
            </Link>
        </div>
    )
}
export default Bill