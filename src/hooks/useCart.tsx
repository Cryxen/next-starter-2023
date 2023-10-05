/*
Hook to update cart items

Before making the hook, the cart uses following states: 
useState: Products in cart
useState: total sum
useEffect: calculate total sum, also to update cartitems.
*/

import { useEffect, useState } from "react"

import { type CartItems } from "@/features/responses/types"

const useCart = () => {
  const [productsInCart, setProductsInCart] = useState<CartItems[]>([])
  const [totalSum, setTotalSum] = useState<number>(0)
const [counter, setCounter] = useState<number>(0)

  let cart: CartItems[] = []
  const addToCart = (
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

    console.log("Inside add to cart in custom hook")
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
    console.group("Add to cart")
    console.log(productsInCart)
    console.groupEnd()
    setCounter((prev) => prev + 1)

  }

  const removeFromCart = (id: number) => {
    /*
            Check if product exists in cart
            Product exists in cart:
                Remove one product from numberOfProducts
                If numberOfProducts is 0, remove product from list
            Update total sum
        */
    let index = -1
    index = productsInCart.findIndex((object) => object.productId == id)

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
      console.group("Remove from cart")
      console.log(productsInCart)
      console.groupEnd()
    }
    setCounter((prev) => prev + 1)
  }

  /*
    useEffect to update totalPrice
  */
  useEffect(() => {
    let sum = 0
    for (const iterator of productsInCart) {
      sum += iterator.productPrice * iterator.numberOfProducts
    }
    setTotalSum(sum)
  }, [productsInCart, counter])

  return { cart: productsInCart, sum: totalSum, addToCart, removeFromCart }
}
export default useCart
