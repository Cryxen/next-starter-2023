"use client"

import { SetStateAction, useEffect, useState } from "react"

import Card from "@/components/Card"
import Cart from "@/components/Cart"
import ProductList from "@/components/ProductList"
import { createProducts, faker } from "@/features/responses/CreateProduct"
import { CartItems, Product } from "@/features/responses/types"
import useCart from "@/hooks/useCart"

export default function ProductPage() {
  const [products, setProducts] = useState<Product[]>()

  //Custom hook
  const { cart, sum, addToCart, removeFromCart } = useCart()

  // Get products fomr api
  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("/api/products", {
        method: "get",
      })
      const result = (await response.json()) as { data: Product[] }
      setProducts(result.data)
    }
    getProducts()
  }, [])

  return (
    <div className="flex flex-row">
      <ProductList>
        {products?.map((product) => (
          <Card
            key={product.id}
            {...product}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        ))}
      </ProductList>
      <Cart
        productsInCart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        totalSum={sum}
      />
    </div>
  )
}
