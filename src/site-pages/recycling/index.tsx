import * as React from "react";
import {Link} from "react-router-dom";
import {Button} from "@mui/material";

const Recycling = () => {

    return (
        <div>
            <h1>Recycling</h1>
            <p>Recycling is the process of converting waste materials into new materials and objects. It is an alternative to "conventional" waste
                disposal that can save material and help lower greenhouse gas emissions. Recycling can prevent the waste of potentially useful materials a
                nd reduce the consumption of fresh raw materials, thereby reducing: energy usage, air pollution (from incineration), and water pollution
                (from landfill run off). Recycling is a key component of modern waste reduction and is the third component of the "Reduce, Reuse, Recycle" waste
                hierarchy.
            </p>
            <p>At NNGC we don't just toss our cans in the landfill. We save them up and recycling them, donating the money to help fund Northern Neck Christian
                Academy</p>
            <Link to={'/'}>
                <Button variant={'contained'}>Return Home</Button>
            </Link>
        </div>
    )
}
export default Recycling