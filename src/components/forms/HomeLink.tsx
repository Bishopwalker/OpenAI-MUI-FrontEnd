import * as React from "react";
import {Link} from "react-router-dom";
import {Button, Typography} from "@mui/material";

export default function HomeLink() {
    return (
        <>
            <Link to='/signup'>
                <Button>Sign Up</Button>
            </Link>
            <Link to={'/'}>
                <Typography variant={'subtitle2'} gutterBottom align="center"   >
                    Landing
                </Typography>
            </Link>
        </>
    )
}