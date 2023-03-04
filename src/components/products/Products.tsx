import * as React from "react";
import {useTheme, useMediaQuery, Grid, Container} from "@mui/material";
import {data} from "./data";
import SingleProduct from "./SingleProduct";

const Products = () => {

    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('md'))

 const renderProducts = data.map((product,index)=>(
     <Grid item key={index} display={'flex'} flexDirection={'column'}
     alignItems={'center'}>

    <SingleProduct product={product} matches={matches}/>
     </Grid>
 ))
    return (
        <Container>
            <Grid
                container
                justifyContent={'center'}
                sx={{margin: '20px 4px 10px 4px'}}>
                {renderProducts}
            </Grid>


        </Container>
    )
}
export default Products