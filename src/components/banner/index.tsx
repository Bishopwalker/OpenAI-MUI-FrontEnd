import * as React from "react";
import {CSSObject, SxProps, Theme, useMediaQuery, useTheme} from "@mui/material";
import {BannerContainer, BannerContent} from "../../styles/banner";
import Typography from "@mui/material/Typography";

const Banner = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    return (
    // @ts-ignore
        <BannerContainer
        sx={{
            paddingTop:"40px",
            flexDirection: {md: 'row', lg: 'row', xl: 'row', xs: 'column', sm: 'column'},


        }}
        >
            {   /* @ts-ignore*/}
            <BannerContent>
              <Typography variant='h4'>
                  Join The Movement, Zero Waste
              </Typography>
                <p>Sub Banner Text</p>
            <div>
                <p>Words that should add spacing idea to the page</p>
            </div>
            </BannerContent>
        </BannerContainer>
    )
}
export default Banner
