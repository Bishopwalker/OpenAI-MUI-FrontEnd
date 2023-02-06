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
        autoplaySpeed: 10000,

    }
const images = ['src/assets/04_16ft_14k_gooseneck_dump.jpg',
    'src/assets/maxresdefault.jpg', 'src/assets/NewGooseneckProPactor-500x206.png',
    'src/assets/bttw.jpg', 'src/assets/ProPactor_NEW19-1024x471.png']
    return (
        <div>
            <Slider {...settings}>
            <ComplexButton image={'src/assets/04_16ft_14k_gooseneck_dump.jpg'}/>
               <GridContent img={'src/assets/04_16ft_14k_gooseneck_dump.jpg'}/>
               <GridContent img={'src/assets/maxresdefault.jpg'}/>

                <GridContent img={'src/assets/NewGooseneckProPactor-500x206.png'}/>
                <GridContent img={'src/assets/bttw.jpg'}/>
                <GridContent img={'src/assets/ProPactor_NEW19-1024x471.png'}/>

            </Slider>
        </div>
    )
}

// @ts-ignore
export default SliderComponent