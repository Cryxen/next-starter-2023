import { CartItems } from "@/features/responses/types"

const Cart = ({productsInCart}) => {
    console.log("Inside shopping cart")
    console.log(productsInCart)
    return(
        <div>
        <p>Handlevogn:</p>
        <ul>
        {productsInCart.map((element) => (<li key={element.productId}>{element.productTitle}</li>))}
        </ul>
        </div>
    )

}
export default Cart