import * as React from 'react';
// @ts-ignore
import Slider from 'react-slick'
import {Button, ButtonGroup, Card, CardActions, CardContent, CardHeader, CardMedia} from "@mui/material";
import Typography from "@mui/material/Typography";
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {Link} from "react-router-dom";
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

const images =[
    {
    name:'Residential Trash Pickup',
    scr:'/images/trashcanBig.jpg',
    alt:'trashcan',
    description:'We offer residential trash pickup for your home. We have a variety of trash cans to choose from.',
        link:'/home'

},
    {
        name:'Commercial Trash Pickup',
        scr:'/images/Commercial-dumpster-rental.jpg',
        alt:'commercial trashcan',
        description:'We offer commercial trash pickup for your business. We have a variety of trash cans to choose from.',
        link:'/business'
    },
    {
        name:'Recycling Pickup',
        scr:'/images/recycling.jpg',
        alt:'recycle',
        description:'We offer recycling pickup for your home or business. We have a variety of trash cans to choose from.',
        link:'/recycling'
    },
    {
        name:'Yard Waste Pickup',
        scr:'/images/greyBigTrashcan.jpg',
        alt:'yard waste',
        description:'We offer yard waste pickup for your home or business. We have a variety of trash cans to choose from.',
        link:'/yardwaste'
    },
    {
        name:'Roll Off Dumpster Rental',
        scr:'/images/rollOff.jpg',
        alt:'roll off dumpster',
        description:'We offer roll off dumpster rental for your home or business. We have a variety of trash cans to choose from.',
        link:'/rollOff'
    },
    {
        name:'Construction/Commercial Dumpster Rental',
        scr:'/images/yellowRollOFf.jpg',
        alt:'construction dumpster',
        description:'We offer construction/commercial dumpster rental for your home or business. We have a variety of trash cans to choose from.',
        link:'/construction'

    }
]
const BannerCarousel = () => {
    const [sliderRef, setSliderRef] = React.useState(null)
    const settings = {
       arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        speed: 500,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },

        ]
    }


    return (
        <div className='content'>
            <div className='controls'>
                <ButtonGroup sx={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'space-between',
                }} variant="text"  aria-label="text button group">
                { /* @ts-ignore*/}
            <Typography variant={'text'} component={'button'} onClick={() => sliderRef?.slickPrev()}> {'<'}-----  </Typography>
                { /* @ts-ignore*/}
                <Typography variant={'text'} component={'button'} onClick={() => sliderRef?.slickPrev()}>  ----{'>'} </Typography>
                </ButtonGroup>
        <Slider ref={setSliderRef} {...settings}>
            {images.map((image, index) => (
            <Link key={index} to={image.link} >
                <Card sx={{ maxWidth: 400,height:400 }}>
                    <CardMedia
                        sx={{ height: 150, width: 275, margin: 'auto' }}
                        image={image.scr}
                        title={image.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {image.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {image.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </Link>

            ))}
            </Slider>
            </div>
        </div>
    )
}
export default BannerCarousel