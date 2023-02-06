import * as React from "react";
import {ImageBackdrop, ImageButton, ImageMarked, ImageSrc,Image} from "../../styles/banner";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

type ComplexButtonProps={
    image: string
}

const ComplexButton = ({image}:ComplexButtonProps) => {

    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%',height:'100%' }}>
                <ImageButton
                    focusRipple
                    style={{
                        width:'100%',

                    }}
                >
                    <ImageSrc style={{ backgroundImage: `url(${image})` }} />
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
                                fontSize: '3rem',
                                position: 'relative',
                                p: 4,
                                pt: 2,
                                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                            }}
                        >
                            {`Join The Movement, `}<span style={{
                            color: 'yellow',
                            fontWeight: 'bold',
                            fontFamily: 'Roboto',

                        }} > Zero Waste!</span>
                            <ImageMarked className="MuiImageMarked-root" />
                        </Typography>
                    </Image>
                </ImageButton>
            ))
        </Box>
    )
}
export default ComplexButton