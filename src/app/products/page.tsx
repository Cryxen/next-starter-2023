"use client"


import ProductItem from "@/components/ProductItem";
import Products from "@/components/Products";
import ShoppingCart from "@/components/shoppingCart";
import { createProducts, faker } from "@/features/responses/CreateProduct";
import { useState } from "react";

export default function ProductPage() {
    const [products, setProducts] = useState(Array.from(createProducts({ count: 10, faker }).values()))

    let cart: object[] = []
    let totalSum  = 0
    const addToCartHandler = (id: number, title: string, price: number) => {
        cart = [...cart, {id, title, price}]
        console.log(cart)
        totalSum = addToTotalSumCart(cart)
        console.log("Total sum: " + totalSum)
    }

    const addToTotalSumCart = (cart: object[]) => {
        let sum = 0
        for (const iterator of cart) {
            sum+=iterator.price
        }
        return sum
    }

    const removeFromCartHandler = (id: number) => {
        //cart = cart.filter((product) => product.id != id)
        let index = -1
        index = cart.findIndex((object) => object.id == id)

        console.log(index)
        if (index != -1) {
        cart.splice(index, 1)
        }
        console.log(cart)
        totalSum = addToTotalSumCart(cart)
        console.log("Total sum: " + totalSum)
    }


    return (
        <div className="flex flex-row">
            <Products>
                {products.map((product) => (
                    <ProductItem key={product.id}{...product} addToCart={addToCartHandler} removeFromCart={removeFromCartHandler} />
                ))}
            </Products>
            <ShoppingCart />
        </div>)
}