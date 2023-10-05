/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useState } from "react"

import { CartItems } from "@/features/responses/types"

const Cart = ({ productsInCart, addToCart, removeFromCart, totalSum }) => {
  const [showCart, setShowCart] = useState<boolean>(false)

  //Handle items add to cart. TODO: Refactor this, as this is copy paste code
  const handleAddToCart = (cartItem: CartItems) => {
    addToCart?.(
      cartItem.productId,
      cartItem.productTitle,
      cartItem.productPrice,
    )
  }

  //Handle items remove from cart. TODO: Refactor this, as this is copy paste code
  const handleRemoveFromCart = (cartItem: CartItems) => {
    removeFromCart?.(cartItem.productId)
  }

  // Handle purchase
  const handlePurchase = () => {
    console.log("Handle purchase")
    console.log("Produkter i handlevogn: ")
    for (const product of productsInCart) {
      console.log(
        product.productTitle +
          " ---- " +
          product.numberOfProducts +
          " ---- " +
          product.productPrice * product.numberOfProducts,
      )
    }
    console.log("Total sum: " + totalSum)
  }

  const handleShowCart = () => {
    setShowCart(!showCart)
  }

  return (
    <div>
      <button
        onClick={handleShowCart}
        className="py-4 text-center text-lg font-bold underline"
      >
        Handlevogn:
      </button>
      <div className={showCart ? "content" : "hidden"}>
          <table className="mr-5 table-auto">
            <thead>
              <tr>
              <th></th>
              <th></th>
              <th>Vare:</th>
              <th>Antall:</th>
              <th>Sum:</th>
              </tr>
            </thead>
            <tbody>
              {productsInCart.map((element) => (
                <tr key={element.productId} className="text-md m-2">
                  <td>
                    <button
                      onClick={() => {
                        handleAddToCart(element)
                      }}
                      className="m-1 border border-solid bg-gray-100 px-3 py-1"
                    >
                      +
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        handleRemoveFromCart(element)
                      }}
                      className="m-1 border border-solid bg-gray-100 px-3 py-1"
                    >
                      -
                    </button>{" "}
                  </td>
                  <td className="mx-2">{element.productTitle}</td>
                  <td className="mx-1">{element.numberOfProducts}</td>
                  <td className="mx-1">
                    ({element.numberOfProducts * element.productPrice})
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mr-5 mt-5 text-right font-bold">Sum: {totalSum}</p>
          <button
            onClick={handlePurchase}
            className="text-md absolute right-5 border border-solid p-2"
          >
            Kjøp
          </button>
          </div>
    </div>
  )
}
export default Cart
