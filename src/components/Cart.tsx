/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { CartItems } from "@/features/responses/types"

const Cart = ({ productsInCart, addToCart, removeFromCart, totalSum }) => {
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

  return (
    <div>
      <p>Handlevogn:</p>
      <table>
        <tbody>
        {productsInCart.map((element) => (
          <tr key={element.productId}>
            <td>
              <button
                onClick={() => {
                  handleAddToCart(element)
                }}
              >
                +
              </button>
            </td>
            <td>
              <button
                onClick={() => {
                  handleRemoveFromCart(element)
                }}
              >
                -
              </button>{" "}
            </td>
            <td>{element.productTitle}</td>
            <td>{element.numberOfProducts}</td>
            <td>({element.numberOfProducts * element.productPrice})</td>
          </tr>
        ))}
        </tbody>
      </table>
      <p>Sum: {totalSum}</p>
      <button onClick={handlePurchase} className="border border-solid">
        Kjøp
      </button>
    </div>
  )
}
export default Cart
