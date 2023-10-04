"use client"

import { SetStateAction, useEffect, useState } from "react"

import Card from "@/components/Card"
import Cart from "@/components/Cart"
import ProductList from "@/components/ProductList"
import { createProducts, faker } from "@/features/responses/CreateProduct"
import { CartItems, Product } from "@/features/responses/types"

export default function ProductPage() {
  const [products, setProducts] = useState(
    Array.from(createProducts({ count: 10, faker }).values()),
  )
  const [productsInCart, setProductsInCart] = useState<CartItems[]>([])
  const [counter, setCounter] = useState<number>(0)

  let cart: CartItems[] = []
  let totalSum = 0

  /*
    useEffect for updating the DOM, number of wares in cart.
  */
  useEffect(() => {
    console.log("Inside useEffect")
  }, [counter])

  const addToCartHandler = (
    productId: number,
    productTitle: string,
    productPrice: number,
  ) => {
    /*
            Check if product exists in cart
            product exists in cart:
                make a copy of cart
                update number of products
                update productsInCarts state
            product doesn't exist in cart:
                add product at end of array with numberOfProducts = 1
        */
    setCounter((c) => c + 1)
    let index = -1
    index = productsInCart.findIndex((object) => object.productId == productId)

    // If test to see if product exists in cart
    if (index != -1) {
      cart = productsInCart
      cart[index].numberOfProducts++
      setProductsInCart(cart)
    }
    // Product doesn't exist in cart
    else {
      const numberOfProducts = 1
      setProductsInCart([
        ...productsInCart,
        { productId, productTitle, productPrice, numberOfProducts },
      ])
    }
    // Update the total sum
    totalSum = addToTotalSumCart(productsInCart)
    console.log("Total sum: " + totalSum)
  }

  const addToTotalSumCart = (cart: object[]) => {
    // Sum up the price in cart through iteration.
    let sum = 0
    for (const iterator of cart) {
      sum += iterator.productPrice * iterator.numberOfProducts
    }
    return sum
  }

  const removeFromCartHandler = (id: number) => {
    /*
            Check if product exists in cart
            Product exists in cart:
                Remove one product from numberOfProducts
                If numberOfProducts is 0, remove product from list
            Update total sum
        */
    setCounter((c) => c + 1)
    let index = -1
    index = productsInCart.findIndex((object) => object.productId == id)

    console.log(index)
    if (index != -1) {
      cart = productsInCart
      // If test to see if there's more than one product available
      if (cart[index].numberOfProducts > 1) {
        cart[index].numberOfProducts--
      }
      // Just one product left
      else {
        cart.splice(index, 1)
      }
      // Add products back in cart
      setProductsInCart(cart)
    }
    console.log(productsInCart)
    // Sum up the total sum
    totalSum = addToTotalSumCart(productsInCart)
    console.log("Total sum: " + totalSum)
  }

  return (
    <div className="flex flex-row">
      <ProductList>
        {products.map((product) => (
          <Card
            key={product.id}
            {...product}
            addToCart={addToCartHandler}
            removeFromCart={removeFromCartHandler}
          />
        ))}
      </ProductList>
      <Cart
        productsInCart={productsInCart}
        addToCart={addToCartHandler}
        removeFromCart={removeFromCartHandler}
      />
    </div>
  )
}
