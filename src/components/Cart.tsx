/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { CartItems } from "@/features/responses/types"
import { useEffect } from "react"

const Cart = ({ productsInCart, addToCart, removeFromCart }) => {
  console.log("Inside shopping cart")
  console.log(productsInCart)


  const handleAddToCart = (cartItem : CartItems) => {
    addToCart?.(cartItem.productId, cartItem.productTitle, cartItem.productPrice)
  }

  const handleRemoveFromCart = (cartItem : CartItems) => {
    removeFromCart?.(cartItem.productId)
  }

  return (
    <div>
      <p>Handlevogn:</p>
      <table>
        {productsInCart.map((element) => (
          <tr key={element.productId}>
            <td>
              <button onClick={() => { handleAddToCart(element); }}>+</button>
            </td>
            <td>
              <button onClick={() => {handleRemoveFromCart(element)}}>-</button>{" "}
            </td>
            <td>{element.productTitle}</td>
            <td>{element.numberOfProducts}</td>
            <td>({element.numberOfProducts * element.productPrice})</td>
          </tr>
        ))}
      </table>
    </div>
  )
}
export default Cart
