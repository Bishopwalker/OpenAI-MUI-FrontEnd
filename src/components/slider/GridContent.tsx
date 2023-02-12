import * as React from "react";
import {Button, Card, CardMedia, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {Image, ImageBackdrop, ImageButton, ImageMarked, ImageSrc} from "../../styles/banner";

type GridContentProps = {
    img: string
}

const buttonMessages=[
    'Join The Movement, ',
    'Get Your Dumpster Today,',
    `Sign up for Trash Pick Up,`,
]
function GridContent({img}: GridContentProps) {
    const [messageIndex, setMessageIndex] = React.useState(0)

React.useEffect(() => {
        const interval = setInterval(() => {
            setMessageIndex((prev) => (prev + 1)%buttonMessages.length)
        }, 50000)
        return () => clearInterval(interval)

}, [])

    return(
        <Grid container spacing={5} justifyContent={'center'} sx={{
        }} >
            <Grid item xs={20} sm={12} md={12} lg={12} xl={12} >
                     <ImageButton
                        focusRipple
                        style={{
                            width:'100%',

                        }}
                    >
                        <ImageSrc style={{ backgroundImage: `url(${img})` }} />
                        <ImageBackdrop className="MuiImageBackdrop-root" />
                        <Image>
                            <Typography
                                component="span"
                                variant="subtitle1"
                                color="inherit"
                                sx={{
                                    color:'#49ec16',
                                    fontWeight: 'bold',
                                    fontFamily: 'Roboto',
                                    fontSize: {xs:'1.25rem', sm:'1.25rem', md:'2rem', lg:'3rem', xl:'3rem'},
                                    position: 'relative',
                                    p: 4,
                                    pt: 2,
                                    pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                                }}
                            >
                                {`${buttonMessages[messageIndex]} `}<span style={{
                                color: 'yellow',
                                fontWeight: 'bold',
                                fontFamily: 'Roboto',

                            }} > We do Waste!</span>
                                <ImageMarked className="MuiImageMarked-root" />
                            </Typography>
                        </Image>
                    </ImageButton>
            </Grid>
        </Grid>
    )
}
export default GridContent