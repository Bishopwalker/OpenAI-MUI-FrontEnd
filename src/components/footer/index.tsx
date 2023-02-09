import * as React from "react";
import {FooterContainer, FooterTitle} from "../../styles/footer";
import Box from "@mui/material/Box";
import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";

const Footer = () => {

    return (
        <FooterContainer sx={{
           p:{xs: 0, md: 4, lg: 10, xl: 10},
            pt:12,
            pb:12,
            fontSize: {xs: '12px', sm: '13px', md: '20px', lg: '20px', xl: '20px'},
            display: 'flex',
            flexDirection: {xs:'column', sm:'row', md:'column', lg:'column', xl:'column'},
            justifyContent: {xs:'space-around', sm:'space-around', md:'space-around', lg:'space-around', xl:'space-around'},

        }}>
                <Grid container spacing={2} justifyContent={'center'}>
                    <Grid item md={6} lg={4} >
                        <FooterTitle>
                            Contact Us
                        </FooterTitle>
                        <Typography variant={'subtitle1'} sx={{pt:2}}>
                            Email: info@northernneckgarbage.com
                        </Typography>
                        <Typography variant={'subtitle1'} sx={{pt:2}}>
                            Phone: 804-435-1234
                        </Typography>
                        <Typography variant={'subtitle1'} sx={{pt:2}}>
                            Address: 164 Cellar Haven Ln, Lottsburg, VA 22511
                            </Typography>
                    </Grid>
                    <Grid item md={6} lg={4} >
                        <FooterTitle>
                            Hours
                        </FooterTitle>
                        <Typography variant={'subtitle1'} sx={{pt:2}}>
                            Monday - Friday: 7:00 AM - 5:00 PM
                        </Typography>
                </Grid>
                </Grid>
            <Typography variant={'subtitle2'} sx={{
                pt:2,
                position: 'relative',
                bottom: {xs:'-40px', sm:'-10px', md:'-70px', lg:'-70px', xl:'-70'},
            }}>
                © 2021 Northern Neck Garbage. All rights reserved.
            </Typography>
        </FooterContainer>
    )
}
export default Footer