import * as React from "react";
import {ProductType} from "./data";
import {ProductMetaWrapper} from "../../styles/products";
import Typography from "@mui/material/Typography";

type Props = {
    product: ProductType
    matches: boolean
}
const ProductMeta = ({product,matches}:Props) => {

    return (
        <ProductMetaWrapper>
            <Typography variant={matches? "subtitle2" : "subtitle1"} lineHeight={1.5}>

            </Typography>
            <Typography variant={matches? "h4" : "h3"} lineHeight={1}>
                {product.price.currency + product.price.value }
            </Typography>
            <Typography variant={matches? "subtitle2" : "subtitle1"} lineHeight={1.5}>
                {product.description}
            </Typography>
        </ProductMetaWrapper>
    )
}
export default ProductMeta