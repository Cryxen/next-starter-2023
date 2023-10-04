"use client"
import { createProducts, faker } from "@/features/responses/CreateProduct"
import ProductItem from "./ProductItem"

const Products = () => {
    const products = Array.from(createProducts({count: 10, faker}).values())

    const deleteProductHandler = (id: number) => {
        console.log("Forsøker å slette: " + id)
    }

    console.log(products)
    return(
        <div className="flex flex-row flex-wrap">
        {products.map((product) => (
            <ProductItem key={product.id}{...product} onDelete={deleteProductHandler}/>
        ))}
        </div>
    )
}
export default Products