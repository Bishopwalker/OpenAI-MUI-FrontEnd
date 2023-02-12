import * as React from "react";
// @ts-ignore
import Slider from 'react-slick'
import Banner from "../banner";
import {Button, Card, CardContent, CardMedia, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import GridContent from "./GridContent";
import ComplexButton from "./ComplexButton";

const SliderComponent = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        randomize: true,
        autoplay: true,
        autoplaySpeed: 50000,


    }

    return (
        <div>
            <Slider {...settings}>
            {/*<ComplexButton image={'/images/04_16ft_14k_gooseneck_dump.jpg'}/>*/}
               <GridContent img={'/images/04_16ft_14k_gooseneck_dump.jpg'}/>
               <GridContent img={'/images/maxresdefault.jpg'}/>

                <GridContent img={'/images/NewGooseneckProPactor-500x206.png'}/>
                <GridContent img={'/images/bttw.jpg'}/>
                <GridContent img={'/images/ProPactor_NEW19-1024x471.png'}/>

            </Slider>
        </div>
    )
}

// @ts-ignore
export default SliderComponent