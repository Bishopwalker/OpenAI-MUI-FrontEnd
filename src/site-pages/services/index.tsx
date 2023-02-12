import * as React from "react";
import SliderComponent from "../../components/slider/SliderComponent";
import Banner from "../../components/banner";
import {Link} from "react-router-dom";
import {Button} from "@mui/material";

const Services = () => {

    return (
        <div>
            <SliderComponent/>
            <Banner/>
            <h1>Services</h1>
            <Link to={'/'}>
                <Button variant={'contained'}>Return Home</Button>
            </Link>
        </div>
    )
}
export default Services