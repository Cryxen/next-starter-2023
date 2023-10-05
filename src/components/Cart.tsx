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
      <p className="underline text-lg font-bold text-center py-4">Handlevogn:</p>
      <table className="table-auto mr-5">
        <thead>
          <th></th>
          <th></th>
          <th>Vare:</th>
          <th>Antall:</th>
          <th>Sum:</th>
        </thead>
        <tbody>
        {productsInCart.map((element) => (
          <tr key={element.productId} className="text-md m-2">
            <td>
              <button
                onClick={() => {
                  handleAddToCart(element)
                }}
                className="border border-solid py-1 px-3 bg-gray-100 m-1"
              >
                +
              </button>
            </td>
            <td>
              <button
                onClick={() => {
                  handleRemoveFromCart(element)
                }}
                className="border border-solid py-1 px-3 bg-gray-100 m-1"

              >
                -
              </button>{" "}
            </td>
            <td className="mx-2">{element.productTitle}</td>
            <td className="mx-1">{element.numberOfProducts}</td>
            <td className="mx-1">({element.numberOfProducts * element.productPrice})</td>
          </tr>
        ))}
        </tbody>
      </table>
      <p className="mt-5 mr-5 font-bold text-right">Sum: {totalSum}</p>
      <button onClick={handlePurchase} className="border border-solid p-2 text-md absolute right-5">
        Kjøp
      </button>
    </div>
  )
}
export default Cart
