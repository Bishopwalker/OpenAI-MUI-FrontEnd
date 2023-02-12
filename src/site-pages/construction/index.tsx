import * as React from "react";
import {Link} from "react-router-dom";
import {Button} from "@mui/material";

const Construction = () => {
console.log('Construction')
    return (
        <div>
            <h1>Construction</h1>
            <Link to={'/'}>
                <Button variant={'contained'}>Return Home</Button>
            </Link>
        </div>
    )
}
export default Construction