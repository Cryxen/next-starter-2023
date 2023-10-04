"use client"


import ProductItem from "@/components/ProductItem";
import Products from "@/components/Products";
import ShoppingCart from "@/components/shoppingCart";
import { createProducts, faker } from "@/features/responses/CreateProduct";
import { useState } from "react";

export default function Home() {

  const [products, setProducts] = useState(Array.from(createProducts({count: 10, faker}).values()))

  const addToCartHandler = (id: number) => {
      console.log("Forsøker å legge: " + id + "til handlevogn")
  }

  return (
  <div className="flex flex-row">
    <Products>
        {products.map((product) => (
            <ProductItem key={product.id}{...product} addToCart={addToCartHandler}/>
        ))}
    </Products>
    <ShoppingCart />
    </div>)
}
 