import * as React from "react";
import {ProductType} from "./data";
import {Product, ProductImage} from "../../styles/products/index.js";
import ProductMeta from "./ProductMeta";
import Typography from "@mui/material/Typography";

type Props ={
    product:ProductType,
    matches:boolean
}
const SingleProduct = ({product, matches}:Props) => {

    return (
        <Product>
            <Typography variant={matches? "h6" : "h5"} lineHeight={2}>
                {product.name}
            </Typography>
           <ProductImage src={product.src} />
            <ProductMeta product={product} matches={matches} />
        </Product>
    )
}
export default SingleProduct