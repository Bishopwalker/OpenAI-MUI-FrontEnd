import * as React from "react";
import {FooterContainer, FooterTitle} from "../../styles/footer";
import Box from "@mui/material/Box";
import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
const Footer = () => {

    return (
        <FooterContainer sx={{
            height:'auto',
           p:{xs: 0, md: 4, lg: 10, xl: 10},
            pt:12,
            pb:12,
            fontSize: {xs: '10px', sm: '10px', md: '20px', lg: '20px', xl: '20px'},
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
                <Grid item md={6} lg={4} >
                    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <FacebookIcon sx={{mr:1}}/>
                        <TwitterIcon sx={{mr:1}}/>
                        <InstagramIcon sx={{mr:1}}/>
                    </Box>
                </Grid>
            </Grid>
            <Typography variant={'h6'} sx={{
                pt:2,

            }}>
                © 2021 Northern Neck Garbage Collection, LLC.
            </Typography>
        </FooterContainer>
    )
}
export default Footer