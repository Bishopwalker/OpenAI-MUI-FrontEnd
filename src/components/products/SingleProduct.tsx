import * as React from "react";
import {ProductType} from "./data";
import {Product, ProductImage} from "../../styles/products/index.js";
import ProductMeta from "./ProductMeta";

type Props ={
    product:ProductType,
    matches:boolean
}
const SingleProduct = ({product, matches}:Props) => {

    return (
        <Product>
           <ProductImage src={product.src} />
            <ProductMeta product={product} matches={matches} />
        </Product>
    )
}
export default SingleProduct