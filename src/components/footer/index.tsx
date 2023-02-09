import * as React from "react";
import {FooterContainer, FooterTitle} from "../../styles/footer";
import Box from "@mui/material/Box";
import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";

const Footer = () => {

    return (
        <FooterContainer sx={{
           p:{xs: 4, md: 10, lg: 15, xl: 10},
        }}>
                <Grid container spacing={2} justifyContent={'center'}>
                    <Grid item md={6} lg={4} >
                        <FooterTitle>
                            About Us
                        </FooterTitle>
                    </Grid>
                </Grid>

        </FooterContainer>
    )
}
export default Footer