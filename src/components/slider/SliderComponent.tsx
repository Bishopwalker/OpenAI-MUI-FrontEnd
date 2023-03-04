import * as React from "react";
// @ts-ignore
import Slider from 'react-slick'
import Banner from "../banner";
import {Button, Card, CardContent, CardMedia, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import GridContent from "./GridContent";
import ComplexButton from "./ComplexButton";
import {Link} from "react-router-dom";

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
              <Link to={'/'}> <GridContent img={'/images/04_16ft_14k_gooseneck_dump.jpg'}/></Link>
                <Link to={'/'}>  <GridContent img={'/images/maxresdefault.jpg'}/> </Link>

                    <Link to={'/'}> <GridContent img={'/images/NewGooseneckProPactor-500x206.png'}/></Link>
                        <Link to={'/'}>  <GridContent img={'/images/bttw.jpg'}/> </Link>
                            <Link to={'/'}><GridContent img={'/images/ProPactor_NEW19-1024x471.png'}/> </Link>

            </Slider>
        </div>
    )
}

// @ts-ignore
export default SliderComponent