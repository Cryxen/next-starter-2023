"use client"


import Card from "@/components/Card";
import ProductList from "@/components/ProductList";
import Cart from "@/components/Cart";
import { createProducts, faker } from "@/features/responses/CreateProduct";
import { SetStateAction, useState } from "react";
import { CartItems, Product } from "@/features/responses/types";

export default function ProductPage() {
    const [products, setProducts] = useState(Array.from(createProducts({ count: 10, faker }).values()))
    const [productsInCart, setProductsInCart] = useState<CartItems[]>([])


    let cart: CartItems[] = []
    let totalSum  = 0

    const addToCartHandler = (productId: number, productTitle: string, productPrice: number) => {
        cart = [...cart, {productId, productTitle, productPrice}]
        setProductsInCart([...productsInCart, {productId, productTitle, productPrice}])
        console.log(productsInCart)
        totalSum = addToTotalSumCart(productsInCart)
        console.log("Total sum: " + totalSum)
    }

    const addToTotalSumCart = (cart: object[]) => {
        let sum = 0
        for (const iterator of cart) {
            sum+=iterator.productPrice
        }
        return sum
    }

    const removeFromCartHandler = (id: number) => {
        //cart = cart.filter((product) => product.id != id)
        let index = -1
        index = productsInCart.findIndex((object) => object.productId == id)

        console.log(index)
        if (index != -1) {
        cart = productsInCart
        cart.splice(index, 1)
        setProductsInCart(cart)

        }
        console.log(productsInCart)
        totalSum = addToTotalSumCart(productsInCart)
        console.log("Total sum: " + totalSum)
    }


    return (
        <div className="flex flex-row">
            <ProductList>
                {products.map((product) => (
                    <Card key={product.id}{...product} addToCart={addToCartHandler} removeFromCart={removeFromCartHandler} />
                ))}
            </ProductList>
            <Cart productsInCart = {productsInCart} />
        </div>)
}