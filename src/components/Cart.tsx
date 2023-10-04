/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { CartItems } from "@/features/responses/types"
import { useEffect, useState } from "react"

const Cart = ({ productsInCart, addToCart, removeFromCart, counter }) => {

  const [totalSum, setTotalSum] = useState<number>(0)

  // useEffect for updating total price
  useEffect(() => {
    let sum = 0
    for (const iterator of productsInCart) {
      sum += iterator.productPrice * iterator.numberOfProducts
    }
    setTotalSum(sum)
  }, [counter, productsInCart])

  //Handle items add to cart. TODO: Refactor this, as this is copy paste code
  const handleAddToCart = (cartItem : CartItems) => {
    addToCart?.(cartItem.productId, cartItem.productTitle, cartItem.productPrice)
  }

  //Handle items remove from cart. TODO: Refactor this, as this is copy paste code
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
      <p>Sum: {totalSum}</p>
    </div>
  )
}
export default Cart
